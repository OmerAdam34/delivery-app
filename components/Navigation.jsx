import Link from "next/link";
import Image from "next/image";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Navigation() {
  const quantity = useSelector((state) => state.warenkorb.quantity);
  return (
    <div className="shadow sticky-top p-2 mb-2 bg-dark">
      <div className="d-flex justify-content-between align-items-center">
        <Link href="/">
          <a>
            <Image
              src={"/pictures/logo.png"}
              alt="logo"
              width={100}
              height={100}
            />
          </a>
        </Link>
        <Link href="/shoppingCart">
          <a>
            <Image
              src={"/pictures/warenkorb.png"}
              alt="logo"
              width={30}
              height={30}
            />
            <Badge pill bg="success">
              {quantity}
            </Badge>
          </a>
        </Link>
      </div>
    </div>
  );
}
