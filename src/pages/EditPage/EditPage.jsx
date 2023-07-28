import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { updateItem } from "../../utilities/items-service";

export default function EditPage({ getItem }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state;
  const [updatedItem, setUpdatedItem] = useState({
    _id: item._id,
    productname: item.productname,
    SKU: item.SKU,
    quantity: item.quantity,
  });

  async function handleSubmit(evt) {
    evt.preventDefault();
    await updateItem(updatedItem);
    getItem();
    navigate(`/`);
  }

  function handleChange(evt) {
    const updatedItemData = {
      ...updatedItem,
      [evt.target.name]: evt.target.value,
    };
    setUpdatedItem(updatedItemData);
  }

  return (
    <form className="item-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="productname"
        value={updatedItem.productname}
        onChange={handleChange}
      />
      <input
        type="number"
        name="quantity"
        value={updatedItem.quantity}
        onChange={handleChange}
      />
      <input
        type="text"
        name="SKU"
        value={updatedItem.SKU}
        onChange={handleChange}
      />
      <button type="submit">Sumbit</button>
    </form>
  );
}
