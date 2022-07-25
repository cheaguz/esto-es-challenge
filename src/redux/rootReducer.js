import { combineReducers } from "redux";
import { PROJECTS_SUCCESS } from "./types"; 

const initialState = {
    projects: [],

}

 const projectsReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case PROJECTS_SUCCESS:
            return {
                ...state ,
                projects : action.payload
            }

        default:
            return state;
    }

}

export const reducer = combineReducers({
    projectsReducer:  projectsReducer,
})
