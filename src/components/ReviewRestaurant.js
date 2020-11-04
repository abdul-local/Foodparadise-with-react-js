import React from'react'
import LabelRestaurant from '../components/LabelRestaurant'

const ReviewRestaurant=props=>(

    <div className="col-12" style={{marginBottom:20}}>
    <div className="card">
        <div className="card-body">
            <h4 className="text-success" style={{fontWeight:800}}>Reviews</h4>
            {
                props.reviews ? (
                    props.reviews.map(({review},index)=>(
                        <div key={index}className="card border-sucess" style={{marginBottom:5}}>
                        <div className="card-body">
                            <div className="row" style={{marginBottom:20}}>
                                <div className="col-1" style={{border:'0px solid black'}}>
                                    <img className="img-responsive" src={review.user.profile_image} alt="" style={{borderRadius:'50%',width:80}}></img>
                                </div>
                                <div className="col-11" style={{border:'0px solid black'}}>
                                    <h6 className="font-weight-bold">{review.user.name}</h6>
                                    <LabelRestaurant 
                                    
                                    rating_color={review.user.foodie_color}
                                     aggregate_rating={review.user.foodie_level_num}
                                    rating_text={review.user.foodie_level}
                    
                                    />
                                </div>
                              
                            </div>
                            <h6 className="card-text text-muted">{review.review_time_friendly}</h6>
                            <LabelRestaurant 
                            rating_color={review.rating_color}
                            aggregate_rating={review.rating}
                             rating_text={review.rating_text}
           
                           
                            />
                            <p className="card-text">{review.review_text}</p>
                        </div>

                      </div>
                    ))
                ):(
                    <p>
                        loading....
                    </p>
                )
            }
            

        </div>

    </div>

   </div>
)

export default ReviewRestaurant;