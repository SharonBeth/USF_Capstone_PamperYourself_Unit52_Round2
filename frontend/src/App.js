
import mainvanity from './mainvanity.jpg';
import './App.css';
import YouTubeApi from './apis/YouTubeApi.js';
import DBapi from './apis/dbapi.js';
import NavBar from './nav/NavBar';
import SignUpForm from  './auth/SignUpForm.js';
import LoginForm from './auth/LoginForm.js';
import MainPageOut from './home/MainPageOut.js';
import MainPageIn from './home/MainPageIn.js';
import NewSearch from './search/NewSearch.js';
import HistoryList from './search/HistoryList';
import CarouselView from './common/CarouselView.js';
import useLocalStorage from './useLocalStorage';
import Video5 from './search/Video5.js';
import HistoryForm from './common/HistoryForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import React, {BrowserRouter, Route, Routes} from 'react-router-dom';
import Axios from 'axios';
import { jwtDecode } from "jwt-decode";

import { CardImg, Card, CardImgOverlay } from 'reactstrap';
import AddToDatabaseForm from './todatabase/AddToDatabaseForm.js';

export const TOKEN_STORAGE_ID = "jobly-token";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoaded, setUserLoaded] = useState(false);
  // const login = false;
  // const signup = true;
  const [token, setToken] = useLocalStorage();
  const [videos, setVideos] = useState();
  const [onevideoview, setOneVideoView] = useState();
  const [dislikeIds, setDislikeIds] = useState([]);
  const [likesIds, setLikesIds] = useState(new Set ([]));
  const [historyList, setHistoryList] =useState(new Set([]));
  const [filterHistoryList, setFilterHistoryList] = useState([]);
  const [rejectList, setRejectList] = useState('');
  useEffect(() => {
    //This is an attempt to confirm if there is someone already signed in.
    async function getCurrentUser() {
      //This statement allows for the token to be truthy (meaning someont is singed in with a current token, or falsey menaing there is no token and no one is signed in at the moment)
      if(token){
        try{
          let {username} = jwtDecode(token);
          DBapi.token = token;
          console.log(token);
          const currentUser = await DBapi.getUser(username);
          setCurrentUser(currentUser);
          setDislikeIds(currentUser.dislikes);
          setLikesIds(new Set(currentUser.likes));
          // const likedLinks = await DBapi.video_HistoryPull(currentUser)
          setHistoryList(new Set(currentUser.list))
        }catch(error){
          console.error("Problem with authentication token.", error);
          setCurrentUser(null);
        }
      }
      setUserLoaded(true);
    }
    setUserLoaded(false);
    getCurrentUser();
  }, [token], [dislikeIds])

  useEffect(() => {
    let test = dislikeIds.map((dislikeId) => (
      dislikeId.nokeep_id))
  
    test = test.join(" -");
    setRejectList(test)
    console.log(rejectList, "rejectList in App.js last line")
  }, [dislikeIds])

  useEffect (() => {
  console.log(rejectList, "reject list")
  }, [rejectList])
  useEffect(() => {
    console.log(onevideoview, "onevideoview inside useEffect");
  }, [onevideoview]);

  useEffect (() => {
    console.log("Testing change in filterHistoryList", filterHistoryList)

  }, [filterHistoryList])

  // useEffect (() => {
  //   console.log("Testing change in dislikeIds", dislikeIds)

  // }, [dislikeIds])
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
      console.log(currentUser, "final step before login")
      return{success: true};
    }catch(err){
      console.err("Login failed. Please try again", err)
      return {success: false, err}
    }
  }

  async function externalAPICall(data){
    console.log(data, "data in external APICall")
    let res = await YouTubeApi.loadClient();
    let test = await YouTubeApi.execute("", data, );
    setVideos(test.result.items);
    return {success: true};
  }

  // async function onevideocall(videoid){
  //   let res = await YouTubeApi.loadClient();
  //   // let test = await YouTubeApi.execute("", data, );
  //   setOneVideoView(test.result.items)
    
  // }

  async function noLikeVideo(data){
    try{
      console.log("noLikevideo")
      let res = await DBapi.logDislike(data)
      return{success:true};
    }catch(error){
      console.error("Logging a video & putting it in the dislike section didn't work")
      return {success: false, error}
    }
  }
  async function likeButton(data){
    try{
      console.log("likebutton-currentUser", currentUser.username)
      setOneVideoView(onevideoview=> ({
        ["username"]: currentUser.username,
        ["link"]: data.link,
        ["videoid"]: data.videoid,
        ["title"]: data.title
      }))
      console.log(onevideoview, "onevideoview")
      // let res = await DBapi.logLike(data)
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
  //   try{
  //     let res = await YouTubeApi.loadClient();
  //     console.log(res);
  //     console.log(data.category+"data.category")
  //     let test = await YouTubeApi.execute("", data, );
  //     console.log(test)
  //     return {success: true};
  //   }catch(error){
  //     console.error("Testing YouTube API for running it at the start.")
  //   }
  // }

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
    console.log("UpdateFunction:SignUpForm/logout For testing purposes only")
  }
  
  async function filterHistory (data) {
    try{
      console.log(data, "filterHistory ofdata")
      const res = await DBapi.filterHistoryLinks(data)
      console.log(res, "After DB api, chekcing res.list")
      setFilterHistoryList(res)
      console.log(filterHistoryList, "App.js(frontend)/filterHistory()/const filterHistoryList")
      return {success: true}
    }catch(error){
      console.error("filtering Pre-watched, Liked, Videos Did not work, please try again")
    }
  }
  console.log(dislikeIds, "checking user.dislikeIds")
  return (
    <div className="App">
        <BrowserRouter>
          <NavBar currentUser={currentUser} logout={logout}/>
          <main className="mainbackground" >
            <Card inverse>
              <CardImg
                alt="Card Image Cap"
                src={mainvanity}>
              </CardImg>
              <CardImgOverlay>
                <Routes>
                  <Route path="/" element={<MainPageOut login={login} register={register} currentUser={currentUser}/>}/>
                  {/* <Route path="/mainpagein" element={<MainPageIn login={login} register={register} currentUser={currentUser}/>}/> */}
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