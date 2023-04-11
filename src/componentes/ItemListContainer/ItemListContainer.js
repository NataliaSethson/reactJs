import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {collection, getDocs, query, where} from "firebase/firestore";
import { db } from "../../firebase/config";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = () => {

    const [productos, setProductos] = useState ([1])
    const [loading, setLoading]= useState(true)
    const { categoryId }=useParams()
    

 useEffect (() => {
  const productosRef=collection(db,"productos")
  const q = categoryId

  ? query(productosRef, where("category", "==", categoryId))
  : productosRef

  getDocs(q)
            .then((res) => {
                setLoading(true)
                const docs = res.docs.map((doc) => {
                    return {...doc.data(), id: doc.id}
                }) 
                setProductos(docs)
            })
            .finally(() => {
                setLoading(false)
            })
            
        
    }, [categoryId])

    return (
        <div className="contenedor">
            {loading 
                ? <h2 className="cargandoListado">Cargando listado, aguarde por favor.</h2>
                : <ItemList items={productos}/>
            }
        </div>
    )
}

export default ItemListContainer