import { useRouter } from "next/router";
import jsondb from "../../jsondb/products";
import Link from "next/link";
import Image from "next/image";
import { ListGroup, Button, ListGroupItem } from "react-bootstrap";

export default function ProductPage() {
  const router = useRouter();
  const { url } = router.query;
  const product = jsondb.products.find((a) => a.url === url);

  if (!product) {
    return (
      <div>
        <h2>Product not available</h2>
      </div>
    );
  }
  return (
    <div>
      <div>
        <Link href="/">
          <a className="text-dark">← Back to overview</a>
        </Link>
      </div>
      <div className="row row-cols-2 mt-2">
        <div>
          <Image
            className="rounded-3"
            src={product.picture}
            alt={product.name}
            width={600}
            height={600}
            layout="responsive"
          />
        </div>
        <div>
          <h1>{product.name}</h1>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h2 className="text-danger">{product.price} €</h2>
            </ListGroupItem>
            <ListGroupItem>{product.description}</ListGroupItem>
            <ListGroupItem>
              Extra: double
              <input className="form-check-input me-2" type="checkbox" />
              extra Salami
              <input className="form-check-input me-2" type="checkbox" />
            </ListGroupItem>
            <ListGroupItem>
              <input
                className="form-control w-50"
                type="number"
                placeholder="1"
                min="1"
              ></input>
            </ListGroupItem>
            <ListGroupItem className="row">
              <div>
                <Button variant="danger">add to cart</Button>
              </div>
            </ListGroupItem>
          </ListGroup>
        </div>
      </div>
    </div>
  );
}
