import { ACTION_TYPES } from './actions';

const initialStore = {
    hotels: null,
    firstHotels: null,
    preparedHotels: [],
    total: 0,
    offset: 0,
    limit: 25,
    isLoading: false,
    error: null,
};

export function rootReducer(state = initialStore, action) {
    switch (action.type) {

        case ACTION_TYPES.SAVE_HOTELS: {
            const { payload } = action;

            return {
                ...state,
                error: null,
                hotels: {
                    ...state.hotels,
                    ...payload,
                },
            };
        }

        case ACTION_TYPES.SAVE_FIRST_HOTEL: {
            const { payload } = action;

            return {
                ...state,
                error: null,
                firstHotels: {
                    ...payload,
                },
            };
        }

        case ACTION_TYPES.PREPARE_HOTELS: {
            const { payload } = action;

            return {
                ...state,
                error: null,
                preparedHotels: [ ...state.preparedHotels, payload],
            };
        }

        case ACTION_TYPES.SAVE_TOTAL: {
            const { payload } = action;

            return {
                ...state,
                total: payload,
            };
        }

        case ACTION_TYPES.SET_OFFSET: {
            const { payload } = action;

            return {
                ...state,
                offset: payload,
            };
        }

        case ACTION_TYPES.SET_LIMIT: {
            const { payload } = action;

            return {
                ...state,
                limit: payload,
            };
        }

        case ACTION_TYPES.SET_LOAD_ERROR: {
            const { payload } = action;

            return {
                ...state,
                error: payload,
                hotels: null,
            };
        }

        case ACTION_TYPES.START_LOADING: {
            return {
                ...state,
                isLoading: true,
            };
        }

        case ACTION_TYPES.STOP_LOADING: {
            return {
                ...state,
                isLoading: false,
            };
        }

        default:
            return state;
    }
}