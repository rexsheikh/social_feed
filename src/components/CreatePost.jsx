import React, { useState } from 'react';
import Post from './Post';




const CreatePost = (props) => {

    const [name,setName] = useState("");
    const [post,setPost] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            name : name,
            post : post
        };
        props.addNewPost(newPost)
    }
    return (  
        <form onSubmit={handleSubmit}>
            <div>
             <label> Name </label>
             <input type = "text" value={props.name} onChange = {(event) => setName(event.target.value)}/>
            </div>
            <label> Post </label>
            <input type = "text" value={props.post} onChange = {(event) => setPost(event.target.value)}/>
            <button type = "submit">Create</button>
        </form>
    );
}
 
export default CreatePost;