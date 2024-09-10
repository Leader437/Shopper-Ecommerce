import right_arrow_icon from '../../Assets/breadcrum_arrow.png'

const Breadcrums = (props) => {
    const {product} = props;
  return (
    <div className='flex items-center gap-2 text-xs md:text-sm flex-wrap'>
        <span>Home</span> <img src={right_arrow_icon} alt="right arrow icon" className='w-1 md:w-[0.4rem]' /> <span>Shop</span> <img src={right_arrow_icon} alt="right arrow icon" className='w-1 md:w-[0.4rem]' /> <span>{product.category}</span> <img src={right_arrow_icon} alt="right arrow icon" className='w-1 md:w-[0.4rem]' /> <span className='whitespace-nowrap'>{product.name}</span>
    </div>
  )
}

export default Breadcrums