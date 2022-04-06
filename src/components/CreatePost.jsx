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
            <div className='name-container'>
             <label className='name-label'> Name </label>
             <input className = 'name-box' type = "text" value={props.name} onChange = {(event) => setName(event.target.value)}/>
            </div>
            <div className='post-container'>
                <label className='post-label'> Post </label>
                <textarea className='post-box' type = "text" value={props.post} onChange = {(event) => setPost(event.target.value)}/>
                <button className = "create-button" type = "submit">Create</button>
            </div>
        </form>
    );
}
 
export default CreatePost;