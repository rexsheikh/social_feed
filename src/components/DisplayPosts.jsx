import React, { useState } from 'react';

const DisplayPosts = (props) => {
    const [posts,setPosts] = useState([{}]);

    return (  
        <div>
            {props.parentPosts.map((post) => {
                return (
                    <p>
                    {post.name}
                    {post.post}
                    </p>
                )
            })}
        </div>
    );
}
 
export default DisplayPosts;