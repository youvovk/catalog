import { connect } from 'react-redux';
import { Loader } from './Loader';

const mapState2Props = (state) => ({});

const mapDispatch2Props = dispatch => ({});

const Enhanced = connect(
    mapState2Props,
)(Loader);

export { Enhanced as Loader };