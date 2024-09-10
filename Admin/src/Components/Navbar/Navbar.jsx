import navLogo from "../../Assets/logo.png";
import adminImg from "../../Assets/admin.jpg";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md relative z-10">
      <div className="container py-2 flex justify-between items-center">
        <div className="flex gap-2 2xl:gap-4">
          <div className="w-11 2xl:w-16">
            <img src={navLogo} alt="Website logo" className="w-full" />
          </div>
          <div>
            <h2 className="text-blackHeading text-2xl 2xl:text-3xl uppercase font-semibold">
              Shopper
            </h2>
            <p className="text-customRed text-xs 2xl:text-base">Admin Panel</p>
          </div>
        </div>
        <div className="w-10 h-10 2xl:w-12 2xl:h-12 rounded-full overflow-hidden bg-red-900">
          <img src={adminImg} alt="admin profile picture" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
