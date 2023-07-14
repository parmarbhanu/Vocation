import React, { Component } from 'react'

export default class Homeresources extends Component {
    constructor(){
        super();
        this.state={
          error:null,
          data:[]
        };
      }
      componentDidMount() {
        fetch("/getresources")
          .then(res => res.json())
          .then(
            (ans) => {
              this.setState({
                data:ans
              });
            },
            (error) => {
              this.setState({
                error
              });
            }
          )
      }
    
   
    
    render() {


        const { error,data } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        }
         else {
          return (
<div>
            {data.slice(0, 2).map(data=>(
                <div class="card text-center my-3" key={data.name}>
                  <div class="card-header">
                  <div class="container">
                  <div class="row">
                    <div class="col">
                      <div className='row'>
                <div className='col'>
                <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/user-avatar/33.svg" alt="avatar" width="30" height="24"/>       
                </div>
                <div className='col'>
                  <h6>{data.username}</h6>
                </div>
                      </div>
                      
                    </div>
                    <div class="col mx-4">
                    </div>
                    <div class="col">
                      <div className='row'>
                        <div className='col'>
                        <h6>Tags:</h6>
                        </div>
                        <div className='col'>
                        <div class="badge bg-secondary">
                          {data.tag}
                      </div>          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                  </div>
                  <div class="card-body">
                  <a href={data.implink} ><h5 class="card-title">{data.heading}</h5></a>
                    <p class="card-text">{data.content}</p>
                    {/* <a href={data.implink} class="btn btn-primary">Link</a> */}
                  </div>
                </div>
                ))}
</div>                
        )
  }
}

 }
