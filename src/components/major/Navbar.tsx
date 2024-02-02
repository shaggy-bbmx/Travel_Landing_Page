import { useEffect, useState } from 'react'
import Logo from '../../assets/logo1.png'
import { CirclesFour, ArrowCircleRight } from '@phosphor-icons/react'





const Navbar = () => {

    const [navOpen, setNavOpen] = useState<boolean>(false)
    const [fillNavColor, setFillNavColor] = useState<boolean>(false)

    useEffect(() => {

        const handleScroll = () => {
            const isAtTop = window.scrollY === 0
            setFillNavColor(!isAtTop)
        }


        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])



    return (
        <div className={`w-full h-24 ${fillNavColor ? 'bg-white' : 'bg-transperent'} fixed top-0 z-50`} >
            <div className="flex lg:justify-center lg:flex-row lg:h-full lg:space-x-32">
                <img className='basis-1/6 my-4 pr-10 pl-10' src={Logo} alt="logo1" />
                <div className='basis-6/7 my-4'>
                    <div className='hidden lg:flex lg:flex-row lg:space-x-16 lg:py-4'>
                        <div>
                            <a className='pr-6 ml-4 text-xl hover:cursor-pointer'>Destination</a>
                            <a className='pr-6 ml-4 text-xl hover:cursor-pointer'>Hotels</a>
                            <a className='pr-6 ml-4 text-xl hover:cursor-pointer'>Flights</a>
                            <a className='pr-6 ml-4 text-xl hover:cursor-pointer'>Bookings</a>
                        </div>
                        <div className='flex space-x-8'>
                            <a className='group pr-6 relative text-xl hover:cursor-pointer pb-1 pl-4 border-color3 hover:border-b-2 fill-color-down'>Login</a>
                            <a className='pr-6 text-xl hover:cursor-pointer pb-1 pl-4 border-color3 hover:border-2 fill-color-up'>
                                Signup
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={() => { setNavOpen(true) }} className='absolute right-4 top-6 lg:hidden'>
                <CirclesFour className='hover:cursor-pointer' size={40} color="currentColor" weight="fill" />
            </div>

            {/* ...div for slider menu */}

            <div id="sideBar" className={`fixed top-0 right-0 bg-slate-800 bg-opacity-80 h-full hover:cursor-pointer overflow-x-hidden duration-500 z-10 ${navOpen ? 'w-full' : 'w-0'} `}>

                <div id="sideNav" className={`fixed top-0 right-0 pt-8 bg-white h-full flex-col justify-center items-center space-y-16 overflow-x-hidden duration-500 font-bold z-50 ${navOpen ? 'w-full md:w-1/2' : 'w-0'} `}>
                    <div className='flex flex-row space-x-80 ml-4'>
                        <div className='hidden md:block'><img src={Logo}  alt='logo.png' className='' /></div>
                        <div>
                            <ArrowCircleRight size={32} onClick={() => { setNavOpen(false) }} className="" />
                    </div>
                </div>
                <div className='ml-8'>
                    <div className="text-lg  flex-col">
                        <div className="p-2 mb-4 w-fit slider-underline font-normal "><a href="#">Destination</a></div>
                        <div className="p-2 mb-4 w-fit slider-underline font-normal"><a href="#">Hotel</a></div>
                        <div className="p-2 mb-4 w-fit slider-underline font-normal"><a href="#">Flights</a></div>
                        <div className="p-2 mb-4 w-fit slider-underline font-normal"><a href="#">Bookings</a></div>
                    </div>
                </div>
                <div className='ml-4 mt-64 flex flex-row justify-center space-x-4'>
                    <a className='group pr-6  relative text-xl hover:cursor-pointer pb-1 pl-4 border-color3 border-b-2 fill-color-down'>Login</a>
                    <a className='pr-6 text-xl hover:cursor-pointer pb-1 pl-4 border-color3 hover:border-2 fill-color-up'>
                        Signup
                    </a>
                </div>
            </div>

        </div>

        </div >
    )
}

export default Navbar
