
import { Container, Row,Col } from "react-bootstrap"
import Image from 'react-bootstrap/Image';


const Video =({videoItem})=>{
    

    return <div className="mb-3 mt-3">
        <Container>
        <Row>
            <Col xs={8} md={8} lg={8}>
            <Image fluid src={videoItem.snippet.thumbnails.high.url} />
            </Col>
            <Col xs={4} md={4} lg={4}>
               <h4>{videoItem.snippet.channelTitle}</h4>
            </Col>
        </Row>
        </Container>
        
    </div>
}

export default Video