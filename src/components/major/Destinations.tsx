import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { CaretCircleLeft } from '@phosphor-icons/react'
import { CaretCircleRight } from '@phosphor-icons/react'
import { useRef } from "react"
import PlayCard from '../micro/PlayCard.tsx'




const Destinations = () => {

    const sliderRef = useRef<Slider | null>()

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        intialSlide: 0,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }

    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext()
        }
    }

    const previous = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev()
        }
    }


    const items = [
        {
            country: 'Rome,Italy',
            days: 8,
            likes: 42
        },
        {
            country: 'London,UK',
            days: 12,
            likes: 42
        },
        {
            country: 'Paris,France',
            days: 26,
            likes: 42
        },
        {
            country: 'New York,USA',
            days: 8,
            likes: 42
        },
        {
            country: 'Warsaw,Poland',
            days: 14,
            likes: 42
        },
        {
            country: 'Dubai,UAE',
            days: 17,
            likes: 42
        }
    ]


    return (


        <div className="mt-[120vh] md:mt-[40vh] lg:mt-[10vh] flex flex-col">
            <div className="mb-0 flex justify-center item-center tracking-[2px] text-xl">Top selling</div>
            <div className="mt-0  flex justify-center item-center text-3xl md:text-5xl font- ">Top Destinations</div>
            <div className="flex flex-col w-4/5 mx-auto mt-20">
                <div className="flex justify-center lg:justify-end">
                    <button onClick={previous} className="transition ease-in-out delay-50 hover:scale-110">
                        <CaretCircleLeft size={40} color="#f29b29" weight="fill" />
                    </button>
                    <button onClick={next} className="transition ease-in-out delay-50 hover:scale-110">
                        <CaretCircleRight size={40} color="#f29b29" weight="fill" />
                    </button>
                </div>
                <div className="w-[100%]  mt-5 mb-64 overflow-hidden">
                    <Slider{...settings} ref={(slider) => sliderRef.current = slider}>
                        {items.map((item, index) =>
                            <div className="px-4 py-1" key={index}>
                                <PlayCard img={index + 1}
                                    key={index}
                                    country={item.country} days={item.days} likes={item.likes}
                                />
                            </div>
                        )}
                    </Slider>
                </div>
            </div>
        </div >
    )
}

export default Destinations
