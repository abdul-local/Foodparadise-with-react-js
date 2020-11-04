import Axios from 'axios'
import React,{Component} from'react'
import {Api} from'../config/api'
import ChategoriList from'../components/ChategoriList';
import KeywordSearch from'../components/KeywordSearch'
import SearchCriteria from'../components/SearchCriteria';
import RestaurantsCard from '../components/RestaurantsCard';

class City extends Component{

    constructor(){
        super()
        this.state={
            city:[],
            categories:[],
            selectCategory:[],
            keyword:'',
            criteria:[],
            restaurants:[]
        }
    }

    SearchRestaurant=()=>{
        this.setState({restaurant:null})
        let url=`${Api.zomato.baseUrl}/search`
     
        let params={}
        for (let cri of this.state.criteria) {
            switch (cri.nameCriteria) {
                case 'City':
                    params.entity_id=cri.data.id
                    params.entity_type='city'
                    break;
                case 'Category':
                    params.category=cri.data.id
                    break;
                case'keyword':
                   params.q=cri.data.name
            
                default:
                    break;
            }
        }
        Axios.get(url,{
            headers:{
                "user-key":Api.zomato.key_url
            },
            params
        })
        .then(({data})=>{
            // console.log(data)
            this.setState({restaurants:data.restaurants})
        })
        .catch((err)=>{
            console.log(err)
        })

    }

// untuk ambil data dari dammy
transformCategoriesData(categories) {
    let categoriesTransformed = categories.map(category => { 
      return category.categories
    })

    return categoriesTransformed
}

componentDidMount=()=>{
    let {id_city}=this.props.match.params;
    // console.log(this.props.match);
    this.getdataCity(id_city)
 
   // proses transform data categories
  let categories = this.getCategoriesData();
//   console.log(categories)
  this.setState({ categories })
   


}
getCategoriesData=()=>{
    var url=`${Api.zomato.baseUrl}/categories`;
    var payload={
        headers:{
            'user-key':Api.zomato.key_url
        }
    }
    Axios.get(url,payload)
    .then(({data})=>{

        //  console.log(data.categories)

        let categories=this.transformCategoriesData(data.categories)

        this.setState({categories:categories})
    })
    .catch((err)=>{
        console.log(err);
    })
}

// get data city berdasarkan id

getdataCity=(id_city)=>{

    var url=`${Api.zomato.baseUrl}/cities`
    var payload={
        headers:{
            'user-key':`${Api.zomato.key_url}`
        },
        params:{
            city_ids:`${id_city}`
        }
    }
    Axios.get(url,payload)
    .then(({data})=>{
        // console.log(data)
        if(data.status ==="success"){
            let city=data.location_suggestions[0];
            let newCriteria={
                nameCriteria:'City',
                data:city
            }
            let criteria=[...this.state.criteria]
            criteria.push(newCriteria);
            this.setState({city,criteria})
        }
    })
    .catch((err)=>{
        
        console.log(err);
    })

 }
 // ketika di kelik data di kategory
 onclickdatahandller=(data)=>{
    // const isi= data.name;
    // console.log(isi);
  
    let criteria=[...this.state.criteria];

     criteria=criteria.filter(cri=>cri.nameCriteria !=='Category')
    let newCriteria={
        nameCriteria:'Category',
        data:data
            
        
    }
   
    
      criteria.push(newCriteria)
      
     this.setState({selectCategory:data,criteria:criteria})
     
 }
 onchangeHaddler=(event)=>{
    
      this.setState({keyword:event.target.value})
     
 }
 addhadnlercriteria=()=>{
    
     let criteria=[...this.state.criteria];
     criteria.filter(cri=>cri.nameCriteria !=='keyword')
     let newCriteri={
         nameCriteria:'keyword',
         data: { name:this.state.keyword
            }
     }
     criteria.push(newCriteri)
     this.setState({keyword:'',criteria})
 }
 removeindexhandler=index=>{
     let criteria=[...this.state.criteria];
     criteria.splice(index,1)
     this.setState({criteria})
 }

 
    render(){
        return (
            <div className="container-fluid" style={{marginBottom:30,marginTop:30}}>
            <div className="row">
            <div className="col">
                <h4 className="text-success">
                    Restaurant in {this.state.city.name}, Country in {this.state.city.country_name}
                </h4>
            </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <h5>Categories</h5>
                    <ChategoriList
                    categories={this.state.categories}
                    categorySelected={this.state.selectCategory}
                    onclickdatahandller={(data)=>this.onclickdatahandller(data)}
                    />
    
                </div>
                <div className="col">
                <KeywordSearch 
                addtocriteria={this.addhadnlercriteria}
                onchangeHaddler={(event)=>this.onchangeHaddler(event)}
                keyword={this.state.keyword}
                
                />
                <SearchCriteria 
                criteria={this.state.criteria}
                Searchkeyword={this.SearchRestaurant}
                removeindexhandler={(index)=>this.removeindexhandler(index)}
                
                />
                <div className="row">
                    <div className="col" style={{marginBottom:10}}>
                        <h4 className="text-success">Reastaurant List</h4>
                    </div>
                </div>
               <RestaurantsCard 
               restaurants={this.state.restaurants}
               
            
               
               />
                </div>
                   
            </div>
            </div>
            
        )
    }

}
export default City;