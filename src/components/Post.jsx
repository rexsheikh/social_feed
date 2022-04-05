import CreatePost from "./CreatePost";
const Post = (props) => {
    return ( 
        <div>
            <h2> {props.name} {props.post} </h2>
            <p> like and dislike buttons</p>
        </div>
        
     );
}
 
export default Post;