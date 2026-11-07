import Footer from './Footer'
import Header from './Header'
import Shop from './Shop'
import App from './App'
import ErrorPage from './ErrorPage'
import Cart from './Cart'
import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'


function RouterWrapper(){
    const [shopCart, updateShopCart] = useState([]);

    const routes = [
    {
        path: '/',
        element: <App shopCart={shopCart}/>,
        errorElement: <ErrorPage />
    },
    {
        path: 'shop',
        element: (
            <>
                <Header shopCart={shopCart}/>
                <Shop updateShopCart={updateShopCart}/>
                <Footer />
            </>
        )
    },
    {
        path: 'cart',
        element: (
            <>
                <Header shopCart={shopCart}/>
                <Cart shopCart={shopCart} updateShopCart={updateShopCart}/>
                <Footer />
            </>
        )
    }
]

    const router = createBrowserRouter(routes)
    return <RouterProvider router={router}/>
}



export default RouterWrapper