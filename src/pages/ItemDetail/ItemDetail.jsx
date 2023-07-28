import { useNavigate, useParams, Link } from "react-router-dom";
import { getOneItem, updateItem, deleteItem } from "../../utilities/items-service";
import { useEffect, useState } from "react";

export default function ItemDetail({ getItem }) {

  const { id } = useParams();
  const [item, setItem] = useState({});
  const navigate = useNavigate();
  
  async function removeItem(id) {
    await deleteItem(id);
    getItem();
    navigate("/");
  }

  async function plusMinusOne(changeValue){
    const updatedItemData = {
      _id: item._id,
      productname: item.productname,
      SKU: item.SKU,
      quantity: item.quantity+changeValue,
    }

    console.log(updatedItemData);
    await updateItem(updatedItemData);
    fetchOneItem();
  }

  async function fetchOneItem(){
    let oneItem = await getOneItem(id);
    setItem(oneItem);
  }

  useEffect(()=>{
    fetchOneItem();
  },[])

  return (
    <div className="item-detail">
      <h2>{item.productname}</h2>
      <h3>
        <span>Qty: {item.quantity}</span> | <span>SKU: {item.SKU}</span>
      </h3>
      <Link to={`/item/${item._id}/update`} state={{ item: item }}>
        <button>Edit</button>
      </Link>{" "}
      <span> &nbsp; | &nbsp; </span>
      <button onClick={() => removeItem(item._id)}>Delete</button>
      <br></br>
      <br></br>

    <button onClick={() => plusMinusOne(1)}>+1</button>
    <span> &nbsp;&nbsp; </span>
    <button onClick={() => plusMinusOne(-1)}>-1</button>
 
    </div>
  );
}
