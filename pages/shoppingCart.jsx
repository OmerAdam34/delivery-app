import { Table, CloseButton, Button, Card } from "react-bootstrap";
import Image from "next/image";
import CardHeader from "react-bootstrap/esm/CardHeader";

export default function ShoppingCart() {
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
              <tr>
                <td>
                  <Image
                    src={"/pictures/products/beer.png"}
                    alt="beer"
                    width={50}
                    height={50}
                  />
                </td>
                <td>Beer</td>
                <td>double</td>
                <td>1</td>
                <td>1.99</td>
                <td>
                  <Button className="btn-sm">x</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="col-3 p-2">
          <div>
            <Card>
              <CardHeader as="h5">Total</CardHeader>
              <Card.Body className="text-center">
                <Card.Title>6.95 EUR</Card.Title>
                <Button variant="primary">To Checkout</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
