import React, { useState } from 'react';

const DisplayPosts = (props) => {

    const [posts,setPosts] = useState([{}]);

    return (  
        <h1>
            {posts.map((post) => {
                return (
                    <h2>
                    {posts.post}
                    </h2>
                )
            })}
        </h1>
    );
}
 
export default DisplayPosts;