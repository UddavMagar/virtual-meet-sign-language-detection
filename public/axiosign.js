



document.getElementById("formm").addEventListener("click", makerequest);

document.getElementById("logform").addEventListener("click", makeloginrequest);
//document.getElementById("hellojoin").addEventListener("click",joinmeetlog );
async function makerequest(e) {
     e.preventDefault()
     let username = document.getElementById("username").value
     let email = document.getElementById("email").value
     let password = document.getElementById("password").value
     let first_name = document.getElementById("first_name").value
     let last_name = document.getElementById("last_name").value
     let userregister=false




     
     
     
     try {


      console.log("Button Click working")
      const config = {
       method: 'POST',
       url: 'http://127.0.0.1:8000/api/users/',
       headers : {
            
    
       
        'Content-Type': 'application/json'
       },
       data: JSON.stringify({ username: username, email: email, password:password,first_name:first_name,last_name:last_name})
      }
      const res = await axios(config)
      userregister=true
      
      console.log(res.data)
     } catch (error) {

      if(error.response.status===400){
        
      
         document.getElementById('mess').style.color = 'red';
         document.getElementById('mess').innerHTML =  '<div class="usersignupinner">Username or email already exist!!!</div>';
         
        }     
      console.log(error)
     }

     try {

        
      console.log("Button Click working")
      const config = {
       method: 'POST',
       url: 'http://127.0.0.1:8000/gettoken/',
       headers : {
            
    
       
        'Content-Type': 'application/json'
       },
       data: JSON.stringify({ username: username,  password:password})
      }
      const res = await axios(config)
      console.log(res.data)
      
      
     } catch (error) {
      console.log(error)
      
  }
  if(userregister==true){
   alert('register successfull!!!')

   window.location.href="http://localhost:3030/"
  }
    
   }





//login

async function makeloginrequest(e) {
     e.preventDefault()
     let username = document.getElementById("username1").value
     
     let password = document.getElementById("password2").value
     
     console.log(username,password)
     try {


      console.log("Button Click working")
      const config = {
       method: 'POST',
       url: 'http://127.0.0.1:8000/user-login/',
       headers : {
            
    
       
        'Content-Type': 'application/json'
       },
       data: JSON.stringify({ username : username,  password : password})
      }
      const res = await axios(config)
      console.log(res.data)
      window.localStorage.setItem('id', JSON.stringify(res.data.id));
      window.localStorage.setItem('token', JSON.stringify(res.data.token));
      
      location.replace("/home2");
     
     
     
     //document.getElementById('wellcome').style.color = 'green';
    
     //html= `<br><i class="far fa-user-circle"></i>`;
     //user.innerHTML=html

     
     
      
     } catch (error) {
      console.log(error)
     
     if(error.response.status===404){
      passwordcheckk ();

        document.getElementById('userr').style.color = 'red';
        document.getElementById('userr').innerHTML =  '<div class=" usersigninner "><br><br>Username or password does not exist!!!</div>';
        
      
     }
     
    

    //  document.getElementById('user').style.color = 'green';
    //  document.getElementById('user').innerHTML =  username;
    //  console.log(username)

}
}





   






