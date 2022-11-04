import { Carousel } from "react-bootstrap";
import Image from "next/image";

export default function Slider() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Carousel controls={false} fade={true}>
        <Carousel.Item>
          <Image
            className="d-block w-100 rounded-3"
            src="/pictures/food/burger.png"
            alt="pizza"
            width={300}
            height={300}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100 rounded-3"
            src="/pictures/food/pizza.png"
            alt="pizza"
            width={300}
            height={300}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100 rounded-3"
            src="/pictures/food/chicken.png"
            alt="chicken"
            width={350}
            height={300}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
