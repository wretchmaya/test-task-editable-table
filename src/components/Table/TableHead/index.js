import TableHead from './TableHead';
import { connect } from 'react-redux';
import { openModalFormAction } from '../../../redux/actions/usersAction';

export const mapDispatchToProps = dispatch => ({
    openModalForm: () => dispatch(openModalFormAction()),
});

export default connect(null, mapDispatchToProps)(TableHead);
