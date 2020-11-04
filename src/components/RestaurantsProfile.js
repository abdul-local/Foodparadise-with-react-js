import React from'react'
import LabelRestaurant from '../components/LabelRestaurant'

const RestaurantsProfile=props=>(
    
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col">
                            { props.restaurant ? (
                                <div>
                            <h4 className="text-success" style={{fontWeight:800}}>{props.restaurant.name}</h4>
                            <h6 style={{fontWeight:600}}>{props.restaurant.location.locality_verbose}</h6>
                            <h6 className="text-muted">{props.restaurant.location.address}</h6>
                             </div>
                                ):(
                                    <div>
                                        <p>Loading..</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            { props.restaurant ? (
                            <img className="img-responive" src={props.restaurant.featured_image} alt="" style={{borderRadius:5, width:500}}></img>
                            ):(
                                <p>Loadig ..</p>
                            )
                            }
                            </div>
                        <div className="col-6">
                            { props.restaurant ? (
                            <table className="table">
                                <tbody>
                                <tr>
                                    <td>Rating</td>
                                    <td>
                                    <LabelRestaurant 
                                    rating_color={props.restaurant.user_rating.rating_color}
                                    user_rating={props.restaurant.user_rating.rating_color}
                                    aggregate_rating={props.restaurant.user_rating.aggregate_rating}
                                    rating_text={props.restaurant.user_rating.rating_text}

                                    />
                                   </td>
                                </tr>
                                <tr>
                                    <td>Cuisines</td>
                                    <td>
                                        {props.restaurant.cuisines}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Cost for two</td>
                                    <td>{props.restaurant.currency+' '+props.restaurant.average_cost_for_two}</td>
                                </tr>
                                </tbody>
                            </table>
                            ):(
                                <p>loading...</p>
                            )
                            }
                        </div>
                    </div>
                </div>
            </div>

)
export default RestaurantsProfile;