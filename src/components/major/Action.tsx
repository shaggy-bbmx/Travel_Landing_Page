import { Envelope } from "@phosphor-icons/react"
import PlusGroup2 from '../../assets/plusGroup2.png'



const Action = () => {
    return (
        <div className="h-[80vh] w-full  m-auto flex justify-center pt-8">
            <div className="h-[70%] min-w-[400px]  w-full bg-slate-100 flex justify-center pt-20 relative">
                <div className="h-[60%] w-[90%] md:w-[60%] flex flex-col bg-transparent items-center absolute z-30">
                    <div className="text-lg md:text-2xl lg:text-3xl text-slate-600 font-normal text-center tracking-[0.5px] h-[30%]  md:h-[50%] mb-14">
                        Subscribe to get information, latest news and other interesting offers about Jadoo.
                    </div>
                    <div className="w-full flex flex-col md:flex-row space-x-2 h-[70%] md:h-[50%] items-center">
                        <div className="w-[60%] h-[50%] md:h-[60%] flex justify-end">
                            <div className="relative left-8 top-4"><Envelope size={22} color="#1d1b1b" weight="thin" /></div>
                            <input className="rounded-md w-[80%] font-lg pl-10" placeholder="Your email " />
                        </div>
                        <div className="mt-4 md:mt-0">
                            <button className="bg-[#fc4103] rounded-md py-2 px-4 md:px-6 md:py-3 text-white text:md md:text-xl font-thin">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="h-[80%] w-[25%] rounded-l-xl bg-slate-200  absolute top-0 right-0"></div>
                <div className="h-[80%] w-[25%] rounded-r-xl bg-slate-200  absolute left-0 bottom-0"></div>
                <div className="absolute -bottom-16 right-0"><img className="h-[80%] w-[80%]" src={PlusGroup2} alt="img" /></div>
            </div>
        </div>
    )
}

export default Action
