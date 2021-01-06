import React, { useState, useEffect, ReactNode } from 'react'

import { useParams } from 'react-router-dom'

import { Card, Image, Carousel  } from 'antd';

import SimpleSearchBar from './SimpleSearchBar';

import ShopItem from '../interfaces/ShopItem';
import Picture from '../interfaces/Picture';

interface RouteParams {
  id: string
}

const Details: React.FC = () => {

  const { id } = useParams<RouteParams>();

  const [shopItem, setShopItem] = useState<ShopItem | null>(null);
  const [pictures, setPictures] = useState<Array<Picture> | null>(null);

  const getShopItem = async () => {
    const url = 'http://localhost:8081/api/details/' + id;
    const response = await fetch(url, {method: 'get'});
    const jsonData = await response.json();
    setShopItem(jsonData);
  }

  const getPictures = async () => {
    const url = 'http://localhost:8081/api/shop_item_pictures/' + id;
    const response = await fetch(url, {method: 'get'});
    const jsonData= await response.json();
    setPictures(jsonData);
  }

  useEffect(() => {
    getShopItem();
    getPictures();
  }, []);

  const getContent = (): ReactNode => {
    if (shopItem !== null) {
      return (
        <>
          <h5 className="text-success">{shopItem.name}</h5>
          <h5>${shopItem.price}</h5>
          <p className="text-wrap text-secondary overflow-hidden" style={{height: '3rem', maxHeight: '5rem'}}>{shopItem.description}</p>
          <p className="text-wrap font-weight-bold" style={{height: '2rem', maxHeight: '2rem'}}>
            <span className="text-uppercase">brand:{' '}</span> 
            <span className="text-primary">{shopItem.brand.name}, {shopItem.brand.country.name}</span>
          </p>
          <p className="m-0">
            {Array.from(Array(shopItem.fullStars), (star, index) => (
              <i key={index} className="fas fa-star"></i>
            ))}
            {Array.from(Array(shopItem.halfStars), (star, index) => (
              <i key={index} className="fas fa-star-half"></i>
            ))}
            {Array.from(Array(shopItem.emptyStars), (star, index) => (
              <i key={index} className="far fa-star"></i>
            ))}
          </p>
        </> 
      )
    }
    return <div>Loading...</div>
  }

  return (
    <>
      <SimpleSearchBar />
      <Card 
        cover={
          <Carousel autoplay>
            {pictures?.map((picture) => (
              <Image
                key={picture.id}
                src={'http://localhost:8081/shop_item_picture/' + picture.url}
              />
            ))}
          </Carousel>
        }
      >
        <Card.Meta title={getContent()}/>
      </Card>
    </>
  )
}

export default Details;
