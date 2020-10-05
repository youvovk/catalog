
export const ACTION_TYPES = {
    SAVE_HOTELS: 'SAVE_HOTELS',
    SAVE_TOTAL: 'SAVE_TOTAL',
    SAVE_FIRST_HOTEL: 'SAVE_FIRST_HOTEL',
    SET_LOAD_ERROR: 'SET_LOAD_ERROR',
    SET_PAGE: 'SET_PAGE',
    SET_FILTERED_HOTELS_LENGTH: 'SET_FILTERED_HOTELS_LENGTH',
    SET_FILTER: 'SET_FILTER',
    SET_OFFSET: 'SET_OFFSET',
    SET_IS_ACTIVE_SORT: 'SET_IS_ACTIVE_SORT',
    SET_SORT: 'SET_SORT',
    SET_LIMIT: 'SET_LIMIT',
    START_LOADING: 'START_LOADING',
    STOP_LOADING: 'STOP_LOADING',
    PREPARE_HOTELS: 'PREPARE_HOTELS',
};

let headers = new Headers();
headers.set('Authorization', 'Basic ' + btoa("planet" + ":" + "planet"));
headers.set('Cache-Control', 'no-cache');
headers.set('Postman-Token', '447d8b35-042e-1027-a39e-588c28284c62');

const init = {
    "async": true,
    "crossDomain": true,
    "method": "GET",
    "headers": {
        "cache-control": "no-cache",
        "postman-token": "447d8b35-042e-1027-a39e-588c28284c62"
    }
};

export const url = (offset, limit) => `/__ajax/catalog?city_idcity_id=1210&offset=${offset}&limit=${limit}`;

const saveHotels = data => ({
    type: ACTION_TYPES.SAVE_HOTELS,
    payload: data,
});

const saveFirstHotel = data => ({
    type: ACTION_TYPES.SAVE_FIRST_HOTEL,
    payload: data,
});

const saveTotal = data => ({
    type: ACTION_TYPES.SAVE_TOTAL,
    payload: data,
});

const setError = error => ({
    type: ACTION_TYPES.SET_LOAD_ERROR,
    payload: error,
});

export const setPage = data => ({
    type: ACTION_TYPES.SET_PAGE,
    payload: data,
});

export const setFilteredHotelsLength = data => ({
    type: ACTION_TYPES.SET_FILTERED_HOTELS_LENGTH,
    payload: data,
});

export const setFilter = (data, name) => ({
    type: ACTION_TYPES.SET_FILTER,
    payload: data,
    name,
});

export const setOffset = data => ({
    type: ACTION_TYPES.SET_OFFSET,
    payload: data,
});

export const setIsActiveSort = data => ({
    type: ACTION_TYPES.SET_IS_ACTIVE_SORT,
    payload: data,
});

export const setActiveSort = data => ({
    type: ACTION_TYPES.SET_SORT,
    payload: data,
});

export const setLimit = data => ({
    type: ACTION_TYPES.SET_LIMIT,
    payload: data,
});

const startLoading = () => ({
    type: ACTION_TYPES.START_LOADING,
});

const stopLoading = (limit) => ({
    type: ACTION_TYPES.STOP_LOADING,
});

export const loadHotels = preparedHotels => (dispatch) => {
    preparedHotels.forEach(url => {
        fetch(url, init)
            .then(res => res.json())
            .then(({ response }) => {
                // dispatch(startLoading());
                const {
                    data
                } = response;

                dispatch(saveHotels(Object.entries(data)));
            })
            .catch(error => dispatch(setError(error.massage)))
        // .finally(() => dispatch(stopLoading()))
     });
};

export const loadFirstHotel = (offset, limit) => (dispatch) => {
    dispatch(startLoading());

    fetch(url(offset, limit), init)
        .then(res => res.json())
        .then(({ response }) => {
            dispatch(startLoading());

            const {
                total,
                data
            } = response;

            dispatch(saveTotal(total));
            dispatch(setOffset(25));
            dispatch(setLimit(50));
            dispatch(saveFirstHotel(Object.entries(data)));
        })
        .catch(error => dispatch(setError(error.massage)))
        .finally(() => dispatch(stopLoading()));
};