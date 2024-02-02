import React from "react"
import profile1 from '../../assets/profile1.jpeg'
import profile2 from '../../assets/profile2.jpeg'
import profile3 from '../../assets/profile3.jpeg'
import profile4 from '../../assets/profile4.jpeg'



const TestimonialCard: React.FC<TestimonialCardProp> = ({ img, speech, name, place }) => {

    const findImage = (key: number) => {
        switch (key) {
            case 1:
                return profile1
                break;
            case 2:
                return profile2
                break;

            case 3:
                return profile3
                break;

            case 4:
                return profile4
                break;
            default:
                break;
        }
    }

    return (
        <div className="h-[40vh] sm:h-[30vh]  min-w-[285px] w-full flex flex-col p-4 shadow-md  rounded-md hover:cursor-pointer ">
            <div className="tracking-[0.25px] font-light h-[70%] lg:h-[60%]">{speech}</div>
            <div className="flex w-full h-[30%] lg:h-[40%] mt-4 items-center">
                <div className="w-[80%] flex flex-col ">
                    <div className="text-lg tracking-[0.5px] font-semibold">{name}</div>
                    <div className="pt-2">{place}</div>
                </div>
                <div className="flex justify-center items-center w-[16%]">
                    <div style={{ backgroundImage: `url(${findImage(img)})` }}
                        className='h-[8vh] w-[8vh] rounded-full bg-white bg-no-repeat bg-center bg-cover grow-0 shrink-0 '>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard
