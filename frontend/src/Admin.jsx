import React from 'react'
import axios from 'axios'
const Admin = () => {
    const [data,setData]=React.useState(localStorage.getItem('token'));
    const [total,settotal]=React.useState(null);
    const [access,setAccess]=React.useState(false);

    const change=async(user,access1,access2,access3)=>{
        console.log(user,access1,access2,access3);
        const options = {
            method: "POST",
            url: "http://localhost:8080/user/updateaccess",
            params: { token: data },
            headers: {"Authorization" : `Bearer ${data}`},
            data: {user,access1,access2,access3}
          };
          await axios
            .request(options)
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.error(error);
            });
            window.location.reload();
          }

    React.useEffect(()=>{
        const options = {
            method: "GET",
            url: "http://localhost:8080/user/admin3",
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

        React.useEffect(()=>{
            if(access){
                const options = {
                    method: "GET",
                    url: "http://localhost:8080/user/getall",
                    params: { token: data },
                    headers: {"Authorization" : `Bearer ${data}`},
                  };
                  axios
                    .request(options)
                    .then((response) => {
                      console.log(response);
                        if(response.data){
                            console.log(response.data)
                            settotal(response.data);
                        }
                    })
                    .catch((error) => {
                      console.error(error);
                    });
            }
        },[access]);

  return (
    <div>{access?<>
        Admin
        {total?total.map((item,index)=>{
            return(
                <div key={index}>
                    <p>{item.user}</p>
                    <label>
                      Fee access:
                      <select name="selectedFruit" value={item.access1.toString()}
                       onChange={()=>{change(item.user,!item.access1,item.access2,item.access3)}}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </select>
                    </label>
                    <label>
                      All access:
                      <select name="selectedFruit" value={item.access2.toString()}
                       onChange={()=>{change(item.user,item.access1,!item.access2,item.access3)}}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </select>
                    </label>
                    <label>
                      Admin access:
                      <select name="selectedFruit" value={item.access3.toString()} 
                       onChange={()=>{change(item.user,item.access1,item.access2,!item.access3)}}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </select>
                    </label>
                </div>
            )}):<></>
        }
        </>:<>No access to admin</>}</div>
  )
}

export default Admin