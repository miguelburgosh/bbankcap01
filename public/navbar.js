function NavBar() {
  const ctx = React.useContext(UserContext);

  function handleLogout(){
    console.log('logout clicked')
    ctx.user = "please login.";
    ctx.email = "";
    firebase.auth().signOut();
  }

  function refreshPage(){
    window.location.reload();
} 

  return (
    <>
     <a href="#" className="navbar-brand">
          <img src="./imagesbk/bkbannwht.png" title="Home"/>
        </a>
      <nav className="navbar navbar-expand-lg navbar-dark">
       
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
          <li className="nav-item" id="nav-create-account">
              <a className="nav-link" href="#">
                <span title="Home">Home</span>
              </a>
            </li>
            <li className="nav-item" id="nav-create-account">
              <a className="nav-link" href="#/CreateAccount/">
                <span title="Create a new account">Create Account</span>
              </a>
            </li>
            <li className="nav-item" id='nav-login'>
              <a className="nav-link" href="#/login/">
                <span title="Login to existing account">Login</span>
              </a>
            </li>
            <li className="nav-item" id='nav-balance'>
              <a className="nav-link" href="#/balance/">
                <span title="See current balance of existing account">
                  Balance
                </span>
              </a>
            </li>
            <li className="nav-item" id='nav-deposit'>
              <a className="nav-link" href="#/deposit/">
                <span title="Deposit money into existing account">Deposit</span>
              </a>
            </li>
            <li className="nav-item"  id='nav-withdraw'>
              <a className="nav-link" href="#/withdraw/">
                <span title="Withdraw money from existing account">
                  Withdraw
                </span>
              </a>
            </li>
            <li className="nav-item" id='nav-allData'>
              <a className="nav-link" href="#/alldata/">
                <span title="See all data for existing account">AllData</span>
              </a>
            </li>
            <li className="nav-item" id='nav-logout'>
              <a className="nav-link" onClick={refreshPage} href="#">
                <span title="Logout of account">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

