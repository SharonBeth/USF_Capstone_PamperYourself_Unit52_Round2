import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { 
  Button,
  Container,
  Row,
  Col  
} from "reactstrap";
import './Video.css';

function VideoCard({source, videoid, title, noLikeVideo, dislikeLog, likeButton, currentUser}){
  const history = useNavigate();
  const initialState = {link: source, videoid: videoid, title: title, likeorhate:"", username: currentUser.username}
  const [onevideoinfo, setOneVideoView] = useState(initialState)
  
  const like = async () => { 
    let likebutton = await likeButton(onevideoinfo)
    history('/onevideo')
  }  
  
  const noLike = async () => {
    let hate = "hate";
    setOneVideoView(onevideoinfo=>({
      ...onevideoinfo,
      ["likeorhate"]: hate,
    }));
    let logging = await noLikeVideo(onevideoinfo);
    let dislike = await dislikeLog(onevideoinfo)
    history('/newsearch')
  }
  useEffect(() => {
  }, [onevideoinfo]);

  return (
      <div>
        <Container fluid="true">
          <Col sm={{size: 10, offset: 1}}>
            <p>Video Title: {title}</p>
            <iframe className="carouselvideo" src={source} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <br></br>
            <Row>
              <Col sm={{size: 3, offset: 2}}>
                <Button style={{background:"#ed80df"}} onClick={like}>Add it</Button>
              </Col>
              <Col sm={{size: 3, offset: 2}}>
                <Button style={{background:"#ed80df"}} onClick={noLike}>Toss it</Button>
              </Col>
            </Row>
          </Col>
        </Container>
        <br></br>
      </div>
    )
  }
  
export default VideoCard;
