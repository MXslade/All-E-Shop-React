import React from 'react'

import CategoryList from './CategoryList'
import BrandList from './BrandList'
import PaymentList from './PaymentList';

import Category from '../interfaces/Category';
import Brand from '../interfaces/Brand';

interface Props {
  categories: Array<Category>
  brands: Array<Brand>
}

const Sidebar: React.FC<Props> = ({categories, brands}) => {
  return (
    <>
      <CategoryList
        categories={categories}
      />
      <BrandList 
        brands={brands}
      />
      <PaymentList />
    </>
  )
}

export default Sidebar;
