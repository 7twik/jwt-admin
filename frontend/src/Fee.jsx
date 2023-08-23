import React from 'react'
import axios from 'axios'
const Fee = () => {
    const [data,setData]=React.useState(localStorage.getItem('token'));
    const [access,setAccess]=React.useState(false);
    React.useEffect(()=>{
        const options = {
            method: "GET",
            url: "http://localhost:8080/user/fee1",
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
    <div>{access?<>Fee</>:<>No access to fee</>}</div>
  )
}

export default Fee