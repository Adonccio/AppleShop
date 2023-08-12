import { Col, Row } from "reactstrap";
import ProductCard from "./ProductCard";


const ProductsList= ({products}: any) => {
    return (
    <>
    {}
            <Row className="g-5 container-list">
        {products.map((product: any) => (
          <Col md={6} lg={4} xl={3} key={product.id}>
            <ProductCard
              product={product}
            />
          </Col>
        ))}
      </Row>
            
        </>
    )
}

  export default ProductsList