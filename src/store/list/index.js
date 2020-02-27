import {
    GET_PRODUCTS_URL,
} from 'config';

const initialState = {
    items: null,
    favourite: {},
    isHiddenItems: false,
    isLoading: false,
};

// the isHiddenItems must be stored here
// because at least two containers use it
export function hideItems() {
    return function (dispatch, getState) {
        const state = getState();
        dispatch(setIsHidden(!state.list.isHiddenItems));
    }
}

export function fetchItems() {
    return function(dispatch) {
        dispatch(setLoading(true));
        fetch(GET_PRODUCTS_URL)
            .then(response => response.json())
            .then(items => {
                dispatch(setLoading(false));
                dispatch(setItems(items)); // just store the response
            })
            .catch(() => {
                dispatch(setLoading(false));
                // let's assume there are no errors
                // but in the real app it definitely must be handled
            });
    }
}

// No matter where the favourite object was updated
export function toggleFavourite(id) {
    return function (dispatch, getState) {
        const state = getState();
        if (state.list.favourite[id]) {
            delete state.list.favourite[id];
        } else {
            state.list.favourite[id] = true;
        }
        dispatch(setFavourite(Object.assign({}, state.list.favourite)));
    }
}

export const SET_LOADING = Symbol('SET_LOADING');
export function setLoading(loading) {
    return {
        type: SET_LOADING,
        loading
    }
}

export const SET_IS_HIDDEN = Symbol('SET_IS_HIDDEN');
export function setIsHidden(isHiddenItems) {
    return {
        type: SET_IS_HIDDEN,
        isHiddenItems,
    }
}

export const SET_ITEMS = Symbol('SET_ITEMS');
export function setItems(items) {
    return {
        type: SET_ITEMS,
        items,
    }
}

export const TOGGLE_FAVOURITE = Symbol('TOGGLE_FAVOURITE');
export function setFavourite(favourite) {
    return {
        type: TOGGLE_FAVOURITE,
        favourite,
    }
}

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_ITEMS:
            return Object.assign({}, state, {
                items: action.items
            });
        case TOGGLE_FAVOURITE:
            return Object.assign({}, state, {
                favourite: action.favourite,
            });
        case SET_IS_HIDDEN:
            return Object.assign({}, state, {
                isHiddenItems: action.isHiddenItems,
            });
        case SET_LOADING:
            return Object.assign({}, state, {
                isLoading: action.loading,
            });
        default:
            return state;
    }
}