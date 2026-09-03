import { useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import { Form } from 'lucide-react'
import InstituteBadge from './components/InstituteBadge'
import Hero from './components/Hero'
import USPSection from './components/USPSection'
import ValueSection from './components/ValueSection'
import Curriculum from './components/Curriculum'
import LiveIndustryProjects from './components/LiveIndustryProjects'
import Program from './components/Program'
import FacultySection from './components/FacultySection'
import CareerServices from './components/CareerServices'
import CourseFeeSection from './components/CourseFeeSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <InstituteBadge />
    <Hero />
    <USPSection />
    <ValueSection />
    <Curriculum />
    <LiveIndustryProjects />
    <Program />
    <FacultySection />
    <CareerServices />
    <CourseFeeSection />

    </>
  )
}

export default App
