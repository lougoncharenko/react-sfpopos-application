import React from "react"
import POPOSSpace from "../components/PropertySpace"
import '../styles/PropertyList.css'
import data from '../components/proprty-data.json'

function POPOSList() {
  const properties = data.map(( {price, address, image, description} ) => {
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
      <div className="property-container">
        {properties}
      </div>
    )
  }
  
  export default POPOSList