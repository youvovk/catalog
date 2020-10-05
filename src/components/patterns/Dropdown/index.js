import { connect } from 'react-redux';
import { Dropdown } from './Dropdown';
import { setIsActiveSort } from "../../../store/actions";

const mapState2Props = (state) => ({
    isActiveSort: state.isActiveSort,
});

const mapDispatch2Props = dispatch => ({
    setIsActiveSort: isActiveSort => dispatch(setIsActiveSort(isActiveSort)),
});

const Enhanced = connect(
    mapState2Props,
    mapDispatch2Props,
)(Dropdown);

export { Enhanced as Dropdown };