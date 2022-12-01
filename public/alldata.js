function AllData() {
    const [data, setData] = React.useState([]);
    const[loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {

        // fetch all accounts from API
        fetch('/account/all')
          .then(response => response.json())
          .then(data => {
              console.log(data);
              setData(data);
        })
  
        setLoaded(true);

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