import { Component } from "react"
import { nanoid } from 'nanoid'

import { ContactForm } from "./ContactForm/ContactForm"
import { ContactList  } from "./ContactList/ContactList"
import { Filter } from "./Filter/Filter"


import Box from "./Box/Box"


export class App extends Component {
  
  state = {
    contacts: [],
    filter: '',
  }
  
  addNameForm = (data) => {
    
    const filterByName = this.state.contacts.some(el => el.name === data.name)
    if(filterByName){
          alert(`${data.name} is already in contacts`);
        }

    else{
      const itemName = {
        id: nanoid(),
        ...data,
        
      }
      this.setState(prevState => ({
        contacts: [itemName, ...prevState.contacts],
        
      }))
    }

}
    
handleFilter = (e) => {
  this.setState({filter: e.target.value})
}

handleSearchInput = () => {
const {contacts, filter} = this.state;

return contacts.filter((contact) => 
contact.name.toLowerCase().includes(filter.toLowerCase()))
}

handleDeleteContact = (contactId) => {
  console.log(contactId);
  this.setState((prevState) => ({
    contacts: prevState.contacts.filter((item) => item.id !== contactId)
  }))
  return;
}

    render(){
    const {filter} = this.state;
    
    const visibleContact = this.handleSearchInput()
    console.log(visibleContact);
    return (
      <>
      <Box as="section" display="flex" justifyContent="center" flexDirection="column" alignItems="center" border='2px solid black' width="50%" borderRadius="10px" p={16} backgroundColor='#609'>
      <h1>Name</h1>
      <ContactForm  onSubmit={this.addNameForm} />
      <h2>Contacts</h2>
      <Filter filterValue={filter} onChange={this.handleFilter}/>
      <ContactList itemName={visibleContact} onClickDelete={this.handleDeleteContact}/>
      </Box>
      </>
    )
  }
};
