import { connect } from 'react-redux';
import { FirstHotels } from './FirstHotels';
import { loadFirstHotel } from "../../store/actions";
// import { selectorRestaurants } from './store/selectors';

const mapState2Props = (state) => {
    return {
        firstHotels: state.firstHotels,
        filters: state.filters,
        page: state.page,
        total: state.total,
        error: state.error,
        sorts: state.sorts,
        isLoading: state.isLoading,
    }
};

const mapDispatch2Props = dispatch => ({
    loadFirstHotel: (offset, limit, total) => dispatch(loadFirstHotel(offset, limit, total)),
});

const Enhanced = connect(
    mapState2Props,
    mapDispatch2Props,
)(FirstHotels);

export { Enhanced as FirstHotels };