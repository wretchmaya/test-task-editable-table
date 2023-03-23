import { Table } from './Table';
import { connect } from 'react-redux';
import { getUsersAction, sortUsersAction } from '../../redux/actions/usersAction';

export const mapStateToProps = state => {
    return {
        users: state.tableReducer.users,
        isLoading: state.tableReducer.isLoading,
        isModalOpened: state.tableReducer.isModalOpened,
    };
};

export const mapDispatchToProps = dispatch => ({
    getUsers: () => dispatch(getUsersAction()),
    sortUsers: props => dispatch(sortUsersAction(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
