import { useEffect, useState } from "react"
import List from "./components/List"
import MainVideo from "./components/MainVideo"
import Search from "./components/Search"
import { Container, Row,Col } from "react-bootstrap"
import youtube from "./api/youtube"


//AIzaSyDuZGboufPQ2aNq6cXNeFRNhNCucusWPIY

const App=()=>{

  const[videos ,setVideos] =useState([])
  const[selectedVideo, setSelectetedVideo] = useState('')

  async function handleSubmit(searchTerm){

   const response = await youtube.get("search",{
      params:{
        part:"snippet",
        maxResult:5,
        key:"AIzaSyDuZGboufPQ2aNq6cXNeFRNhNCucusWPIY",
        q:searchTerm
      }
    })
    setVideos(response.data.items)
    setSelectetedVideo(response.data.items[0])

  }

  useEffect (()=>{
        handleSubmit('srk')
        
  },[])

  const onVideoChange=(data)=>{
    setSelectetedVideo(data)
  }



  return <Container>
      <Row >
        <Search onSubmit={handleSubmit}/>
      </Row>
      <Row >
        <Col sm="8" xs="12"  >
          <MainVideo mainVideo={selectedVideo}/>
        </Col>
        <Col sm="4" xs="12"  >
          <List  videos={videos}  onVideoChange={onVideoChange}/>
        </Col>
        </Row>
     </Container>
    
}

export default App