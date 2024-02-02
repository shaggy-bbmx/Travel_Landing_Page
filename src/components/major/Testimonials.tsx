import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
// import { CaretCircleDown, CaretCircleUp } from '@phosphor-icons/react'
import { useRef } from "react"
import TestimonialCard from '../micro/TestimonialCard.tsx'




const Testimonials = () => {

    const sliderRef = useRef<Slider | null>()

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        intialSlide: 0,
        autoplay: true,
        vertical: true,
        pauseOnHover: true
    }

    // const next = () => {
    //     if (sliderRef.current) {
    //         sliderRef.current.slickNext()
    //     }
    // }

    // const previous = () => {
    //     if (sliderRef.current) {
    //         sliderRef.current.slickPrev()
    //     }
    // }

    const items = [

        {
            speech: '"Jadoo was great with the entire process from planning to updates during the trip. We had 11 people and everything was perfectly executed. We appreciate all of her hard work. It was truly the trip of a lifetime. Thank you!"',
            name: 'Gina',
            place: 'Owerri, Nigeria'
        },
        {
            speech: '"You did a fabulous job. There were no hitches. Thank you again for all your work planning this trip."',
            name: 'Mike taylor',
            place: 'Lahore, Pakistan'
        },
        {
            speech: '"Booking through you was very easy and made our lives so much easier. I have nothing bad to say! Thank you for giving us tips and guidance before we left on what to bring and such, that was very helpful!"',
            name: 'Emma',
            place: 'Vancouver, Canada'
        },
        {
            speech: '"Thank you for your recommendation and putting the trip together. The resort was absolutely beautiful. The infinity pools, the palm trees in the main pool, the infinity pool in out preferred area overlooking the gulf and the golf course were exceptional...."',
            name: 'Loveth',
            place: 'Lagos, Nigeria'
        },
    ]



    return (
        <div className="flex flex-col items-center lg:justify-start lg:flex-row w-[80%] h-[60vh] mx-auto mt-16 md:mt-32 lg:mb-16 mb-24 overflow-y-auto">
            {/* ....Description.... */}
            <div className="w-[100%] md:w-[40%]  pr-16 pt-6" >
                <div className="tracking-[2px] text-lg font-light">TESTIMONIALS</div>
                <div className="text-2xl lg:text-5xl font-semibold mt-4">What people say about Us.</div>
            </div>

            {/* .....Testimonials..... */}
            <div className="flex items-center w-[100%] lg:w-[50%] justify-center  bg-white ">
                {/* ...slides.... */}
                <div className="w-full">
                    <Slider ref={(slider) => sliderRef.current = slider} {...settings} >
                        {items.map((item, index) =>
                            <div className="px-2 py-4" key={index}>
                                <TestimonialCard
                                    img={index + 1}
                                    speech={item.speech}
                                    name={item.name}
                                    place={item.place}
                                />
                            </div>
                        )}
                    </Slider>
                </div>
            </div>

            {/* ...controllers..... */}
            {/* <div className='flex h-full items-center w-[20%] '>
                <div className="flex flex-col justify-center">
                    <div className="pb-2">
                        <button onClick={next} className="transition ease-in-out delay-50 hover:scale-110">
                            <CaretCircleUp size={40} color="#f29b29" weight="fill" />
                        </button>
                    </div>
                    <div className="pt-2">
                        <button onClick={previous} className="transition ease-in-out delay-50 hover:scale-110">
                            <CaretCircleDown size={40} color="#f29b29" weight="fill" />
                        </button>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Testimonials
