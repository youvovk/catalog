import { connect } from 'react-redux';
import { Filters } from './Filters';
import { setFilter, setActiveSort } from "../../store/actions";

const mapState2Props = (state) => ({
    hotels: state.hotels,
    filters: state.filters,
    firstHotels: state.firstHotels,
    sorts: state.sorts,
    isResetFilters: state.isResetFilters,
});

const mapDispatch2Props = dispatch => ({
    setFilter: (data, name) => dispatch(setFilter(data, name)),
    setActiveSort: (isActiveSort) => dispatch(setActiveSort(isActiveSort)),
});

const Enhanced = connect(
    mapState2Props,
    mapDispatch2Props,
)(Filters);

export { Enhanced as Filters };