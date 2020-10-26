import { ACTION_TYPES } from './actions';

const initialStore = {
    allHotels: {},
    hotels: [],
    firstHotels: [],
    filteredHotels: [],
    filteredHotelsLength: null,
    page: 1,
    isActiveFilters: false,
    filters: {
        districts: [],
        stars: [],
        types: [],
        facilities: [],
    },
    isActiveSort: false,
    total: 0,
    offset: 0,
    limit: 25,
    sorts: [],
    isLoading: false,
    error: null,
    isResetFilters: false,
    resetFilter: '',
    allFilters: {
        districts: {},
        stars: {},
        types: {},
        facilities: {},
    },
};

export function rootReducer(state = initialStore, action) {
    switch (action.type) {

        case ACTION_TYPES.SAVE_HOTELS: {
            const { payload } = action;

            return {
                ...state,
                error: null,
                allHotels: {
                    ...state.allHotels,
                    ...payload,
                },
                hotels: [
                    ...state.hotels,
                    ...Object.entries(payload),
                ],
            };
        }

        case ACTION_TYPES.SAVE_FIRST_HOTEL: {
            const { payload } = action;

            return {
                ...state,
                error: null,
                allHotels: {
                    ...payload,
                },
                firstHotels: [...Object.entries(payload)],
            };
        }

        case ACTION_TYPES.SAVE_TOTAL: {
            const { payload } = action;

            return {
                ...state,
                total: payload,
            };
        }

        case ACTION_TYPES.SET_FILTER: {
            const { payload, name } = action;

            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: payload
                },
                isResetFilters: false,
            };
        }

        case ACTION_TYPES.SET_FILTERED_HOTELS: {
            const { payload } = action;

            return {
                ...state,
                filteredHotels: payload,
            };
        }

        case ACTION_TYPES.SET_FILTERED_HOTELS_LENGTH: {
            const { payload } = action;

            return {
                ...state,
                filteredHotelsLength: payload,
            };
        }

        case ACTION_TYPES.SET_PAGE: {
            const { payload } = action;

            return {
                ...state,
                page: payload,
            };
        }

        case ACTION_TYPES.SET_OFFSET: {
            const { payload } = action;

            return {
                ...state,
                offset: payload,
            };
        }

        case ACTION_TYPES.SET_IS_ACTIVE_SORT: {
            const { payload } = action;

            return {
                ...state,
                isActiveSort: payload,
            };
        }

        case ACTION_TYPES.SET_SORT: {
            const { payload } = action;

            return {
                ...state,
                sorts: payload,
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

        case ACTION_TYPES.RESET_FILTERS: {
            return {
                ...state,
                filters: {
                    districts: [],
                    stars: [],
                    types: [],
                    facilities: [],
                },
                isResetFilters: true,
            };
        }

        case ACTION_TYPES.RESET_FILTER: {
            const { payload, name } = action;

            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: state.filters[name].filter(category => category !== payload),
                },
                resetFilter: payload,
            };
        }

        case ACTION_TYPES.SAVE_FILTERS: {
            const { payload } = action;

            return {
                ...state,
                allFilters: {
                    districts: { ...state.allFilters.districts, ...payload.districts },
                    stars: { ...state.allFilters.stars, ...payload.stars },
                    types: { ...state.allFilters.types, ...payload.types },
                    facilities: { ...state.allFilters.facilities, ...payload.facilities },
                },
            };
        }

        default:
            return state;
    }
}