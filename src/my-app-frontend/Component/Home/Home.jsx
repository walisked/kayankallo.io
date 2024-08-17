import React from 'react'
import {Hero} from '../Hero'
import {Title} from './LandingTitle'
import {Pricing} from './LandingPricing'
import {Action} from "../Action"

function LandingPage() {
  return (
    <>
    {<Hero/>}
    <div style={{background: "linear-gradient(90deg, #d53369 0%, #daae51 100%)"}}>
    {<Title/>}
    {<Pricing/>}
    {<Action/>}
 </div>
    </>
)
}

export default LandingPage