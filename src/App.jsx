import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Heritage from './components/Heritage'
import SignatureCollection from './components/SignatureCollection'
import CulinaryRegions from './components/CulinaryRegions'
import TastingExperience from './components/TastingExperience'
import DigitalMenu from './components/DigitalMenu'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import PrivateDining from './components/PrivateDining'
import Reservation from './components/Reservation'
import Location from './components/Location'
import Footer from './components/Footer'
import StickyReserve from './components/StickyReserve'

export default function App() {
  return (
    <div className="bg-emerald-deep min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Heritage />
        <SignatureCollection />
        <CulinaryRegions />
        <TastingExperience />
        <DigitalMenu />
        <Gallery />
        <Testimonials />
        <PrivateDining />
        <Reservation />
        <Location />
      </main>
      <Footer />
      <StickyReserve />
    </div>
  )
}
