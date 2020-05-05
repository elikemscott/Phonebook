import React from 'react'
import {Link} from 'react-router-dom'

const UserInfo = ({name, number, email, address, id, removeUser}) => {
  const handleClick = () => {
    removeUser(id)
  }
    return (
      <div className='user_info'>
        <span> {name} </span> &nbsp; &nbsp; &nbsp;
    <span> {number}</span> &nbsp; &nbsp; &nbsp;
    <span> {email} </span> &nbsp; &nbsp; &nbsp;
    <span>{address}</span> &nbsp; &nbsp; &nbsp;
    <span><button className="btn btn-danger btn-sm" onClick = {handleClick} title='Delete'><i class="far fa-trash-alt  fa-lg"></i></button></span> &nbsp; &nbsp; &nbsp;
    <span title='Edit'><Link to = {`/edit/${id}`}><i class="far fa-edit cyan-text fa-lg"></i></Link></span>
    <hr/>
      </div>
    )
  }
  export default UserInfo;

