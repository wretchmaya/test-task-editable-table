import { Table } from './Table';
import { connect } from 'react-redux';
import { getUsersAction } from '../../redux/actions/usersAction';

export const mapStateToProps = state => {
    return {
        users: state.tableReducer.users,
				isLoading: state.tableReducer.isLoading,
				isModalOpened: state.tableReducer.isModalOpened
    };
};

export const mapDispatchToProps = dispatch => ({
    getUsers: () => dispatch(getUsersAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
