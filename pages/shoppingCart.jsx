import { Table, CloseButton, Button, Card } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useDispatch, useSelector } from "react-redux";

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart);

  const entfernen = (product) => {};

  return (
    <div>
      <h1>Warenkorb</h1>
      <div className="row mt-4">
        <div className="col-9">
          <Table hover responsive>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Extras</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>
                  <CloseButton disabled />
                </th>
              </tr>
            </thead>
            <tbody>
              {shoppingCart.products.map((product) => (
                <tr key={product._id}>
                  <td>
                    <Image
                      src={product.picture}
                      alt={product.name}
                      width={50}
                      height={50}
                    />
                  </td>
                  <td>
                    <Link href={`/products/${product.url}`}>
                      <a className="text-danger">{product.name}</a>
                    </Link>
                  </td>
                  <td>
                    {product.extras.map((extra) => (
                      <span key={extra._id}>{extra.text}</span>
                    ))}
                  </td>
                  <td>{product.quantity}</td>
                  <td>{(product.price * product.quantity).toFixed(2)}</td>
                  <td>
                    <Button
                      className="btn-sm"
                      onClick={() => entfernen(product)}
                    >
                      x
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="col-3 p-2">
          <div>
            <Card>
              <CardHeader as="h5">Total</CardHeader>
              <Card.Body className="text-center">
                <Card.Title>{shoppingCart.amount.toFixed(2)}</Card.Title>
                <Button variant="primary">To Checkout</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
