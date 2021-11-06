import React from 'react'
import './Checkout.css'

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <div>
                    <h2 className="checkout_title">
                      장바구니입니다.  
                    </h2>
                </div>

            </div>
            <div className="checkout_right">
                <h2>장바구니 총 금액</h2>
            </div>
        </div>
        
    )
}

export default Checkout
