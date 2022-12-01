function Logout() { 
    function handleLogout(){
        console.log('logout clicked')
        ctx.user = "please login.";
        ctx.email = "";
        firebase.auth().signOut();
      }
  }
  
  
  
  