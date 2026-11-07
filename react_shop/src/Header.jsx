import './styles/header.css'
import websiteLogo from './assets/logo.svg'
import shoppingCart from './assets/shopping-cart.png'
import { Link } from 'react-router'

function Header({shopCart}){

    const itemQuantity = shopCart===undefined || shopCart.length===0 ? '0' : shopCart.reduce((res,val)=>{
        return res+=val[1];
    },0)

    return (
        <header>
            <div className='header_left'>
                <a href="/"><img src={websiteLogo} alt="website_logo"/></a>
                <p>FastShoping</p>
            </div>
            <div className='header_right'>
                <span>
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/cart" className='shoppingIcon'>
                        <img src={shoppingCart} alt="shopping_cart" />
                        <span>
                            {itemQuantity}
                        </span>
                    </Link>
                </span>
            </div>
        </header>
    )
}

export default Header