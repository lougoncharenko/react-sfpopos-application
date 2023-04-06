import { useState} from 'react';
import PropertyCard from './PropertyCard';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import data from '../components/proprty-data.json'
import SearchBar from "../components/searchbar"

const theme = createTheme(); 

function PropertyContainer({setPropertyDetail}) {
  const [inputText, setInputText] = useState("");
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
        </AppBar>
        <main>
        <SearchBar setInputText={setInputText}/>
         <PropertyCard data={data} inputText={inputText} setPropertyDetail={setPropertyDetail}/>
        </main>
      </ThemeProvider>
     
    )
  }
  
  export default PropertyContainer