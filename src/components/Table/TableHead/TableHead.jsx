import Button from '../../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const TableHead = ({ openModalForm, handleSortOrder }) => {
    return (
        <thead>
            <tr onClick={handleSortOrder}>
                <th id="id">ID</th>
                <th id="name">Name</th>
                <th id="age">Age</th>
                <th id="about">About</th>
                <th>
                    <Button clickHandler={openModalForm}>
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>
                </th>
            </tr>
        </thead>
    );
};
export default TableHead;
