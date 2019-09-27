import axios from 'axios';
import * as actionTypes from './actionTypes';

// @todo: API Need to be Added.
import videoResponse from '../videoResponse';

export const requestVideos = () => {
    return {
        type: actionTypes.REQUEST_VIDEOS,
        details: {},
    };
};

export const setVideoResponse = (details) => {
    return {
        type: actionTypes.LOAD_VIDEOS_SUCCESS,
        details,
    };
};

export const getVideoList = () => {
    return new Promise(function (resolve) {
        setTimeout(resolve(videoResponse), 2000);
    });
}