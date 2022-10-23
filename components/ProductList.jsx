import jsondb from "../jsondb/products";
import { Card, Button } from "react-bootstrap";
import Link from "next/link";

export default function ProductList() {
  return (
    <div>
      <div className="row row-cols-3">
        {jsondb.products.map((products) => (
          <div key={products.name} className="mt-3 col">
            <Card>
              <Link href={`/products/)${products.url}`} passHref>
                <a>
                  <Card.Img variant="top" src={products.picture} />
                </a>
              </Link>
              <Card.Body>
                <Card.Title>
                  {products.name} {products.price}€
                </Card.Title>
                <Card.Text>{products.description}</Card.Text>
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
