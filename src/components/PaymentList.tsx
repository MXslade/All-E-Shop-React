import React from 'react'
import { List, Typography } from 'antd';

interface Payment {
  iconClass: string
}

const BrandList: React.FC = () => {

  const payments: Array<Payment> = [
    {iconClass: 'fab fa-cc-apple-pay'},
    {iconClass: 'fab fa-cc-visa'},
    {iconClass: 'fab fa-cc-paypal'},
    {iconClass: 'fab fa-cc-amazon-pay'},
    {iconClass: 'fab fa-cc-mastercard'},
    {iconClass: 'fab fa-cc-amex'}
  ];

  return (
    <List
      className="mb-4"
      header={<Typography.Title level={4} className="m-0 text-white">Payments</Typography.Title>}
      bordered
      grid={{
        gutter: 4,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 6,
        xxl: 3,
      }}
      dataSource={payments}
      renderItem={payment => (
        <List.Item className="text-center p-0 m-0 mt-2">
          <List.Item.Meta
            className="p-0" 
            title={<i className={payment.iconClass + ' text-info'} style={{fontSize: '3rem'}}></i>}
          />
        </List.Item>
      )}
    >
    </List>
  )
}

export default BrandList;
