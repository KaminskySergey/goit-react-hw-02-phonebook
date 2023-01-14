import PropTypes from 'prop-types';

import { Component } from "react";
import { nanoid } from 'nanoid'

import {Form, FormInput, FormButton} from './ContactForm.styled';

export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

    nameId = nanoid();
    telId = nanoid()

    handeChange = (e) => {
        const {name, value} = e.target
       this.setState({
        [name]: value,
       })
      }
    
      handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state);

        this.reset()
      }

    reset(){
    this.setState({name: '', number: ''})
  }
    render(){
        const {name, number} = this.state
        return (
            <Form onSubmit={this.handleSubmit}>
                <label htmlFor={this.nameId}></label>
                <FormInput
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                placeholder="Name:"
                onChange={this.handeChange}
                value={name}
                />
                <label htmlFor={this.telId}>
                <FormInput
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                placeholder="Tel:"
                onChange={this.handeChange}
                value={number}
                />
                </label>
    
                <FormButton type='submit'>Add Contact</FormButton>
            </Form> 
        )
    }
   
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
    }