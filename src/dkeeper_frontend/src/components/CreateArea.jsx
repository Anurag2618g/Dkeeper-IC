import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {

  const [state, setState] = useState(false);
  function handle() {
    setState(true);
  }

  const [item, setItem] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const {name, value} = event.target;
    setItem( (prev) => {
      return {
        ...prev,
        [name]: value
      }
    }); 
  }

  function submit(event) {
    event.preventDefault();
    props.onSave(item);
    setItem({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form className="create-note">
        {state &&  <input 
          onChange={handleChange} 
          name="title" placeholder="Title" 
          value={item.title} />}
        
        <textarea 
          onClick={handle}
          onChange={handleChange} 
          name="content" placeholder="Take a note..." rows={state? 3 : 1}
          value={item.content} />
        <Zoom in={state}>
        <Fab onClick={submit} ><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;