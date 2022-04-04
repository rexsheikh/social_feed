import React, { useState } from 'react';
import CreatePost from './components/CreatePost';
import DisplayPosts from './components/DisplayPosts';
import NavBar from './components/NavBar';
import Post from './components/Post';


function App() {
  const [posts,setPosts] = useState([{name:"rex", post:" helloworld"}]);

  function addNewPost(post){
    let tempPost = [post,...posts]
    setPosts(tempPost);
  }

  return(
    <div>
      <NavBar />
      <DisplayPosts parentPosts = {posts}/>
      <CreatePost addNewPost = {addNewPost}/>



    </div>
  );
}
export default App;

