import TableRow from './TableRow';
import { connect } from 'react-redux';
import { deleteUserAction, updateUserAction } from '../../../redux/actions/usersAction';

export const mapStateToProps = state => {
    return {
        users: state.tableReducer.users,
    };
};

export const mapDispatchToProps = dispatch => ({
    deleteUser: props => dispatch(deleteUserAction(props)),
    updateUser: props => dispatch(updateUserAction(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableRow);
