import React, { useState } from 'react';
import CreatePost from './Components/CreatePost';
import DisplayPosts from './Components/DisplayPosts';
import NavBar from './Components/NavBar';
import './Components/App.css'


function App() {
  const [posts,setPosts] = useState([]);

  function addNewPost(post){   
    let tempPost = [post,...posts]
    setPosts(tempPost);
  }

  return(
    <div className = "container-fluid">
      <div className = "row">
        <div className='nav-bar'>
          <NavBar />
        </div>
      </div>
      <div className='background'>
        <div className = "row">
          <div className='create-post'>
            <CreatePost addNewPost = {addNewPost}/>
          </div>
        </div>
        <div className='row'> 
          <DisplayPosts parentPosts = {posts}/>
        </div>
      </div>
    </div>
  );
}
export default App;

