import { BookOpenText, Wallet, AirplaneInFlight, Buildings } from '@phosphor-icons/react'
import BookingImage1 from '../../assets/bookingImage1.jpeg'
import BookingImage2 from '../../assets/bookingImage2.jpeg'



const Steps = () => {
    return (
        <div className=" flex flex-col w-[80%] m-auto px-2 mb-16">
            <div className="flex justify-start tracking-[2px] font-light text-lg">Easy and Fast</div>

            {/* ....description.... */}
            <div className="min-w-[290px] flex flex-col-reverse md:flex-row  mt-4">
                <div className="flex flex-col w-full md:w-1/2 h-auto">
                    <div className="text-3xl justify-center md:justify-start flex lg:text-5xl font-semibold">Book your next trip in 3 easy steps</div>
                    <div className="flex justify-center md:justify-start mt-16 space-x-4">
                        <div className='flex justify-center items-center'>
                            <BookOpenText size={40} color="#f97f1a" weight="fill" />
                        </div>
                        <div className="font-light text:md lg:text-lg">Choose Destination lorem ipsum dolor sit amet, consectetur adipiscing elit.Urna, tortor tempus.</div>
                    </div>
                    <div className="flex justify-center md:justify-start mt-8 space-x-4">
                        <div className='flex justify-center items-center'>
                            <Wallet size={40} color="#f9521a" weight='fill' />
                        </div>
                        <div className="font-light text:md lg:text-lg">Make Payment lorem ipsum dolor sit amet, consectetur adipiscing elit.Uma, totor tempus.</div>
                    </div>
                    <div className="flex justify-center md:justify-start mt-8 space-x-4">
                        <div className='flex justify-center items-center'>
                            <AirplaneInFlight size={40} color="#00000" weight='fill' />
                        </div>
                        <div className="font-light text:md lg:text-lg">Reach Airport on Selected Date lorem ipsum dolor sit amet.consectetur adipiscing elit.Uma totor tempus.</div>
                    </div>
                </div>

                {/* .....Major container.... */}
                <div className='min-w-[270px] flex justify-center w-[100%] sm:w-[80%] lg:w-1/2  mx-auto mb-0'>
                    <div className='relative h-[40vh] w-[80%] md:w-[80%] md:h-[70%] lg:w-[60%] lg:h-[100%] flex flex-col p-4 pb-0 rounded-lg shadow-xl   shadow-indigo-400 my-16  md:my-0'>
                        <div style={{ backgroundImage: `url(${BookingImage1})` }} className='h-[40%] bg-no-repeat rounded-lg bg-top-left bg-cover'></div>
                        <div className='text-lg font-semibold mt-4'>Trip To Greece</div>
                        <div className='font-light mt-2'>14-29 June | by Robbin Jobs</div>
                        <div></div>
                        <div className='flex space-x-4 font-light mt-2 '><Buildings size={25} color="#1d1b1b" />
                            <span>24 people going</span>
                        </div>

                        {/* ......minor container ..... */}
                        <div className='absolute h-[100px] w-[240px] bg-white rounded-xl bottom-4 -right-20 flex shadow-lg'>
                            <div className='flex w-[50%] justify-center items-center '>
                                <div style={{ backgroundImage: `url(${BookingImage2})` }}
                                    className='h-[65%] w-[55%] rounded-full bg-white bg-no-repeat bg-center bg-cover'>

                                </div>

                            </div>
                            <div className='flex flex-col bg-white shadow:xl shadow:lg rounded-full'>
                                <div className='tracking-[1px] font-light'>Ongoing</div>
                                <div className='tracking-[0.5px] font-medium'>Trip to Rome</div>
                                <div className=' font-light pt-2'>40% Completed</div>
                                <div className='flex justify-start'>
                                    <div className=' left-0 h-[4px] w-[30%] bg-orange-700'></div>
                                    <div className='h-[4px] w-[70%] bg-slate-200'></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Steps
