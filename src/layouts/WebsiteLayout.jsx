import React from 'react'
import { Outlet } from 'react-router-dom'

import '../styles/WebsiteLayout.css'

import LeftMenu from '../components/LeftMenu'
import RightMenu from '../components/RightMenu'

const WebsiteLayout = () => {
  return (
    <div className='WebsiteLayout'>
        <LeftMenu />
        <RightMenu />
        <Outlet/>

        <div className='background'></div>
    </div>
  )
}

export default WebsiteLayout