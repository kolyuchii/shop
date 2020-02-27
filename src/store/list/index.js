import {
    GET_PRODUCTS_URL,
} from 'config';

const initialState = {
    items: null,
    favourite: {},
    isHidden: false,
};

export function hideItems() {
    return function (dispatch, getState) {
        const state = getState();
        dispatch(setIsHidden(!state.list.isHidden));
    }
}

export function fetchItems() {
    return function(dispatch) {
        fetch(GET_PRODUCTS_URL)
            .then(response => response.json())
            .then(items => {
                dispatch(setItems(items));
            })
            .catch(error => {
                debugger;
            });
    }
}

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

export const SET_IS_HIDDEN = Symbol('SET_IS_HIDDEN');
export function setIsHidden(isHidden) {
    return {
        type: SET_IS_HIDDEN,
        isHidden,
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
                isHidden: action.isHidden,
            });
        default:
            return state;
    }
}