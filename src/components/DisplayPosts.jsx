import React, { useState } from 'react';
import Post from './Post';
import CreatePost from './CreatePost';

const DisplayPosts = (props) => {
    return (  
        <div>
            {props.parentPosts.map((post) => {
                return (
                    <div>
                        <p><Post name = {post.name} post = {post.post} /></p>
                    </div>
                    
                )
            })}
        </div>
    );
}
 
export default DisplayPosts;