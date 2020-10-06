import { connect } from 'react-redux';
import { App } from './App';
import { setPage, setIsActiveSort, resetFilters } from './store/actions';

const mapState2Props = (state) => ({
    limit: state.limit,
    filteredHotelsLength: state.filteredHotelsLength,
    allHotels: Object.entries(state.allHotels),
    filters: state.filters,
});

const mapDispatch2Props = dispatch => ({
    setPage: number => dispatch(setPage(number)),
    resetFilters: () =>  dispatch(resetFilters()),
});

const Enhanced = connect(
    mapState2Props,
    mapDispatch2Props
)(App);

export { Enhanced as App };