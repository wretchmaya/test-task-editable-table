import { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import TextArea from '../TextArea/TextArea';
import Label from '../Label/Label';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faUpload } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px 0;
`;

const StyledForm = styled.form`
    width: 300px;
    justify-content: start;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;

const StyledModal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
`;

const ModalContent = styled.div`
    width: 60%;
    height: 250px;
    background-color: white;
    padding: 25px;
    position: relative;

    .modal__close {
        position: absolute;
        right: 12px;
        top: 10px;
    }
`;

const ModalForm = ({ createUser, closeModal }) => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        about: '',
    });

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    return (
        <StyledModal onClick={closeModal}>
            <ModalContent className="modal__content" onClick={e => e.stopPropagation()}>
                <Button clickHandler={closeModal} className="modal__close">
                    <FontAwesomeIcon icon={faTimes} />
                </Button>
                <StyledForm>
                    <InputWrapper>
                        <Label htmlFor="name">Name:</Label>
                        <Input
                            value={formData.name}
                            name="name"
                            id="name"
                            type="text"
                            onChange={handleInputChange}
                            isEditable
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Label htmlFor="age">Age:</Label>
                        <Input
                            value={formData.age}
                            name="age"
                            id="age"
                            type="number"
                            onChange={handleInputChange}
                            isEditable
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Label htmlFor="about">About:</Label>
                        <TextArea
                            id="about"
                            value={formData.about}
                            name="about"
                            onChange={handleInputChange}
                            isEditable={true}
                            border
                        />
                    </InputWrapper>
                    <Button
                        type="submit"
                        clickHandler={e => {
                            e.preventDefault();
                            createUser(formData);
                        }}
                    >
                        <FontAwesomeIcon icon={faUpload} />
                    </Button>
                </StyledForm>
            </ModalContent>
        </StyledModal>
    );
};
export default ModalForm;
