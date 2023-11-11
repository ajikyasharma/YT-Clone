import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';




const Search =()=>{

    return <div>
        
        
        <InputGroup className="mb-3 mt-3">
        <Form.Control
          placeholder="Search Here"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
       <Button variant="outline-secondary">Search</Button>
      </InputGroup>
    </div>
}
export default Search