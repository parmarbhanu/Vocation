import React from 'react'
import './Footer.css';
export default function Footer() {
  return (
    <div className='footerbg'>
    <div className="container">
      <hr/>
      <div className="justify-content-md-center" class="grey">
      <div className="row-cols-5 justify-content-md-center">


        <a className='col col-lg-2 mx-2' href='https://github.com/shyamq'>        
          <img  src='https://img.icons8.com/clouds/344/github.png' width={"10%"} height={"13%"}/>
         </a>
        
        <a className='col-md-auto mx-2' href='https://www.linkedin.com/in/bhanupratap-parmar-46843b203'>
        <img src='https://img.icons8.com/nolan/344/linkedin.png' width={"10%"} height={"13%"} herf='https://www.linkedin.com/in/bhanupratap-parmar-46843b203'/>
       </a>
       
       <a className='col col-lg-2 mx-2' href='mailto:bahadurarnav2203@gmail.com' >
      <img src='https://img.icons8.com/clouds/344/gmail-new.png' width={"10%"} height={"13%"}/>
      </a>


</div>

</div>
<p className="text-center">Copyright @2022 | Designed by <a class="thicker"> Vocation Team</a></p>

</div>
</div>
    )
}