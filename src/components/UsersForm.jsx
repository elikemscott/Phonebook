import React, { Component } from 'react'

class UserForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name:'',
            number: '',
            email:'',
            address:'',
             
        }
    }
    handleChange = (e) => {
        this.setState({
          [e.target.name] : e.target.value
        });
      };

      handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
          name: this.state.name,
          number: this.state.number,
          email: this.state.email,
          address: this.state.address,
        
        };
        this.props.addUser(newUser) 
        this.setState({
          name:'',
          number:'',
          email:'',
          address:'',
        });
        
      };

    render() {
        return (
            <div className="user_form">
            <p className = ""></p>
    
              

               
<form className='user_form2' onSubmit={this.handleSubmit}>
  <h5>Add Contact</h5> <hr/>
  
<div class="md-form">
<i class="fas fa-user-circle prefix cyan-text"></i>
  <input type="text" id="inputIconEx2" class="form-control" name ="name" value={this.state.name} className ="name" onChange={this.handleChange}/>
  <label for="inputIconEx2" className='form_label'>Name</label>
</div>


<div class="md-form">
<i class="far fa-address-card fa-2x prefix cyan-text"></i>
  <input type="text" id="inputIconEx2" class="form-control" name ="number" value={this.state.number} className ="name" onChange={this.handleChange}/>
  <label for="inputIconEx2" className='form_label'>Number</label>
</div> 


<div class="md-form">
<i class="far fa-envelope fa-2x prefix cyan-text"></i>
  <input type="email" id="inputIconEx2" class="form-control" name ="email" value={this.state.email} className ="name" onChange={this.handleChange}/>
  <label for="inputIconEx2" className='form_label'>E-mail </label>
</div>


<div class="md-form">
<i class="far fa-address-book fa-xm prefix cyan-text"></i>
  <input type="text" id="inputIconEx2" class="form-control" name ="address" value={this.state.address} className ="name" onChange={this.handleChange}/> 
  <label htmlFor="inputIconEx2" className='form_label'>Address</label>
</div>

<button className="btn blue-gradient btn-sm">Save</button>

</form>
</div>
               

            
        )
    }
}

export default UserForm;
