// // import React, {  useEffect, useState } from 'react'

// // export default function Leaderboard(props) {
// //   const[name,setname]=useState("");

// //   const adduser=()=>{
// //     console.log(props.user.cfusernames)
// //     recallapi()
// //     console.log(data);
// //   }
   
// //   const recallapi=()=>{

// //     setname('')

// //     let url="https://codeforces.com/api/user.info?handles="
// //   url=url+props.user.cfusernames
// //   console.log(url);
// //   fetch(url)
// //   .then(res => res.json())
// //   .then(
// //     (ans) => {
// //       // setData(ans.result);
// //       let sortedProducts = ans.result;
// //       sortedProducts.sort((a, b) => {
// //         if(a.maxRating&&!b.maxRating){
// //           return -1;
// //          }
// //          else if(!a.maxRating&&b.maxRating){
// //           return 1;
// //          }
// //            else if (a.maxRating > b.maxRating) {
// //             return -1;
// //           }
// //           else if (a.maxRating < b.maxRating) {
// //             return 1;
// //           }
// //           return 0;
// //     });
// //     setData(sortedProducts);

// //     },
// //     (error) => {
// //       setError(error);
// //     }
// //   )

// // }
// //   const inputevent=(e)=>{
// //     setname(e.target.value);
// //   }


// //   var i=1;    
// //   const [error, setError] = useState(null);
// //   const [data, setData] = useState([]);
// //   useEffect(() => {
// //   let url="https://codeforces.com/api/user.info?handles="
// //        url=url+props.user.cfusernames;
// // console.log(url);
// //        fetch(url)
// //       .then(res => res.json())
// //       .then(
// //         (ans) => {
// //           // setData(ans.result);
// //           let sortedProducts = ans.result;
// //           sortedProducts.sort((a, b) => {
// //          if(a.maxRating&&!b.maxRating){
// //           return -1;
// //          }
// //          else if(!a.maxRating&&b.maxRating){
// //           return 1;
// //          }
// //            else if (a.maxRating > b.maxRating) {
// //             return -1;
// //           }
// //           else if (a.maxRating < b.maxRating) {
// //             return 1;
// //           }
// //           return 0;
// //         });
// //         setData(sortedProducts);

// //         },
// //         (error) => {
// //           setError(error);
// //         }
        
// //       )
// //       },[])



// //   return (
// //     <>
// //       <div class="container mt-5 px-2">
// //     <h4>Codeforces Leaderboard</h4>
// //     <div class="mb-2 d-flex justify-content-between align-items-center">
        
// //         <div class="position-relative">
// //             <span class="position-absolute search"><i class="fa fa-search"></i></span>
// //             <input class="form-control w-100" placeholder="" onChange={inputevent} value={name} />
// //         </div>
        
// //         <div class="px-2">
// //         <span> <button type="submit"  value="Submit" className="btn btn-secondary" onClick={adduser}>Add Username</button>
// //             <i class="fa fa-angle-down"></i></span>
// //             <i class="fa fa-ellipsis-h ms-3"></i>
// //         </div>
        
// //     </div>
// //     <div class="table-responsive">
// //     <table class="table table-responsive table-borderless">
        
// //       <thead>
// //         <tr class="bg-light">
// //           {/* <th scope="col" width="5%"><input class="form-check-input" type="checkbox"/></th> */}
// //           <th scope="col" width="5%">S_no.</th>
// //           <th scope="col" width="10%">Status</th>
// //           <th scope="col" width="20%">UserName</th>
// //           <th scope="col" width="20%">Name</th>
// //           <th scope="col"  width="20%">Rating</th>
// //           <th scope="col" width="20%">Max-Rating</th>

// //         </tr>
// //       </thead>
// //   <tbody>


// // {data.map((item)=>(
// //  <tr key={data.handle}>
// //       <th scope="row">{i++}</th>
// //       <td>{item.handle}</td>
// //       {/* <td>1 Oct, 21</td> */}
// //       <td>{item.maxRank ? item.maxRank :"No Rank"}</td>
// //       <td><img src={item.avatar} className="rounded-circle" width="25"/> {item.firstName} {item.lastName}</td>
// //       <td>{item.rating ? item.rating :0}</td>
// //       <td>{item.maxRating ? item.maxRating :0}</td>
// //     </tr>
// //        )
// // )}

// //   </tbody>
// // </table>
  
// //   </div>
    
// // </div>
// //     {/* <button className="btn btn-secondary" onClick={()=>recallapi()}><i className="fa fa-refresh"> Refresh</i></button> */}
// // <br/>
// // <br/>
 
// //     </>
// //   )

// // }

// import React from 'react'

// export default function Leaderboard() {
//   return (
//     <div>Leaderboard</div>
//   )
// }
