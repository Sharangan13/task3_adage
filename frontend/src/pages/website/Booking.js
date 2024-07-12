import React from 'react'
import Navbar from '../../layouts/Navbar'
import Page7 from '../Page7'
import Page8 from '../Page8'
import Page9 from '../Page9'
import Page10 from '../Page10'
import Page11_map from '../Page11_map'
import Page12 from '../Page12'
import Page13 from '../Page13'
import NavBarOtherPages from '../../layouts/NavBarOtherPages'
import BottomSticyBar from '../../layouts/BottomSticyBar'



export default function Booking() {
  return (
    <div>
      <NavBarOtherPages/>
      <div className='px-0 px-md-4'>
      <Page7/>
      <Page8/>
      <Page9/>
      <Page10/>
      <Page11_map/>
      <Page12/>
      <Page13/>
      <BottomSticyBar/>
      </div>
    </div>
  )
}
