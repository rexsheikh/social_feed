import React, { useState } from 'react';
import thumbs_down from "../assets/thumbs_down.png"
import thumbs_up from "../assets/thumbs_up.png"


const Post = (props) => {
    const [greenButtonClass,setGreenButtonClass] = useState("inactive")
    const [redButtonClass,setRedButtonClass] = useState("inactive")

    var date = new Date();
    var display_date = date.toDateString();

    function handleGreenClick(){
        if(greenButtonClass === "inactive" && redButtonClass === "inactive"){
            setGreenButtonClass("green-click");
        }else if(greenButtonClass === "inactive" && redButtonClass === "red-click"){
            setGreenButtonClass("green-click");
            setRedButtonClass("inactive");
        }
        else{
            setGreenButtonClass("inactive")
        }
    }

    function handleRedClick(){
        if(greenButtonClass === "inactive" && redButtonClass === "inactive"){
            setRedButtonClass("red-click")
        }else if(greenButtonClass === "green-click" && redButtonClass === "inactive"){
            setGreenButtonClass("inactive");
            setRedButtonClass("red-click");
        }
        else{
            setRedButtonClass("inactive")
        }
    }



    return ( 
        <div>
            <div className='row'>
                <div className='col'>
                 <p className='display-name'> {props.name}</p>
                </div>
                <div className='col'>
                 <p className='display-date'> {display_date} </p>
                </div>
            </div>
            <div className='row'>
                <div className='col-9'>
                    <p className='display-post-text'> {props.post} </p>
                </div> 

            </div>
            <div className='row'>
                <div className='col-9'> </div>  
                <div className = 'col'>
                    <button className= {greenButtonClass} onClick = {handleGreenClick}> 
                        <img src= {thumbs_up} alt= "thumbs_up"/>
                    </button>
                    <button className={redButtonClass} onClick = {handleRedClick}>
                    <img src={thumbs_down} alt= "thumbs_down" />
                    </button>
                </div>
            </div>
            
        </div>
        
     );
}
 
export default Post;