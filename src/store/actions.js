
export const ACTION_TYPES = {
    SAVE_HOTELS: 'SAVE_HOTELS',
    SAVE_TOTAL: 'SAVE_TOTAL',
    SAVE_FIRST_HOTEL: 'SAVE_FIRST_HOTEL',
    SET_LOAD_ERROR: 'SET_LOAD_ERROR',
    SET_OFFSET: 'SET_OFFSET',
    SET_LIMIT: 'SET_LIMIT',
    START_LOADING: 'START_LOADING',
    STOP_LOADING: 'STOP_LOADING',
    PREPARE_HOTELS: 'PREPARE_HOTELS',
};

const init = {
    "async": true,
    "crossDomain": true,
    "method": "GET",
    "headers": {
        "cache-control": "no-cache",
        "postman-token": "447d8b35-042e-1027-a39e-588c28284c62"
    }
};

const url = (offset, limit) => `http://192.168.0.131/__ajax/catalog?city_idcity_id=1210&offset=${offset}&limit=${limit}`;

const saveHotels = data => ({
    type: ACTION_TYPES.SAVE_HOTELS,
    payload: data,
});

export const prepareHotels = (offset, limit) => ({
    type: ACTION_TYPES.PREPARE_HOTELS,
    payload: url(offset, limit),
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

export const setOffset = data => ({
    type: ACTION_TYPES.SET_OFFSET,
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

export const loadHotels = (offset, limit, loadedAll, total) => (dispatch) => {

    if (!loadedAll) {
        let offsetNext = offset + limit;
        dispatch(setOffset(offsetNext));

        dispatch(startLoading());

        fetch(url(offset, 50), init)
            .then(res => res.json())
            .then(({ response }) => {
                dispatch(startLoading());
                //console.log(response, 'hotels');
                const {
                    data
                } = response;

                dispatch(saveHotels(data));
            })
            .catch(error => dispatch(setError(error.massage)))
            .finally(() => dispatch(stopLoading()));
    }
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
            dispatch(saveFirstHotel(data));
        })
        .catch(error => dispatch(setError(error.massage)))
        .finally(() => dispatch(stopLoading()));
};