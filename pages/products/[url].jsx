import Link from "next/link";
import Image from "next/image";
import { ListGroup, Button, ListGroupItem } from "react-bootstrap";
import mongodb from "../../utils/mongodb";
import Product from "../../models/Product";
import { useState } from "react";

export default function ProductPage({ product }) {
  const [price, setPrice] = useState(product.price);
  const [extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const addExtra = (event, extra) => {
    const checked = event.target.checked;
    if (checked) {
      setPrice(price + extra.price);
      setExtras([...extras, extra]);
    } else {
      setPrice(price - extra.price);
      setExtras(extras.filter((allExtras) => allExtras._id !== extra._id));
    }
  };

  console.log(extras);

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
              <h2 className="text-danger">{price.toFixed(2)} €</h2>
            </ListGroupItem>
            <ListGroupItem>{product.description}</ListGroupItem>
            <ListGroupItem>
              {product.extras.length ? "Extras: " : <p></p>}
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
                value={quantity}
                min="1"
                max="100"
                onChange={(event) => setQuantity(event.target.value)}
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
