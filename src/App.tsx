import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Row, Col } from 'antd'
import Container from 'react-bootstrap/Container'

import MyNavbar from './components/MyNavbar'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Details from './components/Details'

import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';

import Category from './interfaces/Category';
import Brand from './interfaces/Brand';

function App() {

  const [categories, setCategories] = useState(Array<Category>());
  const [brands, setBrands] = useState(Array<Brand>());

  const getCategories = async () => {
    const url = 'http://localhost:8081/api/categories';
    const response = await fetch(url, {method: 'get'});
    const jsonData = await response.json();
    setCategories(jsonData);
  }

  const getBrands = async() => {
    const url = 'http://localhost:8081/api/brands';
    const response = await fetch(url, {method: 'get'});
    const jsonData = await response.json();
    setBrands(jsonData);
  }

  useEffect(() => {
    getCategories();
    getBrands();
  }, []);

  return (
    <Router>
      <MyNavbar />
      <Container>
        <Row>
          <Col span={6} className="pr-4">
            <Sidebar 
              categories={categories}
              brands={brands}
            />
          </Col>
          <Col span={18}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/details/:id" children={<Details/>} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
