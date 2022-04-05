import React, { useState } from 'react';
import CreatePost from './Components/CreatePost';
import DisplayPosts from './Components/DisplayPosts';
import NavBar from './Components/NavBar';
import Post from './Components/Post';


function App() {
  const [posts,setPosts] = useState([]);

  function addNewPost(post){   
    let tempPost = [post,...posts]
    setPosts(tempPost);
  }

  return(
    <div>
      <NavBar />
      <CreatePost addNewPost = {addNewPost}/>
      <DisplayPosts parentPosts = {posts}/>
    </div>
  );
}
export default App;

