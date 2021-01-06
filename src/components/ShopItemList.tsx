import React from 'react'

import { Link } from 'react-router-dom';

import { List } from 'antd';

import ShopItemComponent from './ShopItemComponent';

import ShopItem from '../interfaces/ShopItem';

interface Props {
  shopItems: Array<ShopItem>
}

const ShopItemList: React.FC<Props> = ({shopItems}) => {
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 6,
        xxl: 3,
      }}
      dataSource={shopItems}
      renderItem={shopItem => (
        <Link to={`details/${shopItem.id}`} style={{textDecoration: 'none'}}>
          <List.Item>
            <ShopItemComponent shopItem={shopItem}/>
          </List.Item>
        </Link>
      )}
    >

    </List>
  )
}

export default ShopItemList;
