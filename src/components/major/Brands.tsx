import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useRef } from "react"
import partners1 from '../../assets/partners1.png'
import partners2 from '../../assets/partners2.png'
import partners3 from '../../assets/partners3.png'

const Brands = () => {


    const sliderRef = useRef<Slider | null>()

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        intialSlide: 0,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    }


    return (

        <div className="w-[90%] flex m-auto justify-center">
            <div className="w-full">
                <Slider{...settings} ref={(slider) => sliderRef.current = slider}>
                    <div className="h-[20vh] px-4 py-2"><img className="h-[55%] w-[70%] md:h-[40%] md:w-[65%] lg:h-1/3 lg:w-1/2" src={partners1} alt="gallery" /></div>
                    <div className="h-[20vh] px-4 py-2"><img className="h-[55%] w-[70%] md:h-[40%] md:w-[65%] lg:h-1/3 lg:w-1/2" src={partners2} alt="gallery" /></div>
                    <div className="h-[20vh] px-4 py-2"><img className="h-[55%] w-[70%] md:h-[40%] md:w-[65%] lg:h-1/3 lg:w-1/2" src={partners3} alt="gallery" /></div>
                    <div className="h-[20vh] px-4 py-2"><img className="h-[55%] w-[70%] md:h-[40%] md:w-[65%] lg:h-1/3 lg:w-1/2" src={partners1} alt="gallery" /></div>
                    <div className="h-[20vh] px-4 py-2"><img className="h-[55%] w-[70%] md:h-[40%] md:w-[65%] lg:h-1/3 lg:w-1/2" src={partners2} alt="gallery" /></div>
                    <div className="h-[20vh] px-4 py-2"><img className="h-[55%] w-[70%] md:h-[40%] md:w-[65%] lg:h-1/3 lg:w-1/2" src={partners3} alt="gallery" /></div>
                </Slider>
            </div>
        </div>
    )
}
export default Brands
