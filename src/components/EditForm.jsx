import React, { Component } from 'react';
import {connect} from 'react-redux';
import { editUser } from '../store/UserAction'

class EditForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: props.user.name,
            number:props.user.number,
            email: props.user.email,
            address: props.user.address,
             
        };

        this.id = props.match.params.id
    }
    handleChange = (e) => {
        this.setState({
          [e.target.name] : e.target.value
        });
      };

      handleSubmit = (e) => {
        e.preventDefault();
        const updatedInfo = {
          name: this.state.name,
          number: this.state.number,
          email: this.state.email,
          address: this.state.address,
        
        };
        this.props.editUser(this.id, updatedInfo) 
        this.setState({
          name:'',
          number:'',
          email:'',
          address:'',
        });

        this.props.history.push('/');
      };

    render() {
        return (
            <div className="">
            <p className = ""></p>
               <form className='user_form2' onSubmit={this.handleSubmit}>
  <h5>Edit Contact</h5> <hr/>
  
<div class="md-form">
<i class="fas fa-user-circle prefix cyan-text"></i>
  <input type="text" id="inputIconEx2" class="form-control" name ="name" value={this.state.name} className ="name" onChange={this.handleChange}/>
  <label for="inputIconEx2" className='form_label'></label>
</div>


<div class="md-form">
<i class="far fa-address-card fa-2x prefix cyan-text"></i>
  <input type="text" id="inputIconEx2" class="form-control" name ="number" value={this.state.number} className ="name" onChange={this.handleChange}/>
  <label for="inputIconEx2" className='form_label'></label>
</div> 


<div class="md-form">
<i class="far fa-envelope fa-2x prefix cyan-text"></i>
  <input type="email" id="inputIconEx2" class="form-control" name ="email" value={this.state.email} className ="name" onChange={this.handleChange}/>
  <label for="inputIconEx2" className='form_label'> </label>
</div>


<div class="md-form">
<i class="far fa-address-book fa-xm prefix cyan-text"></i>
  <input type="text" id="inputIconEx2" class="form-control" name ="address" value={this.state.address} className ="name" onChange={this.handleChange}/> 
  <label htmlFor="inputIconEx2" className='form_label'></label>
</div>

<button className="btn blue-gradient">Update</button>

</form>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
user: state.users.find(user => user.id === ownProps.match.params.id)
});

const mapDispatchToProps = {
  editUser: editUser
}

export default  connect(mapStateToProps, mapDispatchToProps)(EditForm);
