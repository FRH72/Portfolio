import Home from '@/src/modules/home'
import Menu from '@/src/modules/menu'
import Press from '@/src/modules/press'
import Quote from '@/src/modules/quote'
import Gallery from '@/src/modules/gallery'
import Theater from '@/src/modules/theater'
import About from '@/src/modules/about/About'
import Filmography from '@/src/modules/filmography'

export default function MainPage() {
  return (
    <>
      <Menu />
      <Home />
      <About />
      <Filmography />
      <Theater />
      <Press />
      <Quote />
      <Gallery />
    </>
  )
}
