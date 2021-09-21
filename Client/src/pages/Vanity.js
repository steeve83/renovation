import React from 'react';
import product_card from '../shared/product_data';
import '../styles/Vanity.css';

const Vanity = () => {
    console.log(product_card);
    const listItems = product_card.map((item)=>
        <div className="card" key={item.id}>
            <div className="card_img">
                <img src={item.thumb} alt='' />
            </div>
            <div className="card_header">
             <h2>{item.product_name}</h2>
             <p>{item.description}</p>
             <p className='price'>{item.price}<span>{item.currency}</span></p>
             <div className="btn">Add to cart</div>
            </div>

        </div>
    );
    return(
        <div className="container_vanity">
            {/* <h3>Vanity</h3> */}
            {listItems}
        </div>
    )
}

export default Vanity;
