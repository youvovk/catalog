import { connect } from 'react-redux';
import { Filters } from './Filters';
import { setFilter, setActiveSort } from "../../store/actions";

const mapState2Props = (state) => ({
    allHotels: Object.entries(state.allHotels),
    filteredHotels: state.filteredHotels,
    allFilters: state.allFilters,
    filters: state.filters,
    sorts: state.sorts,
    isResetFilters: state.isResetFilters,
    resetFilter: state.resetFilter,
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