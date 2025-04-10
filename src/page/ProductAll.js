import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [query] = useSearchParams();

    const getProducts= async()=>{
        let searchQuery = query.get('q');
        console.log("query?:",searchQuery);
        let url = searchQuery
        ? `https://my-json-server.typicode.com/AhnYeonSeob94/projectshop/products?q=${searchQuery}`
        : `https://my-json-server.typicode.com/AhnYeonSeob94/projectshop/products`;
        let resp = await fetch(url);
        let data = await resp.json();
        setProductList(data);
    }

    useEffect(()=>{
        getProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[query]);

  return (
    <div>
        <Container>
            <Row>
                {productList.map((item)=>(
                    <Col xs={12} sm={6} md={4} lg={3} key={item?.id}>
                        <ProductCard item={item}/>
                    </Col>
                ))}
            </Row>
        </Container>
       
    </div>
  )
}

export default ProductAll