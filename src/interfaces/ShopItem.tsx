import Brand from "./Brand";
import Category from "./Category";

interface ShopItem {
  id: number,
  addedDate: Date,
  amount: number,
  brand: Brand,
  categories: Array<Category>,
  description: string,
  emptyStars: number,
  fullStars: number,
  halfStars: number,
  inTopPage: boolean,
  name: string,
  price: number
}

export default ShopItem;
