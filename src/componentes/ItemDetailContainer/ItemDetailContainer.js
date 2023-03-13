import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MOCK_DAT from "../../data/MOCK_DAT.json";




const pedirDato = (id) => {
        
    return new Promise(( resolve, reject) => {
        setTimeout( () => {
            resolve(MOCK_DAT.find(item=>item.id === id))

        },1500)
})}


const ItemDetailContainer=()=>{

const [item ,setItem]=useState(null)


const {itemId} =useParams()



useEffect(() => {
    
    pedirDato(Number(itemId))
    .then((response)=>{
        setItem(response)
    }
    )

}, [itemId])

    const itemDetail = ({item}) => {
            return(
                <div>
                <img src={item.img}alt={item.name}/>
                 <h3 className="name">{item.name}</h3>
                 <p className="description">{item.description}</p>
                 <p className="price">Precio:${item.price}</p>
                 </div>
                 
            )

}}

export default ItemDetailContainer