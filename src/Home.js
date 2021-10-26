import React from 'react'
import './home.css'
import Product from './Product'

const Home = () => {
    return (
        <div className="home">
            <img className="home__image"
            src="https://store-images.s-microsoft.com/image/apps.16285.14618985536919905.552c0017-6644-49a8-8467-8f7b34ce0428.30ad6b05-16d9-4d5e-a242-43107708a16a" alt="" />
            
             <div className="home__row">
                <Product 
                    id="1"
                    title="Apple MacBook Pro"
                    price={1300000.00}
                    rating={5}
                    image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/H/F/2054_1600868849.jpg"
                />
                
                 <Product 
                    id="2"
                    title="Amazon Echo Plus 2"
                    price={133000}
                    rating={5}
                    image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/W/T/174379_1618588888.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="13241"
                    title="Apple iPhone 13 Pro Max -256GB"
                    price={1120000}
                    rating={5}
                    image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/B/S/72199_1632932042.jpg"
                />
                 <Product 
                    id="3"
                    title="Samsung Galaxy Note 8 - 6.30"
                    price={130000.00}
                    rating={5}
                    image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Y/Q/182972_1607946919.jpg"
                />
                 <Product 
                    id="4"
                    title="Samsung Galaxy M31s - 6.5"
                    price={145000}
                    rating={5}
                    image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/S/P/67343_1621876631.jpg"
                />
            </div>
             <div className="home__row">
                <Product 
                    id="5"
                    title="LG TV 55 inch NanoCell Series 4K Active HDR"
                    price={429600.00}
                    rating={5}
                    image="https://i1.wp.com/abizot.com.ng/wp-content/uploads/2021/02/LG-NanoCell-TV-55-inch-NANO79-Series-4K-Active-HDR-WebOS-Smart-ThinQ-AI...jpg?fit=1216%2C1040&ssl=1"
                />
                <Product 
                    id="5"
                    title="LG TV 55 inch NanoCell Series 4K Active HDR"
                    price={429600.00}
                    rating={5}
                    image="https://i1.wp.com/abizot.com.ng/wp-content/uploads/2021/02/LG-NanoCell-TV-55-inch-NANO79-Series-4K-Active-HDR-WebOS-Smart-ThinQ-AI...jpg?fit=1216%2C1040&ssl=1"
                />
            </div>
            
        </div>
    )
}

export default Home
