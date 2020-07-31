import { connect } from 'react-redux';
import { FirstHotels } from './FirstHotels';
import { loadHotels, setOffset, loadFirstHotel } from "../../store/actions";
// import { selectorRestaurants } from './store/selectors';

const mapState2Props = (state) => ({
    hotels: state.hotels,
    firstHotels: state.firstHotels,
    total: state.total,
    offset: state.offset,
    limit: state.limit,
    error: state.error,
    isLoading: state.isLoading,
});

const mapDispatch2Props = dispatch => ({
    loadHotels: (offset, limit, loadedAll, total) => dispatch(loadHotels(offset, limit, loadedAll, total)),
    setOffset: offset => dispatch(setOffset(offset)),
    loadFirstHotel: (offset, limit, total) => dispatch(loadFirstHotel(offset, limit, total)),
});

const Enhanced = connect(
    mapState2Props,
    mapDispatch2Props,
)(FirstHotels);

export { Enhanced as FirstHotels };