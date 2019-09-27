import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import get from 'lodash/get';

// Material Components.
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

// Components.
import CardItem from '../components/CardItem';

// import { Vimeo } from 'vimeo';

// @todo: Tried to load Vimeo Videos but its only available in server side.
// const client = new Vimeo('9170abc1a6a27dac1e96919d8eafd74c2797a7fc', 'hbPAc8Q57tEFWb47zW7phMzd+hMGxkBUUX0qn9ltI3dSE2RjJNPLacViOB9V/6C90/CTxRCr6jQIVbkepfaplfY1GOSZ93TFAwBw63ZAQO5PLGvdHm1BOwP/tGbSNdEb', '285803a2da45fcdcd9cdf87d207e4637');

// Actions.
import { getVideoList, setVideoResponse } from '../store/actions/videos';

function Home() {
    const dispatch = useDispatch();
    // const videos = useSelector(state => get(state, 'videos', []));
    // console.log('video: ', videos);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideoList().then(response => {
            setVideos(response.videos);
            console.log(response);
        });
    }, []);

    const getCardProps = ({ title, thumbnail, channel, views, desc }) => {
        return {
            title,
            thumbnail,
            channel,
            views,
            desc,
        }
    }

    return (
        <Fragment>
            <h1>Welcome to App</h1>
            <Grid container spacing={3}>
                {videos.map((item) => {
                    return (
                        <Grid item xl={4} lg={4} md={4} sm={12}>
                            <CardItem {...getCardProps(item)} />
                        </Grid>
                    );
                })}
            </Grid>
        </Fragment>
    );
}

export default Home;
