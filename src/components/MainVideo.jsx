import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const MainVideo =()=>{

    return <div className="mb-3 mt-3">
            <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1699384428169-2b8a11e2ed77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>
}

export default MainVideo