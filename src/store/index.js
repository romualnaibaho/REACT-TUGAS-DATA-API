import { createStore } from "redux";

const initialState = {
    postsPerPage: 6,
    totalPosts: 100,
    loading: false
};

const reducer = (state = initialState, action) => {
    console.log("reducer berjalan", action);
    
    switch(action.type){
        case 'CHANGE-LOADING':
            return Object.assign({}, state, { loading : !state.loading });
        default:
            return state;
    }

    return state;
}

const store = createStore(reducer);

export default store;