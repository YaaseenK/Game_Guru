import React from 'react';
import Post from './Post/Post'
import useStyles from './postsStyle';

const Posts = () => {
    const classes = useStyles();
    return (
        <>
        
            <h1 className={classes.sometthing}>Posts</h1>
            <Post />
            <Post />

        </>
    )
}

export default Posts;