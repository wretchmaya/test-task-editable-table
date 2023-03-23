import { useEffect } from 'react';
import TableHead from './TableHead/index';
import TableRow from './TableRow/index';
import { getFromLocalStorage } from '../../helpers/localStorageActions';
import ModalForm from '../ModalForm/index';
import styled from 'styled-components';

const StyledTable = styled.table`
    border-collapse: collapse;
    border: 2px solid rgb(200, 200, 200);
    letter-spacing: 1px;
    font-family: sans-serif;
    font-size: 0.8rem;
    width: 100%;
    td,
    th {
        border: 1px solid rgb(190, 190, 190);
        padding: 10px;
        border-radius: 5px;
    }

    td {
        text-align: center;
    }

    tr:nth-child(even) {
        background-color: #eee;
    }

    th {
        background-color: #f2f2f2;
    }
`;

export const Table = ({ users, getUsers, isLoading, isModalOpened }) => {
    useEffect(() => {
        getUsers();
    }, []);
    return (
        <>
            {isLoading ? (
                <h1>LOADING...</h1>
            ) : (
                <StyledTable>
                    <TableHead />
                    <tbody>
                        {users.map(user => {
                            const cachedUser = getFromLocalStorage(user.id);
                            return (
                                <TableRow
                                    id={cachedUser?.id || user.id}
                                    name={cachedUser?.name || user.name}
                                    age={cachedUser?.age || user.age}
                                    about={cachedUser?.about || user.about}
                                    key={cachedUser?.id || user.id}
                                />
                            );
                        })}
                    </tbody>
                </StyledTable>
            )}
            {isModalOpened && <ModalForm />}
        </>
    );
};
