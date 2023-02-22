import "./ItemListContainer.css"

const ItemListContainer =({servicios, duracion}) => {
   
    return (
        <div className="ItemListContainer">
            <h2>Servicios:{servicios}</h2>
            <p>Duración:{duracion}</p>
            <hr/>
        </div>


   
   )
}

export default ItemListContainer