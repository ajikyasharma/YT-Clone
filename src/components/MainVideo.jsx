import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const MainVideo =({mainVideo})=>{
  
console.log(mainVideo)
if(mainVideo.id == null) return <h1>Loading...</h1>


      const src=`https://www.youtube.com/embed/${mainVideo.id.videoId}` 
    return <div className="mb-3 mt-3">
            <Card style={{ width: '100%' }}>
              <iframe width="856" height="500" src={src} ></iframe>
    
      <Card.Body>
        <Card.Title>{mainVideo.snippet.channelTitle}</Card.Title>
        <Card.Text>
          {mainVideo.snippet.description}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>
}

export default MainVideo