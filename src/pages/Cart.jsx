import React from 'react';
import Layout from '../components/Layout'
import CartItem from '../components/cart/CartItem';
import { productsData } from '../utils/data'
import '../css/Cart.css'


const Cart = () => {
    const productsCopy = productsData;

    return(
        <Layout>
            <section className="cart py-5">
                <div className="container">
                    <h1 className="mb-5">Shopping Cart</h1>
                
                    <div className="row">
                        {productsCopy.map((product, i)=>
                            i < 2 && (
                                <CartItem key={i} index={i+1}
                                imgUrl={product.img_url} title={product.name}
                                brand={product.brand} discount={product.discount}
                                price={product.price_usd}
                                />
                            )
                        )}
                    </div>
                </div>  
            </section>
        </Layout>
    );
}

export default Cart;

