import Capstone_background_image from './Capstone_background_image.jpeg';
import './App.css';
import YouTubeApi from './apis/YouTubeApi.js';
import DBapi from './apis/dbapi.js';
import NavBar from './nav/NavBar';
import SignUpForm from  './auth/SignUpForm.js';
import LoginForm from './auth/LoginForm.js';
import MainPageOut from './home/MainPageOut.js';
import NewSearch from './search/NewSearch.js';
import HistoryList from './search/HistoryList';
import CarouselView from './common/CarouselView.js';
import useLocalStorage from './useLocalStorage';
import Video5 from './search/Video.js';
import HistoryForm from './common/HistoryForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import React, {BrowserRouter, Route, Routes} from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import { CardImg, Card, CardImgOverlay } from 'reactstrap';

export const TOKEN_STORAGE_ID = "jobly-token";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoaded, setUserLoaded] = useState(false);
  const [token, setToken] = useLocalStorage();
  const [videos, setVideos] = useState();
  const [onevideoview, setOneVideoView] = useState();
  const [dislikeIds, setDislikeIds] = useState([]);
  const [likesIds, setLikesIds] = useState(new Set ([]));
  const [historyList, setHistoryList] =useState(new Set([]));
  const [filterHistoryList, setFilterHistoryList] = useState([]);
  const [rejectList, setRejectList] = useState('');
  
  useEffect(() => {
    async function getCurrentUser() {
      if(token){
        try{
          let {username} = jwtDecode(token);
          DBapi.token = token;
          const currentUser = await DBapi.getUser(username);
          setCurrentUser(currentUser);
          setDislikeIds(currentUser.dislikes);
          setLikesIds(new Set(currentUser.likes));
          setHistoryList(new Set(currentUser.list))
        }catch(error){
          setCurrentUser(null);
        }
      }
      setUserLoaded(true);
    }
    setUserLoaded(false);
    getCurrentUser();
  }, [token], [dislikeIds])

  useEffect(() => {
    let test = dislikeIds.map((dislikeId) => (dislikeId.nokeep_id))
    test = test.join(" -");
    setRejectList(test);
  }, [dislikeIds])

  useEffect (() => {
  }, [rejectList])

  useEffect(() => {
  }, [onevideoview]);

  useEffect (() => {
  }, [filterHistoryList])

  async function register(data) {
    try{
      let token = await DBapi.register(data);
      setToken(token)
      return{success: true};
    }catch(error){
      console.error("sign-up failed. Please try again", error)
      return {success: false, error}
    }
  }

  async function login(data){
    try{
      let token = await DBapi.login(data);
      setToken(token)
      return{success: true};
    }catch(err){
      console.err("Login failed. Please try again", err)
      return {success: false, err}
    }
  }

  async function externalAPICall(data){
    let res = await YouTubeApi.loadClient();
    let test = await YouTubeApi.execute("", data, );
    setVideos(test.result.items);
    return {success: true};
  }

  async function noLikeVideo(data){
    try{
      let res = await DBapi.logDislike(data)
      return{success:true};
    }catch(error){
      console.error("Logging a video & putting it in the dislike section didn't work")
      return {success: false, error}
    }
  }

  async function likeButton(data){
    try{
      setOneVideoView(onevideoview=> ({
        ["username"]: currentUser.username,
        ["link"]: data.link,
        ["videoid"]: data.videoid,
        ["title"]: data.title
      }))
    }catch(error){
      console.error("Logging a video & putting it in the dislike section didn't work")
      return {success: false, error}
    }
  }

  async function dislikeLog(data){
    try{
      let res = await DBapi.logDislike(data)
      return{success:true};
    }catch(error){
      return {success: false, error};
    }
  }

  async function video_eval(data){
    try{
      let res = await DBapi.video_evalProfile(data)
      return{success:true};
    }catch(error){
      console.error("Video Evaluation didnt work on this send to Database")
      return {success: false, error}
    }
  }

  async function video_historyPull(data){
    try{
      let res = await DBapi.video_HistoryPull(data)
      return{success:true};
    }catch(error){
      console.error("Video Evaluation didnt work on this send to Database")
      return {success: false, error}
    }
  }

  function logout(){
    setCurrentUser(null);
    setToken(null);
  }
  
  async function filterHistory (data) {
    try{
      const res = await DBapi.filterHistoryLinks(data)
      setFilterHistoryList(res)
      return {success: true}
    }catch(error){
      console.error("filtering Pre-watched, Liked, Videos Did not work, please try again")
    }
  }
 
  return (
          <div className="App">
            <BrowserRouter>
              <NavBar currentUser={currentUser} logout={logout}/>
                <main className="mainbackground">
                <Card inverse>
                  <CardImg
                    alt="Card Image Cap"
                    src={Capstone_background_image}>
                  </CardImg>
                  <CardImgOverlay>
                    <Routes>
                      <Route path="/" element={<MainPageOut login={login} register={register} currentUser={currentUser}/>}/>
                      <Route path="/signup" element={<SignUpForm register={register} login={login} currentUser={currentUser}/>}/>
                      <Route path="/login" element={<LoginForm login={login} register={register} currentUser={currentUser}/>}/>
                      <Route path="/newsearch" element={<NewSearch login={login} register={register} currentUser={currentUser} externalAPICall={externalAPICall} videos={videos} dislikeIds={dislikeIds} rejectList={rejectList} />}/>
                      <Route path="/historyform" element={<HistoryForm login={login} register={register} currentUser={currentUser} externalAPICAl={externalAPICall} videos={videos} video_eval={video_eval} noLikeVideo={noLikeVideo} dislikeLog={dislikeLog} likeButton={likeButton} video_historyPull={video_historyPull} historyList={historyList} filterHistory={filterHistory} filterHistoryList={filterHistoryList}/>}/>
                      <Route path="/historylist" element={<HistoryList login={login} register={register} currentUser={currentUser} externalAPICAl={externalAPICall} videos={videos} video_eval={video_eval} noLikeVideo={noLikeVideo} dislikeLog={dislikeLog} likeButton={likeButton} video_historyPull={video_historyPull} historyList={historyList} filterHistory={filterHistory} filterHistoryList={filterHistoryList}/>}/>
                      <Route path="/carousel" element={<CarouselView login={login} register={register} currentUser={currentUser} externalAPICAl={externalAPICall} videos={videos} video_eval={video_eval} noLikeVideo={noLikeVideo} dislikeLog={dislikeLog} likeButton={likeButton} dislikeIds={dislikeIds}/>}/>
                      <Route path="/onevideo" element={<Video5 login={login} register={register} currentUser={currentUser} externalAPICAl={externalAPICall} videos={videos} video_eval={video_eval} noLikeVideo={noLikeVideo} onevideoview={onevideoview} dislikeIds={dislikeIds}/>}/>
                    </Routes>
                  </CardImgOverlay>
                </Card>
                </main>
            </BrowserRouter>
          </div>
  );
}

export default App;