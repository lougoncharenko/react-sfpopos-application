import POPOSSpace from "./PropertySpace"
import '../styles/PropertyList.css'
import data from './proprty-data.json'

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