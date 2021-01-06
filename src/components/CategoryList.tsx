import React from 'react'
import { List, Avatar, Typography } from 'antd';
import Category from '../interfaces/Category';

interface Props {
  categories: Array<Category>
}

const CategoryList: React.FC<Props> = ({categories}) => {
  return (
    <List
      size="small"
      className="mb-4"
      header={<Typography.Title level={4} className="m-0 text-white">Categories</Typography.Title>}
      bordered
      dataSource={categories}
      renderItem={category => (
        <List.Item>
          <List.Item.Meta 
            avatar={<Avatar src={category.logoUrl}/>}
            title={category.name}
          />
        </List.Item>
      )}
    >
    </List>
  )
}

export default CategoryList;
