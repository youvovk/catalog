import { connect } from 'react-redux';
import { FirstHotels } from './FirstHotels';
// import { selectorRestaurants } from './store/selectors';

const mapState2Props = (state) => {
    return {
        allHotels: Object.entries(state.allHotels),
        firstHotels: state.firstHotels,
        hotels: state.hotels,
        filters: state.filters,
        page: state.page,
        total: state.total,
        error: state.error,
        sorts: state.sorts,
        isLoading: state.isLoading,
    }
};

const mapDispatch2Props = dispatch => ({

});

const Enhanced = connect(
    mapState2Props,
    mapDispatch2Props,
)(FirstHotels);

export { Enhanced as FirstHotels };