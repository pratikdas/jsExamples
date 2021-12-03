

function LoginForm(props){
   return (
       <div>
              <form action="/action_page.php">
                    <div class="row">
 
                        <div class="col">
                            <a href="https://www.strava.com/oauth/authorize?client_id=74812&redirect_uri=http://localhost:8080/index.html&response_type=code&scope=activity:read,activity:read_all" >
                            <i ></i> Login with Strava
                            </a>
                            
                        </div>

                        <div class="col">
                            <div class="hide-md-lg">
                               <p>Or sign in manually:</p>
                            </div>
                            
                            <div>
                                <input type="text" name="username" placeholder="Username" required />
                                <input type="password" name="password" placeholder="Password" required />
                                <input type="submit" value="Login" />
                            </div>
                        </div>

                    </div>
                </form>
       </div>    
   );
}
ReactDOM.render(
   <div>
       <LoginForm />
   </div>,
   document.getElementById("root")

);