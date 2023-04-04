import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {collection, getDocs, query, where} from "firebase/firestore";
import { db } from "../../firebase/config";


const ItemListContainer = () => {

    const [items, setItems] = useState ([1])
    const { categoryId }=useParams()
    

 useEffect (() => {
  const productosRef=collection(db,"productos")
  const q = categoryId

  ? query(productosRef, where("category", "==", categoryId))
  : productosRef

  getDocs(q)
            .then((res) => {
                const docs = res.docs.map((doc) => {
                    return {...doc.data(), id: doc.id}
                }) 
                setItems(docs)
            })
            
        
    }, [categoryId])

return(
    <div className='row my-5'>
           {
            items.map((el) => (
                <div className='key' key={el.id}>
                 <img src={el.img}alt={el.name}/>
                 <div className="containerItem">
                 <h3 className="name">{el.name}</h3>
                 <p className="description">{el.description}</p>
                 <p className="price">Precio:${el.price}</p>
                 <Link to ={`/detail/${ el.id }`} className="boton">VER MÁS</Link>
                 </div>
                </div> 
             )
                 )
           } 

    </div>
  
)
}

export default ItemListContainer