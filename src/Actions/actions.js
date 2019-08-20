import axios from "axios";

export const FETCH_CHARACTER_START = "FETCH_CHARACTER_START";
export const FETCH_CHARACTER_SUCCESS = "FETCH_CHARACTER_SUCCESS";
export const FETCH_CHARACTER_FAILURE = "FETCH_CHARACTER_FAILURE";

export const FETCH_SPELLS_START = "FETCH_SPELLS_START";
export const FETCH_SPELLS_SUCCESS = "FETCH_SPELLS_SUCCESS";
export const FETCH_SPELLS_FAILURE = "FETCH_SPELLS_FAILURE";

export const FETCH_HOUSES_START = "FETCH_HOUSES_START";
export const FETCH_HOUSES_SUCCESS = "FETCH_HOUSES_SUCCESS";
export const FETCH_HOUSES_FAILURE = "FETCH_HOUSES_FAILURE";

export const FETCH_SORTING_START = "FETCH_SORTING_START";
export const FETCH_SORTING_SUCCESS = "FETCH_SORTING_SUCCESS";
export const FETCH_SORTING_FAILURE = "FETCH_SORTING_FAILURE";





export const getCharacters = () => {
    return dispatch => {
        dispatch({type: FETCH_CHARACTER_START});
        axios 
        .get(`https://www.potterapi.com/v1/characters/`, {
            params: { 
              key: "$2a$10$BIGaxlF6Fk8YJyoCnLOoqerGil4ZbZCATrYMbvMqhXp3sROZn5TnO"}
              })
        .then(res => {
            dispatch({type: FETCH_CHARACTER_SUCCESS, payload: res.data})
         })
        .catch(error => {
            console.log(error)
            dispatch({type: FETCH_CHARACTER_FAILURE, payload: error})
        })
    }
}

export const getSpells = () => {
    return dispatch => {
        dispatch({type: FETCH_SPELLS_START});
        axios 
        .get(`https://www.potterapi.com/v1/spells/`, {
        params: { 
          key: "$2a$10$BIGaxlF6Fk8YJyoCnLOoqerGil4ZbZCATrYMbvMqhXp3sROZn5TnO"}
             })
        .then(res => {
            dispatch({type: FETCH_SPELLS_SUCCESS, payload: res.data})
         })
        .catch(error => {
            console.log(error)
            dispatch({type: FETCH_SPELLS_FAILURE, payload: error})
        })
    }
}

export const getHouses = () => {
    return dispatch => {
        dispatch({type: FETCH_HOUSES_START});
        axios 
        .get(`https://www.potterapi.com/v1/houses/`, {
        params: { 
          key: "$2a$10$BIGaxlF6Fk8YJyoCnLOoqerGil4ZbZCATrYMbvMqhXp3sROZn5TnO"}
             })
        .then(res => {
            console.log(res.data)
            dispatch({type: FETCH_HOUSES_SUCCESS, payload: res.data})
         })
        .catch(error => {
            dispatch({type: FETCH_HOUSES_FAILURE, payload: error})
        })
    }
}

export const getSortingHat = () => {
    return dispatch => {
        dispatch({type: FETCH_SORTING_START});
        axios 
        .get(`https://www.potterapi.com/v1/sortingHat/`, {
        params: { 
          key: "$2a$10$BIGaxlF6Fk8YJyoCnLOoqerGil4ZbZCATrYMbvMqhXp3sROZn5TnO"}
             })
        .then(res => {
            dispatch({type: FETCH_SORTING_SUCCESS, payload: res.data})
         })
        .catch(error => {
            console.log(error)
            dispatch({type: FETCH_SORTING_FAILURE, payload: error})
        })
    }
}


