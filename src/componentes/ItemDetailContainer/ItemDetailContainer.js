import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MOCK_DAT from "../../data/MOCK_DAT.json";
import { ItemDetail } from "../ItemDetail/ItemDetail";




const pedirDato = (id) => {
        
    return new Promise(( resolve, reject) => {
        setTimeout( () => {
            resolve(MOCK_DAT.find(item=>item.id === id))

        },1000)
})}


const ItemDetailContainer=()=>{

const [item ,setItem]=useState(null);
const [loading, setLoading]=useState(true);


const {itemId} =useParams();



useEffect(() => {
   pedirDato(Number(itemId))
    .then((response)=>{
        setItem(response);
        setLoading(false);
    }
    )

}, [itemId])

    
            return(
                <div>
                {loading ? (
                  <p>Cargando...</p>
                ) : (
                  <ItemDetail item={item} />
                )}
              </div>
              
                 
            )

}

export default ItemDetailContainer