import PropTypes from 'prop-types';

import {ContactItem, ContactText, ContactButton} from './ContactList.styled'
import Box from 'components/Box/Box'

export const ContactList = ({itemName,onClickDelete}) => {
    console.log(itemName)

    return (
        <>
        <Box as="ul" p={0} m={0}>
        {itemName.map(el => (
            <ContactItem key={el.id}>
                <ContactText>{el.name}: {el.number}</ContactText>
                <ContactButton type="button" onClick={() => onClickDelete(el.id)}>Delete</ContactButton>
            </ContactItem>
            
        ))}
        </Box>
        
        </>
    )
}

ContactList.propTypes = {
    itemName: PropTypes.arrayOf(PropTypes.object.isRequired),
    onClickDelete: PropTypes.func.isRequired,
    }