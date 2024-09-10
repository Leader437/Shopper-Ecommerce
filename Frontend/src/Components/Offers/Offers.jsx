import "./Offers.css";
import offer_img from '../../Assets/exclusive_image.png' 

const Offers = () => {
  return (
    <div className="container flex flex-col-reverse md:justify-between md:items-center md:flex-row gap-10 mt-36 px-10 pt-10 md:px-16 md:pt-16 offer">
      <div className="">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-blackHeading font-semibold mb-6 md:mb-8 md:w-3/4">Exclusive Offers For you</h2>
        <p className="uppercase text-blackHeading font-regular mb-4 md:mb-6">Only on best Sellers Products</p>
        <button className="bg-customRed active:bg-customDarkRed text-white rounded-3xl text-sm px-8 py-3">Check now</button>
      </div>
      <div className="sm:w-[50%] sm:mx-auto md:mx-0 md:w-[50%] lg:w-[40%]"><img src={offer_img} alt="Image of a young model wearing trending clothes" className="w-full" /></div>
    </div>
  );
};

export default Offers;
