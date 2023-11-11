
import { Container, Row,Col } from "react-bootstrap"
import Image from 'react-bootstrap/Image';


const Video =()=>{

    return <div className="mb-3 mt-3">
        <Row>
            <Col xs={8} md={8} lg={8}>
            <Image fluid src="https://images.unsplash.com/photo-1493193218435-eb21654c7df6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D" />
            </Col>
            <Col xs={4} md={4} lg={4}>
               <p>Welcome Youtube</p>
            </Col>
        </Row>
        
    </div>
}

export default Video