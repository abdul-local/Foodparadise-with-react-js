import React, { Fragment } from 'react'

const ChategoriList=props=>(
    <Fragment>
       { props.categories ? (
                        <div className="list-group">
                            {props.categories.map((data)=>(
                                <button type="button"
                                key={data.id}
                                className={'list-group-item list-group-item-action ' + (props.categorySelected && data.id === props.categorySelected.id ? 'active' : '')}
                                onClick={()=>props.onclickdatahandller(data)}
                                >
                                    {data.name}
                                </button>
                            ))}
                        </div>
                    ):<div>
                        <h5 className="text-warning">Loading...</h5>
                    </div>
          }
    </Fragment>
)

export default ChategoriList;