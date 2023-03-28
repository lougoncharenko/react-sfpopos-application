import { useState } from 'react';
import POPOSSpace from "../components/PropertySpace"
import '../styles/PropertyList.css'
import data from '../components/proprty-data.json'
import SearchBar from "../components/searchbar"

function POPOSList() {
  const [inputText, setInputText] = useState("");
  const filteredData = data.filter((d) => {
    if (inputText === '') {
        return d;
    }
    else {
        return d.description.toLowerCase().includes(inputText)
    }
})
  const properties = filteredData.map(( {price, address, image, description} ) => {
    return (
      <POPOSSpace
        price={price}
        address={address}
        image={image}
        description = {description}
      />
    )
  })
    return (
      <section>
        <SearchBar setInputText={setInputText}/>
        <div className="property-container">
          {properties}
        </div>
      </section>
     
    )
  }
  
  export default POPOSList