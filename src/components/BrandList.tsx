import React from 'react'
import { List, Typography } from 'antd';
import Brand from '../interfaces/Brand';

interface Props {
  brands: Array<Brand>
}

const BrandList: React.FC<Props> = ({brands}) => {
  return (
    <List
      size="small"
      className="mb-4"
      header={<Typography.Title level={4} className="m-0 text-white">Brands</Typography.Title>}
      bordered
      dataSource={brands}
      renderItem={brand => (
        <List.Item>
          <List.Item.Meta 
            title={brand.name}
          />
        </List.Item>
      )}
    >
    </List>
  )
}

export default BrandList;
