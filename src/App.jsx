import React from 'react'
import './App.css'
import Header from './components/layout/Header'
import Section1 from './components/layout/Main/Section1'
import Section2Otabek from './components/layout/Main/Section2Otabek'
import Footer from './components/layout/Footer' 
import Ramazon from './components/layout/Main/Ramazon'
import FeaturesMuslima from './components/layout/Main/FeaturesMuslima'
import QuizesSolixa from './components/layout/Main/QuizesSolixa'
import ManagementDiyor from './components/layout/Main/ManagementDiyor'
import DiscussionsAkhror from './components/layout/Main/DiscussionsAkhror'
function App() {
  return (
    <div>
      <Section1/>
      <Section2Otabek/>
      <Ramazon/>
      <FeaturesMuslima/>
      <QuizesSolixa/>
      <ManagementDiyor/>
      <DiscussionsAkhror/>
      <Footer/>
    </div>
  )
}

export default App