import React from'react'


const LabelRestaurant =props=>(
    <div className="btn btn-sm"
    style={{color:'white',backgroundColor:`#${props.rating_color}`,
    borderColor:`#${props.user_rating}`
}}>{`${props.aggregate_rating} (${props.rating_text})`}
    </div>

)
export default LabelRestaurant;