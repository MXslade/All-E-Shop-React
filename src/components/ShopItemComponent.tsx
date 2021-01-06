import React, { ReactNode } from 'react'

import { Card, Image } from 'antd';

import ShopItem from '../interfaces/ShopItem';

interface Props {
  shopItem: ShopItem;
}

const ShopItemComponent:React.FC<Props> = ({shopItem}) => {

  const getContent = (shopItem: ShopItem): ReactNode => {
    return (
      <>
        <h5 className="text-success">{shopItem.name}</h5>
        <h5>${shopItem.price}</h5>
        <p className="text-wrap text-secondary overflow-hidden" style={{height: '5rem', maxHeight: '5rem'}}>{shopItem.description}</p>
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

  return (
    <Card 
      hoverable
      cover={
        <Image style={{
          maxWidth: '100%', 
          maxHeight: '10rem', 
          width: 'auto',
          height: '10rem',
          overflow: 'hidden'
        }} 
        src={'http://localhost:8081/shop_item_main_picture/' + shopItem.id}/>
      }
    >
      <Card.Meta title={getContent(shopItem)}/>
    </Card>
  )
}

export default ShopItemComponent;
