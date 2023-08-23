import React from 'react'
import axios from 'axios'
const All = () => {
    const [data,setData]=React.useState(localStorage.getItem('token'));
    const [access,setAccess]=React.useState(false);
    React.useEffect(()=>{
        const options = {
            method: "GET",
            url: "http://localhost:8080/user/all2",
            params: { token: data },
            headers: {"Authorization" : `Bearer ${data}`},
          };
          axios
            .request(options)
            .then((response) => {
              console.log(response);
              if(response.data){
                setAccess(response.data);
                }
            })
            .catch((error) => {
              console.error(error);
            });
        },[]);
  return (
    <div>{access?<>All</>:<>No access to all</>}</div>
  )
}

export default All