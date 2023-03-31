import axios from "axios";
import "./style/ajouter_post.css";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useState } from "react"
import MultipleValueTextInput from 'react-multivalue-text-input';

function Ajouter_post() {
    const [selectedValues, setSelectedValues] = useState([]);
    const [items, setItems] = useState([]);

    const handleItemAdded = (item, allItems) => {
      console.log(`Item added: ${item}`);
      if (allItems.length <= 6) {
        setItems(allItems);
      }
    };
    const handleItemDeleted = (item, allItems) => {
      console.log(`Item removed: ${item}`);
      setItems(allItems);
    };

    const handleOnChange = (event, values) => {
      setSelectedValues(values);
      console.log(selectedValues)
    };
  function env(e) {
    e.preventDefault();
    const image = e.target.image.files[0];
    const title = e.target.title.value;
    const desc = e.target.desc.value;
    if (!image || !desc || !title || !items) {
      alert("Veuillez remplir tous les champs du formulaire.");
      return;
    }

    const data = new FormData();
    data.append("image", image);
    data.append("title", title);
    data.append("desc", desc);
    data.append("mot_cle",JSON.stringify(items))
    console.log(data)

    const token = "2|YpNS7IUNjCkxIvvT4Vq5szoG2gzNT1WLeSFQ4Gbh";
    const headers = {
      Authorization: `Bearer ${token}`,
    };
   axios.post("http://127.0.0.1:8000/api/new_post", data, { headers })
    .then((response) => {
      console.log(response.data);
   });
  }

  return (
    <div id="ajouter_post">
      <h1>Ajouter post</h1>
      <form onSubmit={env} encType="multipart/form-data">
       <div id="upload_file_new_post"><input type="file" name="image" /></div>  
        <input type="text" name="title" placeholder="title" className="title_new_post" />
        <input type="text" name="desc" placeholder="desc" className="desc_new_post" />
        <div id="choix_new_post">
        <MultipleValueTextInput 
             onItemAdded={handleItemAdded}
             onItemDeleted={handleItemDeleted}
             name="item-input"
             placeholder="ecrire mot cle est enter"
        />
        </div>
      
        <button type="submit" id="button_post">Upload</button>
      </form>
    </div>
  );
}

export default Ajouter_post;
