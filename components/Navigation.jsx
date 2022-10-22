import Link from "next/link";
import Image from "next/image";
import { Badge } from "react-bootstrap";

export default function Navigation() {
  return (
    <div className="shadow sticky-top p-2 mb-2 bg-dark">
      <div className="d-flex justify-content-between align-items-center">
        <Link href="/">
          <a>
            <Image
              src={"/pictures/logo.png"}
              alt="logo"
              width={80}
              height={80}
            />
          </a>
        </Link>
        <Link href="/warenkorb">
          <a>
            <Image
              src={"/pictures/warenkorb.png"}
              alt="logo"
              width={30}
              height={30}
            />
            <Badge pill bg="success">
              2
            </Badge>
          </a>
        </Link>
      </div>
    </div>
  );
}
