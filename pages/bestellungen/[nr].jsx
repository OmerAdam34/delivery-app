import { Table, Spinner, Button, Card } from "react-bootstrap";
import { useRouter } from "next/router";

export default function Bestellung() {
  const router = useRouter();
  const { nr } = router.query;
  return (
    <div>
      <h1>Order Status</h1>
      <div className="row mt-4">
        <div className="col-9">
          <Table hover responsive>
            <thead>
              <tr>
                <th>Order No</th>
                <th>Customer</th>
                <th>Adress</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{nr}</td>
                <td>Johny</td>
                <td>Monkey Island</td>

                <td>
                  <span>Zubereitung</span>
                  <Spinner animation="border" variant="success" size="sm" />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="col-3 p-2">
          <div>
            <Card>
              <Card as="h5">Total</Card>
              <Card.Body className="text-center">
                <Card.Title>6.95 EUR</Card.Title>
                <Button variant="success disabled">Payed</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
