import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const SimpleSearchBar: React.FC = () => {

  const [searchText, setSearchText] = useState<string>('');

  return (
    <Form className="mb-4">
      <Form.Group as={Row}>
        <Col sm={10}>
          <Form.Control 
            type="text" 
            value={searchText} 
            placeholder="Enter to search..."
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchText(event.target.value)}
          />
        </Col>
        <Col sm={2}>
          <Button variant="success" type="submit" className="w-100">Search</Button>
        </Col>
      </Form.Group>
    </Form>
  )
}

export default SimpleSearchBar;
