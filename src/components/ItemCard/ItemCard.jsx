import './ItemCard.css';
import { Link } from 'react-router-dom';

export default function ItemCard({item}) {
  return (
    <Link to={`/item/${item._id}`} >
      <li className='item-card'>
        <h2>{item.productname}</h2>
        <h3><span>Qty: {item.quantity}</span> | <span>SKU: {item.SKU}</span></h3>
      </li>
    </Link>
  )
}