import { ParallaxScroll } from "./parallax-scroll";
import cyber1 from "../../assets/cyber1.jpg";
import cyber2 from "../../assets/cyber2.jpg";
import cyber4 from "../../assets/cyber4.jpg";

const sampleImages = [cyber1, cyber2, cyber4].map(image => image.src);

export function ParallaxScrollDemo() {
  return <ParallaxScroll images={sampleImages} />;
}
