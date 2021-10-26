import React from 'react'
import './checkoutProduct.css'
import { useStateValue } from './StateProvider'

const CheckoutProduct = ({id, title, price, image, rating}) => {
    const [{basket}, dispatch]=useStateValue()
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image"
             src={image} alt="" />
            
            <div className="checkoutProduct__info">     
                <p className="checkoutProduct__title">{title} </p>
                <p className="checkoutProduct__price">  
                
                <strong>₦{price}</strong>
                </p>
                 <div className="product__rating">
                         {
                            Array(rating)
                            .fill()
                            .map((_, index) =>(
                                <p key={index}>⭐</p>
                            ))
                        }
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>

            </div>
        </div>

    ) 
}

export default CheckoutProduct
