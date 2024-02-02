import CardItem from '../micro/CardItem.tsx'
import Plus1 from '../../assets/plusGroup.png'


const Services = () => {

    const heading = [
        'Calculated Weather',
        'Best Flight',
        'Local Events',
        'Customizition'
    ]

    const description = [
        'Built Wicket longer admire do barton vantity itself do in it.',
        'engrossed listening. Park gate sell they west hard for the.',
        'barton vantity itself do in it.Preferred to men it engrossed listening.',
        'We deliver outsourced aviation services for military customers.'
    ]



    return (
        <div className='mt-[500px] sm:mt-32 flex flex-col relative'>
            <img src={Plus1} alt='stars' className='absolute top-[-20vh] right-0 h-[20%]  sm:h-auto sm:w-auto' />
            <div className="flex  justify-center font-light  py-4 tracking-[2px]">CATEGORY</div>
            <div className="flex justify-center text-2xl md:text-5xl mt-3">We Offer Best Services</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-[80%] mx-auto h-[20vh] mb-64  mt-16 ">
                <CardItem heading={heading[0]} description={description[0]} img='1' />
                <CardItem heading={heading[1]} description={description[1]} img='2' />
                <CardItem heading={heading[2]} description={description[2]} img='3' />
                <CardItem heading={heading[3]} description={description[3]} img='4' />
            </div>
        </div>
    )
}

export default Services
