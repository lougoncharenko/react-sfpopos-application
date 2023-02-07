import '../styles/PropertySpace.css'
function POPOSSpace(props) {
    const { price, image, address, description } = props
    return (
      <div className="PropertySpace">
        <img
          src={image}
          width="300"
          height="300"
          alt = {description}
        />
        <h1>{price}</h1>
        <div>{address}</div>
        <div>{description}</div>
      </div>
    )
  }
  
  
  export default POPOSSpace