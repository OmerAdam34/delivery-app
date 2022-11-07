import Link from "next/link";
import Image from "next/image";
import { ListGroup, Button, ListGroupItem } from "react-bootstrap";
import mongodb from "../../utils/mongodb";
import Product from "../../models/Product";

export default function ProductPage({ product }) {
  const addExtra = (event, extra) => {
    alert(extra.text + " für " + extra.price);
  };

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
              {product.extras.length ? "Extras" : <p></p>}
              {product.extras.map((extra) => (
                <span key={extra._id}>
                  {extra.text}
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    id={extra.text}
                    onChange={(event) => addExtra(event, extra)}
                  />
                </span>
              ))}
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

export async function getServerSideProps(context) {
  const url = context.params.url;
  await mongodb.dbConnect();
  const product = await Product.findOne({ url }).lean();
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
