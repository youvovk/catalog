import { connect } from 'react-redux';
import { Error } from './Error';

const mapState2Props = (state) => ({});

const mapDispatch2Props = dispatch => ({});

const Enhanced = connect(
    mapState2Props,
    mapDispatch2Props,
)(Error);

export { Enhanced as Error };