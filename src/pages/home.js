import React from 'react';
import PropertyContainer from '../components/PropertyContainer';


function Home({setPropertyDetail}) {

    return (
      <section>
        <PropertyContainer setPropertyDetail={setPropertyDetail}/>
      </section>
     
    )
  }
  
  export default Home