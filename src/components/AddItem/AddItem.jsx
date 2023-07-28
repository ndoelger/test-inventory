import { createItem } from "../../utilities/items-service";
import { useState } from "react";
import './AddItem.css';

export default function AddItem({ getItem }) {
  const [item, setItem] = useState({
    productname: "",
    quantity: 0,
    SKU: "",
  });

  async function handleSubmit(evt) {
    evt.preventDefault();
    await createItem(item);
    setItem({
      productname: "",
      quantity: 0,
      SKU: "",
    });
    getItem();
  }

  function handleChange(evt) {
    const itemData = { ...item, [evt.target.name]: evt.target.value };
    setItem(itemData);
  }

  return (
    <form onSubmit={handleSubmit} className='item-form'>
      <label>Product Name: </label>
      <input
        type="text"
        name="productname"
        value={item.productname}
        onChange={handleChange}
        required
      />
      <label>Quantity: </label>
      <input
        type="number"
        name="quantity"
        value={item.quantity}
        onChange={handleChange}
        required
      />
      <label>SKU: </label>
      <input
        type="text"
        name="SKU"
        value={item.SKU}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}
