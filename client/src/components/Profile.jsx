import React from 'react'
import './profile.css'
import Logo from '../login-logo.png';
export default function Profile(props) {
var ccurl='';
var cfurl='';
var leeturl='';
 ccurl="https://www.codechef.com/users/"+props.user.ccusernames    ;
   cfurl="https://codeforces.com/profile/"+props.user.cfusernames;
   leeturl="https://leetcode.com/"+props.user.leetusernames;
 
return (
    <div>
        <div className="container1 d-flex justify-content-center align-items-center">
             
             <div className="card1">

              <div className="upper">

                <img src="https://i.imgur.com/Qtrsrk5.jpg" className="img-fluid"/>
                
              </div>

              <div className="user text-center">

                <div className="profile">

                  <img src="https://static.vecteezy.com/system/resources/previews/004/648/833/non_2x/user-icon-symbol-3d-design-concept-illustration-vector.jpg" className="rounded-circle" width="80"/>
                  
                </div>

              </div>


              <div className="mt-5 text-center">

                <h4 className="mb-0">{props.user.name}</h4>
                <span className="text-muted d-block mb-2"></span>

                <button className="btn btn-primary btn-sm follow">Your Profile</button>
               <div className="d-flex justify-content-between align-items-center mt-4 px-4">

                  <div className="stats">
                    <a className="mb-0" href={ccurl}>
                    <img src="https://img.icons8.com/plasticine/344/codechef.png" className="rounded-circle" width="80"/>
                    </a>
                    <h6>{props.user.ccusernames}</h6>

                  </div>


                  <div className="stats">
                    <a className="mb-0" href={cfurl}>
                    <img src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/344/external-codeforces-programming-competitions-and-contests-programming-community-logo-filled-tal-revivo.png" className="" width="80"/>
                   
                    </a>
                    <h6>{props.user.cfusernames}</h6>

                  </div>


                  <div className="stats">
                    <a className="mb-0" href={leeturl}>
                    <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/344/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo.png" className="rounded-circle" width="80"/>
                    </a>
                    <h6>{props.user.leetusernames}</h6>

                  </div>
                  
                </div>
                
              </div>
               
             </div>

           </div>
    </div>
  )
}
