function AllData() {
  const [data, setData] = React.useState([]);
  const[loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    // fetch all accounts from API
    fetch('/account/all')
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        setData(data);
      })
    setLoaded(true);

    // const navCreateAccount = document.getElementById('nav-create-account');
    // const navLogin = document.getElementById('nav-login');
    // const navDeposit = document.getElementById('nav-deposit');
    // const navWithdraw = document.getElementById('nav-withdraw');
    // const navBalance = document.getElementById('nav-balance');
    // const navAllData = document.getElementById('nav-allData');
    // const navLogout = document.getElementById('nav-logout');
    // navCreateAccount.style.display = "none";
    // navLogin.style.display = "none";
    // navDeposit.style.display = "block";
    // navWithdraw.style.display = "block";
    // navBalance.style.display = "block";
    // navAllData.style.display = "block";
    // navLogout.style.display = "block";
  }, [loaded]);

  const spinner =  <h1>Loading...</h1>;
  
  return (
    <>
      <div className="allData-cards">
      <div className="hi-msg">Scroll Down</div>

        {loaded ?
          ((data.map((user, index) => {
            return (
              <>
              <Card
              txtcolor=" "
              bgcolor=" "
              header="Account Info"
              title={`Account owner: ${user.name.toUpperCase()}`}
              key={user._id}
              body={
                <>
                <ul className="list-group list-group-flush" key={index}>
                  <li className="list-group-item data mongodbId">MongoDB ID: {user._id}</li>
                  <li className="list-group-item data email">Email: {user.email}</li>
                  <li className="list-group-item data password">Password: {user.password}</li>
                  <li className="list-group-item data">Account balance: ${user.balance}</li>
                </ul>
                </>
              }/>
              </>
            );
          })))
          : 
          (spinner)
        }
      </div>

     

      </>
  )
}