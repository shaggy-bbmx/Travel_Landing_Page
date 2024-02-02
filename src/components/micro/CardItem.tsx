import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'



const CardItem: React.FC<MyComponentProps> = ({ heading, description, img }) => {

    let imgContainer;

    switch (img) {
        case '1':
            imgContainer = icon1
            break;
        case '2':
            imgContainer = icon2
            break;
        case '3':
            imgContainer = icon3
            break;
        case '4':
            imgContainer = icon4
            break;
        default:
            break;
    }


    return (
        <div className='relative'>
            <div className="peer flex flex-col h-[38vh] relative px-4 cursor-pointer transition duration-300 hover:shadow-xl rounded-xl cardPseudo after:bg-[#D7573B] z-20 bg-white">
                <div className="h-[50%]  relative flex justify-center items-center">
                    <div className="bg-gradient-to-l from-orange-200 to-orange-200 h-[60%] w-[60px] rounded-tl-3xl rounded-br-3xl"></div>
                    <div className={`h-[200px] w-[160px] absolute  p-0 mb-0 ml-0 mt-24
                 ${imgContainer === icon1 ? ' mt-5 h-[120px] w-[120px]' : ''}`} >
                        <img src={imgContainer} className='object-cover' />
                    </div>
                </div>
                <div className="h-[40%] flex flex-col">
                    <div className="flex justify-center mx-auto mt-2 mb-2 text:xl md:text-lg font-medium">{heading}</div>
                    <div className="flex justify-center mx-auto px-2 font-light text-center">{description}</div>
                </div>
            </div>
            <div className='invisible transition ease-in-out delay-50 peer-hover:visible bg-gradient-to-l from-orange-700 to-orange-700 h-[30%] w-[80px] rounded-tl-3xl rounded-br-3xl absolute z-0 bottom-[-20px] left-[-22px] peer-hover:-translate-x-1 peer-hover:translate-y-1'></div>
        </div>
    )
}

export default CardItem
