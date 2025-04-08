import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown,faStar  } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({item}) => {
  return (
    <div className="product-card">
        <img src={item?.img} alt={item?.title} className="product-image"/>

        {item?.amount <= 0 && (
            <div className="sold-out">SOLD OUT</div>
        )}

        <div className="product-badge">
            {item?.choice && <FontAwesomeIcon icon={faCrown} className="badge-icon best" title="Best" />}
            {item?.new && <FontAwesomeIcon icon={faStar} className="badge-icon new" title="New" />}
        </div>

        <div>{item?.title}</div>
        <div>{item?.price}₩</div>
        
    </div>
  )
}

export default ProductCard