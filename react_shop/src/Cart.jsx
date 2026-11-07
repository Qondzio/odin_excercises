import './styles/Cart.css'
import trash from'./assets/trash.png'

function Cart(props){

    const subtotal = props.shopCart.reduce((acc,value)=>{
                        let number=(value[0].price)*(value[1]);
                        return acc+=number;
                    },0).toFixed(2);

    const tax = (subtotal*0.12).toFixed(2)
    const total= (parseFloat(subtotal)+parseFloat(tax)).toFixed(2);

    function clearCart(){
        props.updateShopCart([]);
    }

    function removeItem(index){
        let arrayCopy=[...props.shopCart];
        arrayCopy.splice(index,1);
        props.updateShopCart(arrayCopy);
    }

    function changeQuantity(index,symbol){
        let arrayCopy=[...props.shopCart];
        if(symbol === '-'){
            arrayCopy[index][1]--;
            if(arrayCopy[index][1]<1) return removeItem(index);
            props.updateShopCart(arrayCopy);
        }
        else{
            arrayCopy[index][1]++;
            props.updateShopCart(arrayCopy);
        }
    }
    
    return (
        <div className="cartPage">
            <h1>Your cart:</h1>
            {props.shopCart.length === 0 ? 
                    (<p className='cartEmpty'>Your shop cart is empty!</p>):
                    (<>
            <div className='cartLeft'>
                <div className='cartItems'>
                    {props.shopCart.map((item, index) =>{
                    return (
                        <div className='cartItem' key={index}>
                            <img src={item[0].image} alt={item[0].item} />
                            <div className='cartItemInfo'>
                                <p>{item[0].item}</p>
                                <p className='itemPrice'>{'$'+item[0].price}</p>
                            </div>
                            <div className='itemActions'>
                                <img src={trash} alt="trash_icon" className='trashIcon' onClick={()=>removeItem(index)}/>
                                <div className='itemAmount'>
                                    <span className='minus' onClick={()=>changeQuantity(index,'-')}>-</span>
                                    <span className='itemQuantity'>{item[1]}</span>
                                    <span className='plus' onClick={()=>changeQuantity(index,'+')}>+</span>
                                </div>
                                <p className='subtotal'>Subtotal: ${((item[0].price)*(item[1])).toFixed(2)}</p>
                            </div>
                        </div>
                    )
                    })}
                </div>
            </div>
            <div className='cartRight'>
                <h2>Order Summary</h2>
                <span>
                    <p>Subtotal</p>
                    <p>${subtotal}</p>
                </span>
                <span>
                    <p>Tax</p>
                    <p>${tax}</p>
                </span>
                <span>
                    <p>Total</p>
                    <p>${total}</p>
                </span>
                <button>Proceed to Checkout</button>
                <button onClick={()=>clearCart()}>Clear cart</button>
                <button>Continue</button>
            </div>
            </>
            )}
        </div>
    )
}

export default Cart