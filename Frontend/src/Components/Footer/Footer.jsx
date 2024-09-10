import footer_logo from '../../Assets/logo_big.png'
import whatsapp_logo from '../../Assets/whatsapp_icon.png'
import pinterest_logo from '../../Assets/pinterest_icon.png'
import insta_logo from '../../Assets/instagram_icon.png'

const Footer = () => {
  return (
    <div className='container flex flex-col gap-8 md:gap-10 items-center mt-16 md:mt-20 lg:mt-24 py-5 md:py-7 lg:py-10'>
        <div className="w-fit flex items-center gap-2">
          <img src={footer_logo} alt="Shopping Bag Logo" className="w-12" />
          <h2 className="uppercase font-medium text-2xl">Shopper</h2>
        </div>
        <div className='w-4/5 md:w-full'>
            <ul className='flex gap-x-6 md:gap-x-8 gap-y-3 flex-wrap justify-center'>
                <li className='text-blackContent text-sm cursor-pointer'>Company</li>
                <li className='text-blackContent text-sm cursor-pointer'>Products</li>
                <li className='text-blackContent text-sm cursor-pointer'>Offices</li>
                <li className='text-blackContent text-sm cursor-pointer'>About</li>
                <li className='text-blackContent text-sm cursor-pointer'>Contact</li>
            </ul>
        </div>
        <div>
            <ul className='flex gap-x-6 md:gap-x-8 gap-y-3 flex-wrap justify-center'>
                <li className='w-6'><a href="http://" target="_blank" rel="noopener noreferrer"><img src={insta_logo} alt="instagram logo" className='w-full'/></a></li>
                <li className='w-6'><a href="http://" target="_blank" rel="noopener noreferrer"><img src={pinterest_logo} alt="instagram logo" className='w-full'/></a></li>
                <li className='w-6'><a href="http://" target="_blank" rel="noopener noreferrer"><img src={whatsapp_logo} alt="instagram logo" className='w-full'/></a></li>
            </ul>
        </div>
        <div className='w-full bg-blackHeading h-[0.5px]'></div>
        <p className='text-sm text-blackContent'>Copyright @ 2024 - All Rights Reserved</p>
    </div>
  )
}

export default Footer