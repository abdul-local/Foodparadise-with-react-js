import React from'react'
import CityCard from'./CityCard'

const FeatureCities=(props)=>(
    <div className="row">
          <div className="col-12">
            <h3>{props.title}</h3>
          <div className="row">

            {props.cities==null  ? (
              <div className="col">
                <p>Loading...</p>
              </div>
            ):
              props.cities.map(city=>(
               <CityCard 
               key={city.id}
               city={city}

               />
            
              ))
            }

            </div>
          </div>
      </div>
)
export default FeatureCities;