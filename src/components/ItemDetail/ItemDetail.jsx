import { useLocation } from "react-router-dom";

export default function ItemDetail({items}) {

const location = useLocation();
const { from } = location.state;
console.log({from});

  
    return (
        <>
            {items.map((i) => {
                if (i.id === itemid){
                    return (
                        <div className='item-detail'>
                            <h2>{i.productname}</h2>
                            <h3><span>Qty: {i.quantity}</span> | <span>SKU: {i.SKU}</span></h3>
                            <Link to={`/item/${item._id}/update`} state={{from: id}}>Edit</Link>
                            <button>Delete</button>
                        </div>
                    )
                }
                return null;
            })}
        </>
  )
}