import { LOAD_VIDEOS_SUCCESS, LOAD_VIDEOS_ERROR } from '../actions/actionTypes';

const initialState = {
 videos: [],
 hasError: false,
};

const videoReducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case LOAD_VIDEOS_SUCCESS:
            return {
                videos: action.videos,
                hasError: false,
            };
        case LOAD_VIDEOS_ERROR:
            return {
                videos: [],
                hasError: true,
            };
        default:
            return state;
    }
};

export default videoReducer;