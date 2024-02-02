import girlImg from '../../assets/hero-img.png'
import bgImage from '../../assets/HeroVector.png'
import { Play } from '@phosphor-icons/react'
import { Slide } from "react-awesome-reveal"




const IntroSection = () => {
  return (
    <div style={{ backgroundImage: `url(${bgImage})` }} className={`flex relative bottom-16 w-full h-[700px]  mt-16 bg-no-repeat bg-right-top bg-[length:70%_70%] lg:bg-[length:50%_100%]`} >
      <div className='flex flex-col-reverse sm:flex-row w-[90%] lg:w-4/5 h-auto m-auto mt-32'>
        <div className='md:w-[45%] lg:w-[58%] flex-col'>
          <div className='mt-20 text-red-400'>
            <p>BEST DESITNATIONS AROUND THE WORLD</p>
          </div>
          <div className='flex flex-wrap text-5xl lg:text-7xl mt-4 font-medium'>
            <h1>Travel, enjoy and live a new and full life.</h1>
          </div>
          <div className='mt-6 text-md'>
            <p>Built Wicket longer admire do barton vantity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
          </div>
          <div className='w-full mt-8 flex  items-center justify-between  lg:gap-12 lg:justify-normal'>
            <div className='w-auto'>
              <button className='bg-[#FA9C0F] rounded-md px-6 py-3 text-white text-xl font-thin'>Find Out more</button>
            </div>
            {/* <span>...PLay button....</span> */}
            <div className='flex justify-between items-center  lg:gap-4 gap-1'>
              <span className="relative flex h-16 w-16">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D7573B] opacity-75"></span>
                <span className="relative flex  items-center justify-center rounded-full h-16 w-16 bg-[#D7573B] ">
                  <Play size={40} color="white" weight="fill" />
                </span>
              </span>
              <div className='font-normal'>Play Demo</div>
            </div>
            {/* <span>................*********....................</span> */}
          </div>
        </div>
        <div className='md:w-[55%] lg:w-[42%] h-auto'>
          <Slide direction='right'>
            <img src={girlImg} alt='girl' className='h-full w-full' />
          </Slide>
        </div>
      </div >
    </div >
  )
}

export default IntroSection
