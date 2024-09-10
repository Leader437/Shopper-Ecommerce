import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='container newsLetter mt-36 py-10 sm:px-10 md:p-16 '>
        <h2 className='text-4xl md:text-5xl lg:text-6xl text-blackHeading text-center font-semibold mb-6 md:mb-8 md:w-3/4 md:mx-auto'>Get Exclusive Offers on your Email</h2>
        <p className='uppercase text-blackHeading text-center font-regular mb-4 md:mb-6'>Subscribe to our NewsLetter and Stay Updated</p>
        <form className='sm:w-3/5 lg:w-2/5 mx-auto'>
            <input type="text" name="" id="" placeholder='Your Email Id' className='w-[70%] bg-white text-xs lg:text-sm border-[0.5px] border-solid border-blackContent focus:outline-none overflow-hidden rounded-s-full pl-4 py-3 relative left-[10px]'/>
            <input type="submit" value="Subscribe"  className='bg-blackHeading w-[30%] text-white text-xs lg:text-sm border-[0.5px] border-solid border-blackContent rounded-full py-3  relative -left-[10px]' />
        </form>
    </div>
  )
}

export default NewsLetter