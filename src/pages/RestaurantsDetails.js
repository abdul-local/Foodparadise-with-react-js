import Axios from 'axios'
import React, { Component, Fragment } from'react'
import {Api} from'../config/api' 
import RestaurantsProfile from'../components/RestaurantsProfile'

import ReviewRestaurant from '../components/ReviewRestaurant'


 class RestauransDetail extends Component {
    constructor(){
        super()
        this.state={
            restaurant:null,
            reviews:null
        }

        
    }
    getDataDetailrestaurants=(restaurant_id)=>{
        var url=`${Api.zomato.baseUrl}/restaurant`
        var payload={
            headers:{
                "user-key":Api.zomato.key_url
            },
            params:{
                res_id:restaurant_id
            }
        }
        Axios.get(url,payload)
        .then(({data})=>{
            console.log(data)
            let restaurant=data;

            this.setState({restaurant:restaurant})

        }).catch((err)=>{

            console.log(err);
        })

    }
    getDataReviewRestaurant=(restaurant_id)=>{
        var url=`${Api.zomato.baseUrl}/reviews`
        var payload={
            headers:{
                "user-key":Api.zomato.key_url
            },
            paramas:{
                res_id:restaurant_id
            }
        }
        Axios.get(url,payload)
        .then(({data})=>{
            console.log(data)
            this.setState({reviews:data.user_reviews})

        }).catch((err)=>{
            console.log(err)
        })

    }
    componentDidMount=()=>{
        let {params}=this.props.match
        console.log(params);
        this.getDataDetailrestaurants(params.restaurant_id)
        this.getDataReviewRestaurant(params.restaurant_id)
    }

     render(){

    return(
        <Fragment >

   <div className="container" style={{marginTop:30,marginBottom:30}}>
    <div className="row">
        <div className="col-12" style={{marginBottom:20}}>

        < RestaurantsProfile
   
       restaurant={this.state.restaurant}
   
      />
        </div>
        <ReviewRestaurant 
    reviews={this.state.reviews}

       />

    </div>
   
  
</div>  
   


   
   </Fragment>
   
  
   
    )
     }
    }

export default RestauransDetail;