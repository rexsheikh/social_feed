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
      <div>
        <NavBar />
      </div>
      <div className='content-container'>
        <div className='row'>
          <div className='col'></div>
          <div className='col-8'>
            <div className='create-post-container' >
              <CreatePost addNewPost = {addNewPost}/>
            </div>
            <div className='display-post'>
              <DisplayPosts parentPosts = {posts}/>
            </div>
          </div>
          <div className='col'></div>
        </div>
      </div>
    </div>
  );
}
export default App;

