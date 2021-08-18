//document.getElementById("#eyes").addEventListener("click", eyee);

//var passwordcheck =function () {

function passwordcheck(){
    var b = document.getElementById('password1').value ;
    var c = document.getElementById('username').value ;
    var d = document.getElementById('email').value ;
    var a = document.getElementById('password').value ;
    if(c==a){
      document.getElementById('message1').style.color = 'red';
        document.getElementById('message1').innerHTML = 'Username and Password is same';
        return false;
    }
  
    
    if(a.length<5){
        document.getElementById('message1').style.color = 'red';
        document.getElementById('message1').innerHTML = 'Password is too short * Must be atleast 5 characters *';
        document.getElementById('mess').innerHTML =  '';
        return false;

    }
    else if(a.length>=25){
        document.getElementById('message1').style.color = 'red ';
        document.getElementById('message1').innerHTML = 'Password is too long * Must not exceed 25 character *';
        return false;

    }
    else{
        document.getElementById('message1').style.color = '#2FDE0D ';
        document.getElementById('message1').innerHTML = 'Password length is valid';
    }
   



    if (a==b)
       {
      document.getElementById('message').style.color = '#2FDE0D ';
      document.getElementById('message').innerHTML = 'Password is matching';
     
      
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML =  'Password is not matching';
      return false;
    }
    

   
    
   
  }

 function passwordcheckk () {
   

    var bp = document.getElementById('password1').value ;
    var cu = document.getElementById('username').value ;
    var de = document.getElementById('email').value ;
    var ap = document.getElementById('password').value ;
    var ef = document.getElementById('first_name').value;
    var fl = document.getElementById('last_name').value;
   

    if(ap==""&& bp==""&& cu==""&& de==""&&ef==""&&fl==""){
      document.getElementById('mess').style.color = 'red';
      document.getElementById('mess').innerHTML =  '<br><br>Please fill out all fields first!!!';
      return false;
     }
  

    else if(ap==""){
      document.getElementById('mess').style.color = 'red';
      document.getElementById('mess').innerHTML =  '<br><br>Password field is empty!!!';
      return false;

    }
   else if(bp==""){
    document.getElementById('mess').style.color = 'red';
    document.getElementById('mess').innerHTML =  '<br><br>Confirm password field is empty!!!';
    return false;
   }
   else if(cu==""){
    document.getElementById('mess').style.color = 'red';
    document.getElementById('mess').innerHTML =  '<br><br>Username field is empty!!!';
    return false;
   }
   else if(de==""){
    document.getElementById('mess').style.color = 'red';
    document.getElementById('mess').innerHTML =  '<br><br>Email field is empty!!!';
    return false;
   }
   else if(ef==""){
    document.getElementById('mess').style.color = 'red';
    document.getElementById('mess').innerHTML =  '<br><br>First Name field is empty!!!';
    return false;

   }
   else if(fl==""){
    document.getElementById('mess').style.color = 'red';
    document.getElementById('mess').innerHTML =  '<br><br>Last Name field is empty!!!';
    return false;
   }
  }


  //function eyee() {
    const eyeso = document.querySelector("#eyeso");
    eyeso.addEventListener("click",(e)=>{
    var x = document.getElementById("password");
    var y= document.getElementById("password1");
    if (x.type === "text" && y.type ==="text") {
      x.type = "password";
      y.type = "password";
      html = `<i class="eyes fas fa-eye"></i>`;
      eyeso.innerHTML = html;
    } else {
      
      x.type = "text";
      y.type ="text";
      html = `<i class="eyes fas fa-eye-slash"></i>`;
      eyeso.innerHTML = html;

    }
  });
//si password eye

   var eyess = document.querySelector("#eyess");
    eyess.addEventListener("click",(e)=>{
    var xyz = document.getElementById("password2");
    
    if (xyz.type === "text" ) {
      xyz.type = "password";
      
      html = `<i class="eyes fas fa-eye"></i>`;
      eyess.innerHTML = html;
    } else {
      
      xyz.type = "text";
     
      html = `<i class="eyes fas fa-eye-slash"></i>`;
      eyess.innerHTML = html;

    }
  });


  


  

  

  

  





   function checklog(){
        
    
            location.replace("/room");
          
      
    }

  function logoutbtn(){
   window.localStorage.clear()
   window.location.href="http://localhost:3030/"
  }

  


  function joinmeetlog() {
    

    console.log("hello")
    let username=document.getElementById("u").value
    let roomid=document.getElementById("roomid").value
    console.log(username)
    console.log(roomid)
    window.localStorage.setItem('user', JSON.stringify(username));
   //window.location.href=roomid
    location.replace(roomid);

    //document.getElementById("joinform").submit();
   
}
