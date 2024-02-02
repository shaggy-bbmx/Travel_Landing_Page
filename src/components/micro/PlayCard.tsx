import { AirplaneTilt } from '@phosphor-icons/react'
import gallery1 from '../../assets/gallery1.jpeg'
import gallery2 from '../../assets/gallery2.jpeg'
import gallery3 from '../../assets/gallery3.jpeg'
import gallery4 from '../../assets/gallery4.jpeg'
import gallery5 from '../../assets/gallery5.jpeg'
import gallery6 from '../../assets/gallery6.jpeg'






const PlayCard: React.FC<MyPlayCardProps> = ({ img, country, days, likes }) => {

    const findImage = (key: number) => {
        switch (key) {
            case 1:
                return gallery1
                break;
            case 2:
                return gallery2
                break;

            case 3:
                return gallery3
                break;

            case 4:
                return gallery4
                break;

            case 5:
                return gallery5
                break;

            case 6:
                return gallery6
                break;
            default:
                break;
        }
    }


    return (
        <div className="flex flex-col bg-white  h-[50vh]  rounded-xl shadow-md hover:cursor-pointer">
            <div className='h-4/5 w-full relative overflow-hidden rounded-t-xl'>
                <div style={{ backgroundImage: `url(${findImage(img)})` }} className="h-full w-full  bg-center bg-cover transition ease-in-out delay-100 hover:scale-150 bg-no-repeat ">
                </div>
            </div>
            <div className="flex flex-col p-4  ">
                <div className="flex relative">
                    <div className='tracking-[0.5px] font-medium text-md pb-4'>{country}</div>
                    <div className='text-md font-light absolute right-2'>{`${likes}k`}</div>
                </div>
                <div className="flex items-center">
                    <AirplaneTilt size={20} color="#080807" weight="fill" />
                    <div className='ml-4 text-lg font-light'>{`${days} days trip`}</div>
                </div>
            </div>
        </div>
    )
}

export default PlayCard
