import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Form, Accordion  } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  let {id} = useParams();
  const [product,setProduct] = useState(null);
  const [commonInfo,setCommonInfo] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const getProductDetail = async() =>{
    let url = `https://my-json-server.typicode.com/AhnYeonSeob94/projectshop/products/${id}`
    let resp = await fetch(url);
    let data = await resp.json();
    setProduct(data);

    let commonUrl = `https://my-json-server.typicode.com/AhnYeonSeob94/projectshop/commonInfo`
    let response = await fetch(commonUrl);
    let res = await response.json();
    setCommonInfo(res);

    console.log(data);
    if (data?.amount > 0) {
      setQuantity(1); // 초기 수량 설정
    }
    
  }
  useEffect(()=>{
    getProductDetail()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const handleAddToCart = () => {
    const confirmed = window.confirm(`${product.title} ${quantity}개를 장바구니에 담을까요?`);
    if (confirmed) {
      // TODO: 장바구니 추가 로직 (예: localStorage, context 등)
      alert(`${product.title} ${quantity}개가 장바구니에 담겼습니다!`);
    } 
  }

  return (
    <Container className='mt-5'>
      <Row className="product-detail">
        {/* 이미지 영역 */}
        <Col md={8} className="text-center">
          <img src={product?.img} alt={product?.title} style={{ width: '100%', maxWidth: 700 }} />
        </Col>

        {/* 상품 정보 영역 */}
        <Col md={4}>
          <h3>{product?.title}</h3>
          <p><strong>KRW {product?.price?.toLocaleString()}</strong></p>

          <div className="d-flex align-items-center mb-3">
            <span className="me-2">수량:</span>
            <Form.Control
              type="number"
              value={quantity}
              min={1}
              max={product?.amount}
              style={{ width: 80 }}
              onChange={(e) => {
                let val = Number(e.target.value);
                if (val < 1) val = 0;
                if (val > product.amount) val = product.amount;
                setQuantity(val);
              }}
            />
          </div>

          <p><strong>총 상품금액:</strong> KRW {(product?.price * quantity).toLocaleString()} ({quantity}개)</p>

          <div className="mb-4">
            {product?.amount === 0 ? (
              <>
                <Button variant="secondary" className="me-2" disabled>SOLDOUT!</Button>
                <Button variant="secondary" className="me-2" disabled>SOLDOUT!</Button>
              </>
            ) : (
              <>
                <Button variant="dark" className="me-2">BUY NOW</Button>
                <Button variant="secondary" className="me-2" onClick={handleAddToCart}>ADD TO CART</Button>
              </>
            )}
            <Button variant="outline-secondary">WISHLIST</Button>
          </div>

          {/* 상세 정보 영역 (Accordion 토글) */}
          <div className="product-info">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Details</Accordion.Header>
                <Accordion.Body>
                  <p><strong>중량:</strong> {product?.weight}</p>
                  <p><strong>원재료:</strong> {product?.ingredients}</p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>보관 방법</Accordion.Header>
                <Accordion.Body>{commonInfo?.storageMethod}</Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>급여 방법</Accordion.Header>
                <Accordion.Body>{commonInfo?.howToFeedIt}</Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>배송 안내</Accordion.Header>
                <Accordion.Body>{commonInfo?.shipping}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail