


const xtraeye = document.querySelector("#xtraeye");
    xtraeye.addEventListener("click",(e)=>{
    var xx = document.getElementById("password10");
    var yy = document.getElementById("password9");
    var zz = document.getElementById("password8");

    
    if (xx.type === "text" && yy.type === "text" && zz.type === "text" ) {
      xx.type = "password";
      yy.type = "password";
      zz.type = "password";
      
      html = `<i class="xtraeyes fas fa-eye"></i>`;
      xtraeye.innerHTML = html;
    } 
    else {
      
      xx.type = "text";
      yy.type = "text";
      zz.type = "text";
     
      html = `<i class="xtraeyes fas fa-eye-slash"></i>`;
      xtraeye.innerHTML = html;

    }
  });