export const ItemDetail = ({item}) => {
    return(
        <div>
        <img src={item.img}alt={item.name}/>
         <h3 className="name">{item.name}</h3>
         <p className="description">{item.description}</p>
         <p className="price">Precio:${item.price}</p>
         </div>
            
        
         
    )}

    