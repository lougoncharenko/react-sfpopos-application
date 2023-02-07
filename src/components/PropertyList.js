import POPOSSpace from "./PropertySpace"
import '../styles/PropertyList.css'

function POPOSList() {
    return (
      <div className="property-container">
         <POPOSSpace
        price="$599,000"
        address="1587 Revere Ave, San Francisco, CA 94124"
        image="https://photos.zillowstatic.com/fp/2341a27da73eb557db28b6a112d34873-cc_ft_1344.webp"
        description = "4 bd | 2 ba | 1,258 sqft"
      />
        <POPOSSpace 
          price="$1,195,000"
          address="826 46th Ave, San Francisco, CA 94121"
          image="https://photos.zillowstatic.com/fp/1c2c009c0e5ef2f6a89f38c9bbf33b0e-cc_ft_1344.webp"
          description = "3 bd | 3 ba | 1,425 sqft"/>

        <POPOSSpace />
        <POPOSSpace />
      </div>
    )
  }
  
  export default POPOSList