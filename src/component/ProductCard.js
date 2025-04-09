import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown,faStar  } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const ProductCard = ({item}) => {
    const navigate = useNavigate();
    const showDetail=()=>{
        navigate(`/products/${item.id}`);
    }
  return (
    <div className="product-card" onClick={showDetail}>
        <div className="image-wrapper">
            <img src={item?.img} alt={item?.title} className="product-image" />

            {item?.amount <= 0 && (
            <div className="sold-out">SOLD OUT</div>
            )}

            <div className="product-badge">
            {item?.choice && (
                <div className="badge best">
                <FontAwesomeIcon icon={faCrown} /> Best!
                </div>
            )}
            {item?.new && (
                <div className="badge new">
                <FontAwesomeIcon icon={faStar} /> New!
                </div>
            )}
            </div>
        </div>

        <div>{item?.title}</div>
        <div>{item?.price}₩</div>
        
    </div>
  )
}

export default ProductCard