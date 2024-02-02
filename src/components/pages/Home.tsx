import IntroSection from '../major/IntroSection.tsx'
import Services from '../major/Services.tsx'
import Destinations from '../major/Destinations.tsx'
import Steps from '../major/Steps.tsx'
import Testimonials from '../major/Testimonials.tsx'
import Brands from '../major/Brands.tsx'
import Action from '../major/Action.tsx'
import Contacts from '../major/Contacts.tsx'
import Footer from '../major/Footer.tsx'




const home = () => {
  return (
    <div className='flex flex-col '>
      <div><IntroSection /></div>
      <div><Services /></div>
      <div><Destinations /></div>
      <div><Steps /></div>
      <div><Testimonials /></div>
      <div><Brands /></div>
      <div><Action /></div>
      <div><Contacts /></div>
      <div><Footer/></div>
    </div>
  )
}

export default home
