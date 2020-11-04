import React from'react'
import CityCard from'./CityCard'

const SeacrhResult=(props)=>(
    <div className="row">
          <div className="col-12">
            <h3>{props.title}</h3>
            {
              props.showSubtitle === true && props.subtitle !=='' &&
              <h6 className="text-muted">Search result for keyword '{props.subtitle}'</h6>
            }
          <div className="row">
            { props.cities === null ? (
              <div className="col">
               <p>Tidak ada data yang di serach...</p>
              </div>
            ):(
              renderCityList(props.cities)
            )
            }
            </div>
          </div>
      </div>
)
const renderCityList=(cities)=>{
  if(cities.length > 0){

  return (cities.map(city=><CityCard key={city.id} city={city} /> )  )

  }else {
   return (
        <div className="col">
        <p className="text-danger">Data not found !</p>
       </div>
      
    )
     
  }
}



  


export default SeacrhResult;