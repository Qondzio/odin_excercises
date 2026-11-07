import { useEffect, useState } from 'react';
import './styles/Shop.css'

function Shop(props){
    const [shopItems, updateShopItems] = useState([]);
    
    useEffect(()=>{
            
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(res=>{
            updateShopItems(res);
        });
    },[]);
    
   function addItem(item,price, image){
    props.updateShopCart(prevItem =>{
        const findIndex = prevItem.findIndex(elem => elem[0].item === item);

        if(findIndex !== -1){
            return prevItem.map((elem,index)=>
                index === findIndex ? [elem[0], elem[1]+1] : elem
            )
        }
        else{
            return [...prevItem, [{item,price,image},1]];
        }
    })
    
   }
    
    return(
        <div className="shop">
            <h1>Check out our most popular products!</h1>
            <div className='shopItems'>
               {shopItems.map((item, index)=>{
                    return(
                        <div className='item' key={index}>
                            <img src={item.image}   alt={item.title} />
                            <p>{item.title}</p>
                            <div className='addToCart' onClick={()=>addItem(item.title,item.price,item.image)}>
                                <p>Add to cart</p>
                                <p className='plusCart'>+</p>
                            </div>
                        </div>
                    )
               })}
            </div>
        </div>
    )
}

export default Shop;