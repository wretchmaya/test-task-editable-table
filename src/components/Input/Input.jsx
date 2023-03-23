import styled from 'styled-components';

const Input = styled.input.attrs(props => ({
    readOnly: !props.isEditable,
}))`
    border: ${props => (props.isEditable ? '1px solid black' : 'none')};
    background-color: ${props => (props.transparent ? 'transparent' : 'none')};
    text-align: center;
    height: 23px;
    &:focus-visible {
        outline: ${props =>
            props.isEditable ? '-webkit-focus-ring-color auto 1px' : 'none'};
    }
`;

export default Input;
