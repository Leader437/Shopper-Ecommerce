import Hero_img from "../../Assets/hero_image.png";
import Hand_icon from "../../Assets/hand_icon.png";
import arrow_icon from "../../Assets/arrow.png"
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
      <div className="container flex flex-col md:flex-row-reverse md:items-center md:justify-between gap-10 py-14">
        <div className="w-full sm:w-[70%] sm:mx-auto md:mx-0 md:w-[40%] lg:w-[35%]">
          <img
            src={Hero_img}
            alt="A Girl Pic wearing Fashionable Outfit"
            className="w-full"
          />
        </div>
        <div>
          <h6 className="uppercase text-blackHeading font-medium mb-4 md:mb-6">New Arrivals Only</h6>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-blackHeading font-semibold mb-6 md:mb-8">
            new <img src={Hand_icon} alt="Hand waving Icon" className="inline w-10 md:w-14 lg:w-16" /> <br />
            collections <br />
            for everyone
          </h1>
          <button className="flex gap-2 items-center bg-customRed active:bg-customDarkRed text-white rounded-3xl text-sm px-8 py-3"><span>Latest Collection</span> <img src={arrow_icon} alt="arrow icon" className="w-4" /></button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
