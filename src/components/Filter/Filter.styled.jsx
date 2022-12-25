import styled from 'styled-components'


export const FilterCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const FilterText = styled.div`
    margin-bottom: ${p => p.theme.space[3]}px;
    color: ${p => p.theme.colors.red};
`

export const FilterInput = styled.input`
    width: ${p => p.theme.space[7]}px;
    height: ${p => p.theme.space[3]}px;
    padding: ${p => p.theme.space[1]}px;
    border-color: ${p => p.theme.colors.green};
    border-radius: ${p => p.theme.space[2]}px;
    transition: all 250ms;
    
    &:hover, &:focus {
        background-color: ${p => p.theme.colors.green};
    }
`