import { connect } from 'react-redux';
import { Card } from './Card';
import {} from '../../../store/actions';

const mapState2Props = (state) => {
    return ({})
};

const mapDispatch2Props = dispatch => ({});

const Enhanced = connect(
    mapState2Props,
    mapDispatch2Props,
)(Card);

export { Enhanced as Card };