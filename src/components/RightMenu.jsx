import React from 'react'
import '../styles/RightMenu.css'
import { FriendList } from './ComponentData'
import ListFriends from './ListFriends'

const RightMenu = () => {
  return (
    <div className='RightMenu'> 
      <div className="friend-active-box">
        <p>friend activity</p>
        <i className='bx bx-user-plus'></i>
      </div>
      <ListFriends friendList ={FriendList}/>
      <div className="setting-box">
        <button className='btn-setting'>Settings</button>
      </div>
    </div>
  )
}

export default RightMenu