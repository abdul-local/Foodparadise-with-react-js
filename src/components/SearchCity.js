import React from'react'


const SearchCity=(props)=>(

    <div className="row" style={{marginBottom:30}}>
          <div className="col">
            <h3>Search City</h3>
            <div className="card">
              <div className="card-body">
                <div className="form-row">
                <div className="col-11">
                <input className="form-control"
                 type="text" 
                 name="keyword"
                 value={props.keyword} 
                 onChange={props.onChange}
                 placeholder="Type keyword or City" />
                </div>
                <div className="col-1">
                  <button type="button" className="btn btn-primary"  onClick={props.onResultSearch} >
                    Search
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
)

export default SearchCity;