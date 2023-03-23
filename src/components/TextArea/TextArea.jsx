import styled from 'styled-components';

const TextArea = styled.textarea.attrs(props => ({
    readOnly: !props.isEditable,
}))`
    border: ${props => (props.border ? '1px solid black' : 'none')};
    resize: none;
    background-color: transparent;
    overflow: ${props => (props.isEditable ? 'unset' : 'hidden')};
    &:focus-visible {
        outline: ${props =>
            props.isEditable ? '-webkit-focus-ring-color auto 1px' : 'none'};
    }
`;
export default TextArea;
