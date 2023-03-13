import "./ItemListContainer.css"
import MOCK_DAT from "../../data/MOCK_DAT.json"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"



const pedirDatos = () => {
        
    return new Promise(( resolve, reject) => {
        setTimeout( () => {
            resolve(MOCK_DAT)

        },1000)
})

}

const ItemListContainer = () => {

    const [items, setItems] = useState ([])
    const { categoryId }=useParams()
    const{itemId}=useParams
    console.log(categoryId)

 useEffect (() => {
    pedirDatos()
    .then((response)=>{
    if (!categoryId){
        setItems(response)
    }
    else{
        setItems(response.filter((items)=>items.category === categoryId))
    }
})
    .catch((error)=>{
    console.log(error) 
    })

},[categoryId] )

return(
    <div>
           {
            items.map((el) => (
                <div className="divContainer" key={el.id}>
                 <img src={el.img}alt={el.name}/>
                 <h3 className="name">{el.name}</h3>
                 <p className="description">{el.description}</p>
                 <p className="price">Precio:${el.price}</p>
                 <Link to ={`/detail/${ itemId }`} className="btn btn-primary">VER MÁS</Link>
                </div> 
             )
                 )
           } 

    </div>
  
)
}

export default ItemListContainer