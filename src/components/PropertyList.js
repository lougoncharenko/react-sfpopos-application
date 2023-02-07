import POPOSSpace from "./PropertySpace"
import '../styles/PropertyList.css'
import data from './proprty-data.json'

function POPOSList() {
  const properties = data.map((obj) => {
    return (
      <POPOSSpace
        price={obj.price}
        address={obj.address}
        image={obj.image}
        description = {obj.description}
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