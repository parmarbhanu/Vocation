import React, { Component } from 'react'
import axios from 'axios';
export default class Contest extends Component {

    constructor(){
        super();
        this.state={
          error:null,
          data:[]
        };
      }
      componentDidMount() {
        fetch("https://kontests.net/api/v1/all")
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
      var one=0;
      var one1=0;
      var one2=0;
      var one3=0;
      var one4=0;
      return (

<div className='container my-4'>


 <div className="card mb-3 col mx-4" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://img.icons8.com/plasticine/344/codechef.png" className="img-fluid rounded-start my-2"  width={"46%"} alt="codechef"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Codechef</h5>
        {data.map(data=>(
       <div  key={data.name}>
        {data.site==="CodeChef"&&((data.name).search("Starters")!==-1||(data.name).search("Cook-Off")!==-1||(data.name).search("Lunchtime ")!==-1)&&one++===0 ? 
        <div>
<div className="card-text">
            <div className="alert alert-warning mx-4" 
            role="alert">
            {data.name}
          </div>
          </div>
        <div className="card-text row">
          
 <div className="alert alert-dark col mx-4" role="alert">
  Start From: {data.start_time}
</div>
<a href={data.url} className="alert alert-primary col mx-4" role="alert">
 <h4>Link</h4>
</a>


</div>
        </div>
:<></>}
</div>
        ))}
      </div>
    </div>
  </div>
</div>


<div className="card mb-3 mx-4 ">

  <div className="row g-0">
 
    <div className="col-md-4">
      <img src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/344/external-codeforces-programming-competitions-and-contests-programming-community-logo-filled-tal-revivo.png" className="img-fluid rounded-start my-2"  width={"46%"} alt="codeforces"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Codeforce</h5>
       
        {data.map(data=>(
          <div key={data.name}>
        {data.site==="CodeForces"&&one1++===0 ? 
        <div>
<div className="card-text">
            <div className="alert alert-warning mx-4" 
            role="alert">
            {data.name}
          </div>
          </div>
        <div className="card-text row">
          
 <div className="alert alert-dark col mx-4" role="alert">
  Start From: {data.start_time}
</div>
<a href={data.url} className="alert alert-primary col mx-4" role="alert">
 <h4>Link</h4>
</a>


</div>
        </div>

:<></>}
</div>
        ))}

      </div>
    </div>
  </div>
</div>

{/* <h6 style={{color:"white"}}>{one=0}</h6> */}

  <div className="card mb-3 mx-4" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/344/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-filled-tal-revivo.png" className="img-fluid rounded-start my-2"  width={"46%"} alt="leetcode"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Leetcode</h5>
       

        {data.map(data=>(
          <div key={data.name}>
        {data.site==="LeetCode"&&one2++===0 ? 
        <div>
<div className="card-text">
            <div className="alert alert-warning mx-4" 
            role="alert">
            {data.name}
          </div>
          </div>
        <div className="card-text row">
          
 <div className="alert alert-dark col mx-4" role="alert">
  Start From: {data.start_time}
</div>
<a href={data.url} className="alert alert-primary col mx-4" role="alert">
 <h4>Link</h4>
</a>


</div>
        </div>
:<></>}
</div>
        ))}



       
      </div>
    </div>
  </div>
</div>
 
 {/* <h6 style={{color:"white"}}>{one=0}</h6> */}

<div className="card mb-3 mx-4 " >
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/344/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-shadow-tal-revivo.png" alt="Hackerank" className="img-fluid rounded-start my-2"  width={"46%"}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Hackerank</h5>
       
        {data.map(data=>(
          <div key={data.name}>
        {data.site==="HackerRank"&&one3++===0 ? 
<div>
<div className="card-text">
            <div className="alert alert-warning mx-4" 
            role="alert">
            {data.name}
          </div>
          </div>
        <div className="card-text row">
          
 <div className="alert alert-dark col mx-4" role="alert">
  Start From: {data.start_time}
</div>
<a href={data.url} className="alert alert-primary col mx-4" role="alert">
 <h4>Link</h4>
</a>


</div>
        </div>
:<></>}
</div>
        ))}


      </div>
    </div>
  </div>
</div>

<h6 style={{color:"white"}}>{one=0}</h6>

  <div className="card mb-3 mx-4">
  <div className="row g-0">
    <div className="col-md-4 my-2">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/HackerEarth_logo.png/800px-HackerEarth_logo.png" className="img-fluid rounded-startmy-2"  width={"46%"} alt="Hackerearth"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Hackerearth</h5>
        
        {data.map(data=>(
          <div key={data.name}>
        {data.site==="HackerEarth"&&one4++===0 ? 
        <div>
<div className="card-text">
            <div className="alert alert-warning mx-4" 
            role="alert">
            {data.name}
          </div>
          </div>
        <div className="card-text row">
          
 <div className="alert alert-dark col mx-4" role="alert">
  Start From: {data.start_time}
</div>
<a href={data.url} className="alert alert-primary col mx-4" role="alert">
 <h4>Link</h4>
</a>


</div>
        </div>
:<></>}
</div>
        ))}

      </div>
    </div>
  </div>
</div>

 </div>

    )
       }
      }
}

