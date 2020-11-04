import React from'react'
import {Link} from'react-router-dom'

const RestaurantsCard=props=>(
    <div className="row">
    { props.restaurants.length > 0 ? (

    
        props.restaurants.map(({restaurant},index)=>(
            <div key={index}className="col-6" style={{marginBottom:20}}> 
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-3">
                            <img className="img-responsive" src={restaurant.thumb} alt="gambar" style={{borderRadius:5, width:100}}></img>
                        </div>
                        <div className="col-9">
                            <h4 className="text-success" style={{fontWeight:800}}>{restaurant.name}</h4>
                            <h6>{restaurant.location.locality}</h6>
                            <h6 className="text-muted">{restaurant.location.address}</h6>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Rating</td>
                                    <td><div className="btn btn-sm"
                                    style={{color:'white',backgroundColor:`#${restaurant.user_rating.rating_color}`,
                                    borderColor:`#${restaurant.user_rating.rating_color}`
                                }}>{`${restaurant.user_rating.aggregate_rating} (${restaurant.user_rating.rating_text})`}
                                    </div>
                                </td>
                                </tr>
                                <tr>
                                    <td>Cuisines</td>
                                    <td>{restaurant.cuisines}</td>
                                    <td>{restaurant.currency+' '+restaurant.average_cost_for_two}</td>
                                </tr>
                                <tr>
                                    <td>Cost for two</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="card-footer">
                        <Link to={`/restaurant/${restaurant.id}`} style={{textDecoration:'none'}}>
                            <button type="button" className="btn btn-outline-success btn-block">
                                View Restaurant Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        ))):(
            <div className="col">
                <p>No Data available. Please select criteria, and click Search</p>
            </div>
        )
    }
</div>
)
export default RestaurantsCard;