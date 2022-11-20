import { Table, CloseButton, Button, Card } from "react-bootstrap";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { deleteProduct } from "../redux/warenkorbSlice";

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const warenkorb = useSelector((state) => state.warenkorb);

  const entfernen = (product) => {
    dispatch(deleteProduct(product));
  };

  return (
    <div>
      {warenkorb.quantity === 0 ? (
        <h2>Der Warenkorb ist leer!</h2>
      ) : (
        <div>
          <h1>Warenkorb</h1>
          <div className="row mt-4">
            <div className="col-9">
              <Table hover responsive>
                <thead>
                  <tr>
                    <th>Bild</th>
                    <th>Name</th>
                    <th>Extras</th>
                    <th>Menge</th>
                    <th>Betrag</th>
                    <th>
                      <CloseButton disabled />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {warenkorb.products.map((product) => (
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
                          <span key={extra._id}>{extra.text} </span>
                        ))}
                      </td>
                      <td>{product.total}</td>
                      <td>
                        {Number(product.price * product.total).toFixed(2)}
                      </td>
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
              <div className="shadow">
                <Card>
                  <Card.Header as="h5">Gesamt</Card.Header>
                  <Card.Body className="text-center">
                    <Card.Title>
                      {Number(warenkorb.amount).toFixed(2)}
                    </Card.Title>
                    <Button variant="primary">Zur Kasse</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
