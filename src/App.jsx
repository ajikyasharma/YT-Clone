import List from "./components/List"
import MainVideo from "./components/MainVideo"
import Search from "./components/Search"
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { Container, Row,Col } from "react-bootstrap"

const App=()=>{

  return <Container>
    {/* <h1>Hello</h1>
    <Search />
    <MainVideo />
    <List /> */}
     
     
      <Row >
        <Search/>
      </Row>
      <Row >
        <Col sm="8" xs="12"  >
          <MainVideo/>
        </Col>
        <Col sm="4" xs="12"  >
          <List/>
        </Col>
        </Row>
     </Container>
    
}

export default App