import {
    FETCH_CHARACTER_START,
    FETCH_CHARACTER_SUCCESS,
    FETCH_CHARACTER_FAILURE,
    FETCH_SPELLS_START,
    FETCH_SPELLS_SUCCESS,
    FETCH_SPELLS_FAILURE,
    FETCH_HOUSES_START,
    FETCH_HOUSES_SUCCESS,
    FETCH_HOUSES_FAILURE,
    FETCH_SORTING_START,
    FETCH_SORTING_SUCCESS,
    FETCH_SORTING_FAILURE,

} from "../Actions"


const initialState = {
    characters: [],
    spells: [],
    houses: [],
    sortingHat: [],
    isLoading: false,
    error: '',


}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CHARACTER_START:
            return {
                ...state,
                isLoading: true,
                error: "",

            };
        case FETCH_CHARACTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                characters: action.payload,
                error: ""
            };
        case FETCH_CHARACTER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

            
        case FETCH_SPELLS_START:
            return {
                ...state,
                isLoading: true,
                error: "",
        
            };
        case FETCH_SPELLS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                spells: action.payload,
                error: ""
            };
        case FETCH_SPELLS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case FETCH_HOUSES_START:
            return {
                ...state,
                isLoading: true,
                error: "",
        
            };
        case FETCH_HOUSES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                houses: action.payload,
                error: ""
            };
        case FETCH_HOUSES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case FETCH_SORTING_START:
            return {
                ...state,
                isLoading: true,
                error: "",
        
            };
        case FETCH_SORTING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                sortinHat: action.payload,
                error: ""
            };
        case FETCH_SORTING_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
      
        default: 
        return state
    }
}