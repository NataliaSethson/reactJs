
const ItemDetail = ({items}) => {
    return(
        <div>
        <img src={items.img}alt={items.name}/>
         <h3 className="name">{items.name}</h3>
         <p className="description">{items.description}</p>
         <p className="price">Precio:${items.price}</p>
         </div>
         
    )}

    export default ItemDetail