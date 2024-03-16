import { About } from '../Components/About/About'
import { Carousel } from '../Components/Carousel/Carousel'
import { Hero } from '../Components/Hero/Hero'

export const Home = () => {
  return (
    <div>
      <Hero/>
      <Carousel/>
      <About/>
    </div>
  )
}
