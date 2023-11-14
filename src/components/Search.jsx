import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';




const Search =({onSubmit})=>{

  const [searchTerm, setSearchTerm] = useState('')

  const submitHandler=(e)=>{
    e.preventDefault()
    onSubmit(searchTerm)
  }

    return <div>
      <form onSubmit={submitHandler}>
      <InputGroup className="mb-3 mt-3">
        <Form.Control type="text" value={searchTerm} onChange={(e=> setSearchTerm(e.target.value))}/>
       <Button type="submit" variant="outline-secondary">Search</Button>
      </InputGroup>
      </form>

    </div>
}
export default Search