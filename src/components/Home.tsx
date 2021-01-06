import React, { useState, useEffect } from 'react'

import SimpleSearchBar from './SimpleSearchBar'
import MyCarousel from './MyCarousel'
import ShopItemList from './ShopItemList'

import ShopItem from '../interfaces/ShopItem'

const Home: React.FC = () => {

  const [shopItems, setShopItems] = useState(Array<ShopItem>());

  const getShopItems = async () => {
    const url = 'http://localhost:8081/api/items';
    const response = await fetch(url, {method: 'get'});
    const jsonData = await response.json();
    setShopItems(jsonData);
  }

  useEffect(() => {
    getShopItems();
  }, []);

  return (
    <>
      <SimpleSearchBar />
      <MyCarousel />
      <ShopItemList shopItems={shopItems}/>
    </>
  )
}

export default Home;
