import React from 'react'
import Front from './Front';
import Homejobs from './Homejobs';
import Homeresources from './Homeresources';
import './Hellow.css'

export default function Home() {
  return (
   <div>
   <h1 style={{paddingRight:"60%",marginTop:"15px"}}>Welcome </h1>
    <Front/>
   
<br/>
<br/>
<br/>
<div className='container'>

<div class="alert alert-warning my-2 mx-4">
  <h2><img src='https://img.icons8.com/external-flat-02-chattapat-/344/external-resources-business-management-flat-02-chattapat-.png' width={"50"} /> Some Resources</h2>
</div>
{/* resources */}
<Homeresources/>
<a href='/resources' style={{paddingLeft:"70%"}}>more.....</a>
<br/>
<br/>



<div class="alert alert-danger my-2 mx-4">
  <h2><img src='https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-jobs-job-search-flaticons-lineal-color-flat-icons-10.png' width={"50"} />Some Jobs</h2>
</div>

{/* jobs */}
<Homejobs/>

<a href='/jobs' style={{paddingLeft:"70%"}}>More.....</a>
<br/>
<br/>
<br/>

</div>

    </div>
  )
}
