import { React } from "react";
import TextField from "@mui/material/TextField";
import '../styles/searchbar.css'

function SearchBar({setInputText}) {
    let inputHandler = (e) => {
        //convert input text to lower case
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
      };
      return (
        <section className="search-parent">
            <section className="search-child">
            <TextField
              id="outlined-basic"
              onChange={inputHandler}
              variant="outlined"
              fullWidth
              label="Search for property"
            />
            </section>
        </section>
       
      );
}

export default SearchBar