document.getElementById("editform").addEventListener("click", makeeditrequest);
document.getElementById("passwordsub").addEventListener("click",makepasswordrequest );


async function profileedit() {
    let id=window.localStorage.getItem('id')
let param="http://127.0.0.1:8000/api/users/"+id+"/"
console.log(param)
try {
console.log("Button Clicked")
const res = await axios.get(param)
console.log(res)
console.log(res.data)


document.getElementById("uname").value = res.data.username;
document.getElementById("ffname").value = res.data.first_name;
document.getElementById("llname").value = res.data.last_name;
document.getElementById("emaill").value = res.data.email;

window.localStorage.setItem('pass', JSON.stringify(res.data.password));
      



} catch (error) {
console.log(error)
}
}


async function makeeditrequest(e) {
    e.preventDefault()
    let username = document.getElementById("uname").value
    let email = document.getElementById("emaill").value
    let first_name = document.getElementById("ffname").value
    let last_name = document.getElementById("llname").value
    let pass = window.localStorage.getItem("pass")
    let password = JSON.parse(pass)
    let id=window.localStorage.getItem("id")
    let param="http://127.0.0.1:8000/api/users/"+id+"/"
    console.log(username,email,first_name,last_name,password,id,param)
    try {


     console.log("Button Click working")
     const config = {
      method: 'PUT',
      url: param,
      headers : {
           

       'Content-Type': 'application/json'
      },
      data: JSON.stringify({ id:id,username: username,password:password, email: email,first_name :first_name,last_name : last_name})
     }
     const res = await axios(config)
     
     document.getElementById('profeditmes').style.color = 'green';
     document.getElementById('profeditmes').innerHTML =  '<div class="inner"><br><br> The Profile has been Edited successfully!!!</div>';
     
     console.log(res.data)
     
    } catch (error) {
     console.log(error)

     if(error.response.status===400){
      

      document.getElementById('profeditmes').style.color = 'red';
      document.getElementById('profeditmes').innerHTML =  '<div class="wronginner"> Username already exist!!!</div>';
      
    
   }

    }
}


async function profileget() {
    let id=window.localStorage.getItem('id')
let param="http://127.0.0.1:8000/api/users/"+id+"/"
console.log(param)
try {
console.log("Button Clicked")
const res = await axios.get(param)
console.log(res)
console.log(res.data)
  document.getElementById("prof").innerText = res.data.username
  document.getElementById("showemail").innerText = res.data.email
  document.getElementById("showfirstname").innerText =res.data.first_name;
  document.getElementById("showlastname").innerText = res.data.last_name



} catch (error) {
console.log(error)
}
}

async function makepasswordrequest(e) {
    e.preventDefault()
    let password = document.getElementById("password9").value
    let  password2= document.getElementById("password8").value
    let old_password = document.getElementById("password10").value
    let token=window.localStorage.getItem("token")
    token=JSON.parse(token)
    let id=window.localStorage.getItem("id")
    let param="http://127.0.0.1:8000/change_password/"+id+"/"
    
    try {


     console.log("Button Click working")
     const config = {
      method: 'PUT',
      url: param,
      headers : {
        'Authorization': `token ${token}`,
           'Content-Type': 'application/json'
      },
      data: JSON.stringify({ password:password,password2:password2,old_password:old_password})
     }
     const res = await axios(config)
     //alert('Password changed sucessfully!!!')
     document.getElementById('passmess').style.color = 'green';
        document.getElementById('passmess').innerHTML =  '<div class="inner"><br><br> The Password has been changed successfully!!!</div>';
     console.log(res.data)
     
    } catch (error) {
     console.log(error.response.status)


     if(error.response.status===400){
      

        document.getElementById('passmess').style.color = 'red';
        document.getElementById('passmess').innerHTML =  '<div class="wronginner"> please try again!!!</div>';
        
      
     }
     

    }
}

async function makemyrequesttt() {

    let id=window.localStorage.getItem('id')
    let param="http://127.0.0.1:8000/api/users/"+id+"/"
    console.log(param)
         try {
          console.log("Button Clicked")
          const res = await axios.get(param)
          console.log(res)
          console.log(res.data)
        //   window.localStorage.setItem('username', JSON.stringify(res.data.username));
        //   window.localStorage.setItem('email', JSON.stringify(res.data.));
        //   window.localStorage.setItem('username', JSON.stringify(res.data.username));
        //   window.localStorage.setItem('username', JSON.stringify(res.data.username));
        //   window.localStorage.setItem('username', JSON.stringify(res.data.username));
           
          
    
          document.getElementById('wellcome').innerHTML = '<a > WELCOME</a>';
    
          document.getElementById('user').innerHTML = res.data.username; 
          
          
            
         
          
         // document.getElementById('llog').style.color = 'white';
          //document.getElementById('llog').innerHTML ='<br><i onClick="profilebtn()" class="llogg span113 far fa-user-circle fa-2x"></i>';
    
          //document.getElementById('setting').innerHTML = '<button onClick="logoutbtn()"type="button">logout</button>';
          
          //document.getElementById('setting').innerHTML = "<select> <option href='/' value='volvo'>Volvo</option>    <option value='saab'>Saab</option> <option value='mercedes'>Mercedes</option> <option value='audi'>Audi</option> </select>";
         
    
        //   document.getElementById("divdata1").innerText = res.data.name
        //   document.getElementById("divdata2").innerText = res.data.roll
         } catch (error) {
          console.log(error)
         }
        }



    

