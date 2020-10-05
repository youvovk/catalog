import { connect } from 'react-redux';
import { Hotels } from './Hotels';
import { loadHotels, setLimit, prepareHotels, setFilteredHotelsLength } from "../../store/actions";
// import { selectorRestaurants } from './store/selectors';

const mapState2Props = (state) => {
    return ({
        allHotels: state.allHotels,
        hotels: state.hotels,
        firstHotels: state.firstHotels,
        filters: state.filters,
        page: state.page,
        total: state.total,
        limit: state.limit,
        error: state.error,
        sorts: state.sorts,
        isLoading: state.isLoading,
    })
};

const mapDispatch2Props = dispatch => ({
    loadHotels: preparedHotels => dispatch(loadHotels(preparedHotels)),
    setLimit: limit => dispatch(setLimit(limit)),
    setFilteredHotelsLength: length => dispatch(setFilteredHotelsLength(length)),
});

const Enhanced = connect(
    mapState2Props,
    mapDispatch2Props,
)(Hotels);

export { Enhanced as Hotels };