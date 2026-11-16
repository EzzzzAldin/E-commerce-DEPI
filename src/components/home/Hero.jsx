import hero from "../../assets/hero.png";
import { BagIcon } from "../ui/Icons";

function Hero({
  title = "KIMONOS, CAFTANS & PAREOs",
  description = "Poolside glam included From $4.99",
  buttonText = "SHOP NOW",
  image = hero,
}) {
  // L4 => View
  return (
    <section className="hero flex flex-col bg-blue-400 lg:h-115 lg:flex-row">
      <div className="hero-media h-64 w-full shrink-0 bg-neutral-100 lg:h-full lg:w-135">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="hero-content flex flex-1 flex-col items-start justify-center gap-8 px-4 py-10 lg:px-16">
        <h1 className="text-3xl font-bold text-white lg:text-4xl">{title}</h1>
        <p className="text-lg text-white lg:text-2xl">{description}</p>
        <a
          href="#"
          className="flex items-center gap-2 rounded-md bg-blue-600 px-8 py-4 text-sm font-bold text-white"
        >
          <BagIcon className="size-5" />
          {buttonText}
        </a>
      </div>
    </section>
  );
}

export default Hero;
