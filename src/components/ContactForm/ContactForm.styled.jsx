import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: ${p => p.theme.space[3]}px;
`

export const FormInput = styled.input`
    margin-bottom: ${p => p.theme.space[3]}px;
    width: ${p => p.theme.space[7]}px;
    height: ${p => p.theme.space[3]}px;
    padding: ${p => p.theme.space[2]}px;
    border-radius: ${p => p.theme.space[2]}px;
    box-shadow: ${p => p.theme.shadows.box};
    border-color: ${p => p.theme.colors.border};
    transition: all 250ms;
    
    
    &:hover, &:focus {
        background-color: ${p => p.theme.colors.primary};
    }
`

export const FormButton = styled.button`
    width: ${p => p.theme.space[6]}px;
    height: ${p => p.theme.space[4]}px;
    margin-left: auto;
    margin-right: auto;
    border-radius: ${p => p.theme.space[2]}px;
    cursor: pointer;
    transition: all 250ms;
    &:hover, &:focus {
        color: ${p => p.theme.colors.yellow};
        background-color: ${p => p.theme.colors.primary};
    }
`