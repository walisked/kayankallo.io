import React from 'react'
import NavBar from './Common/Navbar'
import { Hero } from './Hero'
import Title from './LandingTitle'
import Pricing from './LandingPricing'
import Action from './Action'
import { Footer } from './Footer'

function LandingPage() {
  return (
    <>

    <NavBar/>
    {<Hero/>}
    <div style={{background: "linear-gradient(90deg, #d53369 0%, #daae51 100%)"}}>
    <Title/>
    <Pricing/>
    <Action/>
    </div>
    {<Footer/>}
    </>
)
}

export default LandingPage