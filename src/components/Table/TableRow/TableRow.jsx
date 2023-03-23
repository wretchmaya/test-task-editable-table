import { useState } from 'react';
import { setToLocalStorage } from '../../../helpers/localStorageActions';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import TextArea from '../../TextArea/TextArea';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faUserPen, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

const TableRow = ({ id, name, age, about, deleteUser, updateUser }) => {
    const [rowValue, setRowValue] = useState({
        id,
        name,
        age,
        about,
    });
    const [isEditing, setIsEditing] = useState(false);

    const onRowEdit = e => {
        const { name, value } = e.target;
        setRowValue({
            ...rowValue,
            [name]: value,
        });
    };

    const onRowBlur = () => {
        isEditing && setToLocalStorage(rowValue);
    };

    const editRowToggler = () => {
        setIsEditing(editing => !editing);
    };

    const deleteRow = () => {
        deleteUser(id);
    };

    const updateRow = () => {
        editRowToggler();
        updateUser(rowValue);
    };

    return (
        <tr onBlur={onRowBlur}>
            <th>{id}</th>
            <td>
                <Input
                    value={rowValue.name}
                    name={'name'}
                    handler={onRowEdit}
                    isEditable={isEditing}
										transparent
                />
            </td>
            <td>
                <Input
                    value={rowValue.age}
                    name={'age'}
                    handler={onRowEdit}
                    isEditable={isEditing}
										transparent
                />
            </td>
            <td>
                <TextArea
                    value={rowValue.about}
                    name="about"
                    onChange={onRowEdit}
                    isEditable={isEditing}
										transparent
                />
            </td>
            <td>
                {isEditing ? (
                    <Button clickHandler={updateRow}>
                        <FontAwesomeIcon icon={faFloppyDisk} />
                    </Button>
                ) : (
                    <Button clickHandler={editRowToggler}>
                        <FontAwesomeIcon icon={faUserPen} />
                    </Button>
                )}

                <Button clickHandler={deleteRow}>
                    <FontAwesomeIcon icon={faTimes} />
                </Button>
            </td>
        </tr>
    );
};
export default TableRow;
