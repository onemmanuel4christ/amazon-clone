import React from 'react'
import { useStateValue } from './StateProvider'
import './checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

const Checkout = () => {
    const [{basket}] = useStateValue() 
    return (
        <div className="checkout">
             <div className="checkout__left">
                 <img 
             className="checkout__ad"
              src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_NotApproved._TTW_.jpg" alt="" 
              />
              
              {
                  basket?.length === 0 ? (
                      <div>
                          <h2>You have no item in the shopping list</h2>
                      </div>
                  ) : (
                      <div>
                          <h2 className="checkout__title">Your Basket</h2>
                          {basket.map((item, index )=>(
                              <CheckoutProduct key={index}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                             />
                          ))}
                      </div>
                  )
              }
             </div>
             {basket.length > 0 && (
                 <div className="checkout__right">
                     <Subtotal />
                 </div>
             )}
        </div>
    )
}

export default Checkout
