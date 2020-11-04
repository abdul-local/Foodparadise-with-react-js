import React from 'react'

const KeywordSearch=props=>(
  
     <div>
         <h5>keyword</h5>
            <div className="card">
                 <div className="card-body">
                    <div className="form-row">
                        <div className="col-10">
                         <input type="text" className="form-control" 
                         placeholder="Tyepe is keyword"
                         onChange={(event)=>props.onchangeHaddler(event)} value={props.keyword} />
                        </div>
                      <div className="col-2">
                        <button className="btn btn-primary" onClick={props.addtocriteria}>Add Categories</button>
                        </div>
                 </div>
             </div>
         </div>
                   
         </div>
   
    
)
export default KeywordSearch;