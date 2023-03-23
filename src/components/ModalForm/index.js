import ModalForm from './ModalForm';
import { connect } from 'react-redux';
import { closeModalFormAction, createUserAction } from '../../redux/actions/usersAction';

export const mapDispatchToProps = dispatch => ({
    createUser: props => dispatch(createUserAction(props)),
    closeModal: () => dispatch(closeModalFormAction()),
});

export default connect(null, mapDispatchToProps)(ModalForm);
