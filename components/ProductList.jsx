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
                  {product.name} {Number(product.price).toFixed(2)}€
                </Card.Title>
                <Card.Text>{product.description}</Card.Text>

                <Link href={`/products/${product.url}`} passHref>
                  <a>
                    <Button variant="danger">Bestellen</Button>
                  </a>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
}
