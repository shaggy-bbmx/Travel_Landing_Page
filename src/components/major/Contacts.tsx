import { FacebookLogo, InstagramLogo, TwitterLogo } from '@phosphor-icons/react'
import PlayStore from '../../assets/appdownload.png'



const Contacts = () => {
    return (
        <div className=" flex py-16 px-0 md:px-16 justify-center w-full ">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-0">
                <div className="px-4 md:px-0">
                    <div className="mb-2 text-3xl font-semibold flex justify-start">Jadoo</div>
                    <p>Book your trip in minutes, get full control for much longer.</p>
                </div>
                <div className=" flex-col jusitfy-center items-center  pt-10 px-4">
                    <div className="mb-2 text-2xl font-normal flex justify-start">Quick Links</div>
                    <div className="pl-3 hover:underline hover:underline-offset-4">Destination</div>
                    <div className="pl-3 hover:underline hover:underline-offset-4">Hotels</div>
                    <div className="pl-3 hover:underline hover:underline-offset-4">Flights</div>
                    <div className="pl-3 hover:underline hover:underline-offset-4">Bookings</div>
                    <div className="pl-3 hover:underline hover:underline-offset-4">Login</div>
                    <div className="pl-3 hover:underline hover:underline-offset-4">Signup</div>
                </div>
                <div className=" flex-col jusitfy-center items-center  pt-10 px-4">
                    <div className="mb-2 text-2xl font-normal flex justify-start">Contacts</div>
                    <div className="hover:underline hover:underline-offset-4">FAQs</div>
                    <div className="hover:underline hover:underline-offset-4">help</div>
                    <div className="hover:underline hover:underline-offset-4">Policies</div>
                    <div className="hover:underline hover:underline-offset-4">Terms & Conditions</div>
                </div>
                <div className=" flex-col jusitfy-center items-center  pt-10 px-4">
                    <div className="mb-2 text-2xl font-normal flex justify-start">More</div>
                    <div className="hover:underline hover:underline-offset-4">Career</div>
                    <div className="hover:underline hover:underline-offset-4">Airlines</div>
                    <div className="hover:underline hover:underline-offset-4">Airline Fees</div>
                    <div className="hover:underline hover:underline-offset-4">Low Fare Tips</div>
                </div>
                <div className="pt-10">
                    <div className="flex space-x-2">
                        <button className='text-color3 border-[1px] border-color3/50 p-2.5 flex rounded-full transition-all duration-300 ease-in hover:bg-gradient-to-tr from-color1 to-color2 hover:text-white'>
                            <FacebookLogo size={18} color="#1d1b1b" weight="fill" />
                        </button>
                        <button className='text-color3 border-[1px] border-color3/50 p-2.5 flex rounded-full transition-all duration-300 ease-in hover:bg-gradient-to-tr from-color1 to-color2 hover:text-white'>
                            <TwitterLogo size={18} color="#1d1b1b" weight="fill" />
                        </button>
                        <button className='text-color3 border-[1px] border-color3/50 p-2.5 flex rounded-full transition-all duration-300 ease-in hover:bg-gradient-to-tr from-color1 to-color2 hover:text-white'>
                            <InstagramLogo size={18} color="#1d1b1b" weight="fill" />
                        </button>

                    </div>
                    <div className="tracking-[0.5px] font-light text-lg">Discover Our App</div>
                    <img className='h-[20%] mt-4 pl-2' src={PlayStore} alt='playstore' />
                </div>
            </div>
        </div>
    )
}

export default Contacts
