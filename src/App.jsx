import React from 'react';
import CreatePost from './components/CreatePost';
import DisplayPosts from './components/DisplayPosts';
import NavBar from './components/NavBar';
import Post from './components/Post';


function App() {
  
  return(
    <div>
      <NavBar />
      <CreatePost />
      <DisplayPosts />
      


    </div>
  );
}
export default App;
