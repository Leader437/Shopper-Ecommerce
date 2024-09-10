import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <Link to={`/product/${props.id}`}>
      <div className="bg-white max-w-[16rem] hover:scale-105 cursor-pointer transition-transform" onClick={window.scrollTo(0,0)}>
        <div>
          <img src={props.img} alt="" />
        </div>
        <p className="w-[90%] my-2">{props.name}</p>
        <h6 className="text-blackHeading font-semibold inline mr-3">
          ${props.new_price}
        </h6>
        <h6 className="line-through text-gray-400 inline">
          ${props.old_price}
        </h6>
      </div>
    </Link>
  );
};

export default Item;