import axios from 'axios';
import React, { Component, Fragment } from'react'
import FeatureCities from'../components/FeatureCities'
import SearchCity from'../components/SearchCity'
import SeacrhResult from '../components/SearchResult';
import {Api} from'../config/api'
import ImageAndWelcome from'../pages/ImageAndWelcome'

class Home extends Component{
    constructor(){
        super()
        this.state={
          keyword:'',
          featuredCities:[],
          resultSearch:null,
          keywordSearch:''
        }
      }
    
      onChangeHandller=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    
      }
      getFeatureCities=()=>{
        
        var url=`${Api.zomato.baseUrl}/cities`
        var payload={
          headers:{
            "user-key":`${Api.zomato.key_url}`
          },
          params:{
            city_ids:"74,11052,170"
          }
        }
        axios.get(url,payload)
        .then(({data})=>{
          //  console.log(data)
           if(data.status ==="success"){
             this.setState({featuredCities:data.location_suggestions})
          }
        }).catch(err=>{
          console.log(err);
        })


      }
      getResultSearch=()=>{
       
        let keyword=this.state.keyword;
        var url=`${Api.zomato.baseUrl}/cities`
        var payload={
          headers:{
            "user-key":`${Api.zomato.key_url}`
          },
          params:{
            q:keyword
          }
        }
        axios.get(url,payload)
        .then(({data})=>{
          //  console.log(data)
           if(data.status ==="success"){
             this.setState({resultSearch:data.location_suggestions,
            keyword:'',
            keywordSearch:keyword

            })
            
          }
        }).catch(err=>{
          console.log(err);
        })


      }
      componentDidMount(){
        this.getFeatureCities()
      
       
      }
     

    render(){
        return(
            <Fragment>
            <ImageAndWelcome />
          <div className="container" style={{marginTop:30, marginBottom:30}}>
        <FeatureCities 
        cities={this.state.featuredCities}
        title={'Feature cities'}
        />
        <SearchCity 
        keyword={this.state.keyword}
        onChange={(e)=>this.onChangeHandller(e)}
        onResultSearch={this.getResultSearch}
        
        />
        {
          this.state.keywordSearch !=='' && (
            <SeacrhResult 
            cities={this.state.resultSearch}
            title={'Search Result'}
            showSubtitle={true}
            subtitle={this.state.keywordSearch}
            />
          
          )
        }
       
        
      </div>  
            </Fragment>

        )
    }
}

export default Home;