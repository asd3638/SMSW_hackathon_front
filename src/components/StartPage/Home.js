import React from 'react'
import Product from './Product'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <div className="home_row">
                    <Product id="1" title="제품1입니다" price={10000} image="https://media.tiffany.com/is/image/tiffanydm/02_Desktop_1440x924_WhatIsAnEngagementRingSetting?$tile$&wid=1440&hei=912"
                    rating={1}/>
                </div>
                <div className="home_row">
                    <Product/>
                    <Product/>
                </div>
                <div className="home_row">
                    <Product/>
                </div>

            </div>
        </div>
    )
}

export default Home
