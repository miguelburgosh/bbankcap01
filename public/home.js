function Home() {
  const ctx = React.useContext(UserContext);
  console.log(ctx);

  React.useEffect(() => {
    // const navCreateAccount = document.getElementById('nav-create-account');
    // const navLogin = document.getElementById('nav-login');
    // const navDeposit = document.getElementById('nav-deposit');
    // const navWithdraw = document.getElementById('nav-withdraw');
    // const navTransfer = document.getElementById('nav-transfer');
    // const navBalance = document.getElementById('nav-balance');
    // const navAllData = document.getElementById('nav-allData');
    // const navLogout = document.getElementById('nav-logout');

    // navCreateAccount.style.display = "block";
    // navLogin.style.display = "block";
    // navDeposit.style.display = "none";
    // navWithdraw.style.display = "none";
    // navTransfer.style.display = "none";
    // navBalance.style.display = "none";
    // navAllData.style.display = "none";
    // navLogout.style.display = "none";



    
    },[])
 

  return (
    <>
    
    <Card
    
      header="Bankrypt Home"
      title="Welcome to our new bank!"
      text="Please Login or Create an Account."
      body={<img src="./imagesbk/bkcircle.png" className="img-fluid" alt="Responsive image" />}
    />
    </>
  );
}
