


function logoutUser(){
    localStorage.removeItem("access-token");
    localStorage.removeItem("user");

    const requestOptions = {
        method: 'POST'
      };
    
      fetch('https://www.strava.com/oauth/deauthorize?access_token='+localStorage.getItem('access-token'), requestOptions)
      .then(response => response.json())
      .then(data => 
            {
          //this.setState({ postId: data.id })
               var activitiesAsJson = JSON.parse(JSON.stringify(data));
               console.log(activitiesAsJson);
               
            }
          );
}
function fetchAndSendActivities(){
  alert('fetch and send');

  const requestOptions = {
    method: 'GET',
    headers: { 'Authorization': 'Bearer '+ localStorage.getItem('access-token')}
  };

  fetch('https://www.strava.com/api/v3/athlete/activities', requestOptions)
  .then(response => response.json())
  .then(data => 
        {
      //this.setState({ postId: data.id })
           var activitiesAsJson = JSON.parse(JSON.stringify(data));
           console.log(activitiesAsJson);
           ReactDOM.render(
               
               <div>
                   <table>
                       {
                           activitiesAsJson.map(
                               activityJson => (
                                    <tr>
                                        <td>{activityJson.name}</td>    
                                        <td>{activityJson.distance}</td>  
                                        <td>{activityJson.type}</td>    
                                    </tr>  
                               )
                           )
                       }
                         
                   </table>    
               </div>,
               document.getElementById("root")
           );
        }
      );
 }

function Activities(props){
   return (
       <div>
              <h1>My Activities</h1>
              <button onClick={fetchAndSendActivities} >Click to participate</button>
              <button onClick={logoutUser} >Logout</button>
       </div>    
   );
}

function fetchAccessToken() {
    var url = window.location;
    var code = new URLSearchParams(url.search).get('code');
    alert(code);
    // Simple PUT request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
            { 
                client_id: '74812' ,
                client_secret: '2c9087bb8ee2dfc9f16e165c102024d41f1685e9',
                code : code,
                grant_type: 'authorization_code'
    
            }
        )
    };
    fetch('https://www.strava.com/api/v3/oauth/token', requestOptions)
        .then(response => response.json())
        .then(data => 
              {
                var userAsJson = JSON.parse(JSON.stringify(data));
                localStorage.setItem('user', userAsJson);
                localStorage.setItem('access-token', userAsJson.access_token);
                console.log(userAsJson.access_token);
              }
            );
}


fetchAccessToken();

ReactDOM.render(
   <div>
       <Activities />
   </div>,
   document.getElementById("root")

);