import PropTypes from 'prop-types';

import { nanoid } from 'nanoid'
import Box from 'components/Box/Box'
import { FilterCont, FilterText, FilterInput } from './Filter.styled'

export const Filter = ({onChange, filterValue}) => {
    
    
    

    const filterId = nanoid()
    
        return (
            <>
        <Box mb={24}>
        <FilterCont htmlFor={filterId}>
        <FilterText>Find coctacts by name</FilterText>
        <FilterInput type="text" name='filter' value={filterValue}  onChange={onChange}/>
        </FilterCont>
        </Box>
        </>
        )
    
}

Filter.propTypes = {
    filterValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    }