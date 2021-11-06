import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'

function Product({id, title, image, price, rating}) {
    return (
        <div className="product">
            <div className="product_info">
                <p>{ title }</p>
                <p className="product_price">
                    <small>가격</small>
                    <strong>{price}</strong>
                    <small>원</small>
                </p>
                <div className="product_rating">
                    {
                        Array(rating).fill().map(()=>(<p>★</p>))   
                    }
                </div>

            </div>

            <img src={image} alt=""/>
            <Link to="/checkout">
                <button>구매하기</button>
            </Link>

        </div>
    )
}

export default Product


