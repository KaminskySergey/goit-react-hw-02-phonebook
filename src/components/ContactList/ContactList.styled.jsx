import styled from 'styled-components'

export const ContactItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: ${p => p.theme.fontWeights.normal};
    width: ${p => p.theme.space[8]}px;
    height: ${p => p.theme.space[4]}px;
    padding: ${p => p.theme.space[1]}px;
    border-radius: ${p => p.theme.space[2]}px;
    outline: 3px solid ${p => p.theme.colors.primary};

    :not(:last-child){
        margin-bottom: ${p => p.theme.space[3]}px;
    }
`
export const ContactText = styled.p`
    font-size: ${p => p.theme.space[3]}px;
`

export const ContactButton = styled.button`
    cursor: pointer;
    border-radius: ${p => p.theme.space[2]}px;
    border: transparent;
    padding: ${p => p.theme.space[1]}px;
    transition: all 250ms;

    &:hover, &:focus {
        background-color: ${p => p.theme.colors.red};
    }
`