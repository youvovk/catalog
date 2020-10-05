import { connect } from 'react-redux';
import { App } from './App';
import { setPage, setIsActiveSort } from './store/actions';

const mapState2Props = (state) => ({
    limit: state.limit,
    filteredHotelsLength: state.filteredHotelsLength,
    allHotels: state.allHotels,
    filters: state.filters,
});

const mapDispatch2Props = dispatch => ({
    setPage: number => dispatch(setPage(number)),
});

const Enhanced = connect(
    mapState2Props,
    mapDispatch2Props
)(App);

export { Enhanced as App };