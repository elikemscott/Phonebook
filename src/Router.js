import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import EditForm from './components/EditForm';
import UserForm from './components/UsersForm';

export default function Router() {
    return (
        <BrowserRouter>
        <Route exact path='/' component={App} />
        <Route path='/edit/:id' component={EditForm} />
        
        
        </BrowserRouter>
    )
}
