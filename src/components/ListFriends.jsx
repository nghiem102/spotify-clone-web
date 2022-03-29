import React from 'react'

const ListFriends = ({friendList}) => {
  return (
    <div className='list-friends'>
        {friendList?.map( item => 
                <div className="friend" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="friend-infor">
                        <p className='infor-name'>{item.name}</p>
                        <p className='status'>{item.status}</p>
                    </div>
                </div>
            ) 
        }
    </div>
  )
}

export default ListFriends