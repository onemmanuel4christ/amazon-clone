import React from 'react'
import './subtotal.css'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider'
import { getBassketTotal } from './reducer'


const Subtotal = () => {
const [{ basket }, dispatch] = useStateValue() 
    return (
        <div className="subtotal"> 
            {/* price */}
            <CurrencyFormat
                renderText={(value) =>(
                    <>
                    <p>
                        SubTotal ({basket.length} items):
                        <strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" /> this order contains a gift
                    </small>
                    </>
                )}
                decimalScale={2} 
                value={getBassketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₦"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
