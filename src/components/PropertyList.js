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

        <POPOSSpace 
          price="$1,399,000"
          address="125 Cerritos Ave, San Francisco, CA 94127"
          image="https://photos.zillowstatic.com/fp/a4c3196252494465d7f7d77396261c09-cc_ft_1536.webp"
          description = " 3 bd | 3 ba | 2,907 sqft"/>

        <POPOSSpace
         price="$799,000"
         address="332 Jules Ave, San Francisco, CA 94112"
         image="https://photos.zillowstatic.com/fp/74c10a3c31739836926d4ad3e9d99407-cc_ft_1536.webp"
         description = " 3 bd | 2 ba | 810 sqft"/>

        <POPOSSpace
         price="$849,000"
         address="1447 Quesada Ave, San Francisco, CA 94124"
         image="https://photos.zillowstatic.com/fp/d284e291723e0c5286e9aebe9ecc3cb5-cc_ft_1536.webp"
         description = " 2 bd |  1 ba | 1,075 sqft"/>

        <POPOSSpace
         price="$3,150,000"
         address="4064 17th St, San Francisco, CA 94114"
         image="https://photos.zillowstatic.com/fp/04b2dcedf308512526022b42dc0dc0d6-cc_ft_1536.webp"
         description = "4 bd | 4 ba | 3,038 sqft"/>
      </div>
    )
  }
  
  export default POPOSList