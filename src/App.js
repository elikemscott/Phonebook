import React, { Component } from "react";
import { connect } from 'react-redux';
import { addUser, deleteUser } from './store/UserAction';
import "./App.css";
import UserForm from './components/UsersForm';
import UserInfo from './components/UserInfo';

class App extends Component {
  

  AddNewUser = newUser => {
   this.props.addUser(newUser)
  };

  deleteUser = user_id => {
    this.props.deleteUser(user_id)
  }

  
  render() {
    return (
      <div className='parent'>
        <div className='sidenav'>
        <UserForm addUser={this.AddNewUser} />
          <a ><p className='conts'>Contacts</p></a> <hr/>
          <a>Favorites</a> <hr/>
          <a>Family</a> <hr/>
          <a>Friends</a> <hr/>

        </div>

        <div className='main'>
        <div className='nav'> <span className='menu'> <a><span>Phonebook</span></a> &nbsp; &nbsp; <a><span>Home</span></a> </span></div> 
        <div className='contact_menu'>
          <h4 className='contact_list'>Contact List</h4>
          <button type="button" className="btn btn-outline-default btn-rounded waves-effect btn-sm">Add Contact</button>
          <form className="form-inline d-flex  md-form form-sm active-cyan active-cyan-2 mt-2 search">
  <i class="fas fa-search" aria-hidden="true"></i>
  <input class="form-control form-control-sm ml-3 w-20" type="text" placeholder="Search"
    aria-label="Search"/>
         </form> </div>
        {this.props.users.map((field, index) => {
            return (
            <div >
            <UserInfo key={field.id } id={field.id} name = {field.name} number = {field.number} email={field.email} address={field.address} removeUser = {this.deleteUser} />
            </div>
          
          );
        })}
       
        
        
       
        
        </div>

      </div>
    )
  }
}


 const mapStateToProps = (state) => ({
   users: state.users

 })

 const mapDispatchToProps = {
   addUser: addUser,
   deleteUser: deleteUser

 }

export default  connect( mapStateToProps, mapDispatchToProps)(App);


