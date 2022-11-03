import { Card, Button } from "react-bootstrap";
import Link from "next/link";

export default function ProductList({ products }) {
  return (
    <div>
      <div className="row row-cols-3">
        {products?.map((product) => (
          <div key={product.name} className="mt-3 col">
            <Card>
              <Link href={`/products/${product.url}`} passHref>
                <a>
                  <Card.Img variant="top" src={product.picture} />
                </a>
              </Link>
              <Card.Body>
                <Card.Title>
                  {product.name} {product.price}€
                </Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Button variant="danger">add to card</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
}
