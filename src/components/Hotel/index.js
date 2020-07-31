import { connect } from 'react-redux';
import { Hotel } from './Hotel';
// import { selectorRestaurants } from './store/selectors';

const mapState2Props = (state) => ({});

const mapDispatch2Props = dispatch => ({});

const Enhanced = connect(
    mapState2Props,
)(Hotel);

export { Enhanced as Hotel };