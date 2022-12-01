function App() {
  return (
    <div className="container-app">
      
      <div className="header">

        <NavBar />

      </div>    
      
      <div className="left">
      </div>

        <HashRouter>
      
        <div className="left">

      <h5>STRUGGLING <br></br> TOGETHER</h5>

      </div>


      <div className="right">
        
        <UserContext.Provider value= {{user: "visitor, please log in.", email: "test@test.test"}}>

          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/transfer/" component={Transfer} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />

        </UserContext.Provider>

      </div>

        </HashRouter>
        <div className="footer"></div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
