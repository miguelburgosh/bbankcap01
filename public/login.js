
function Login() { 
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);
  const [user, setUser] = React.useState("");
  const [message, setMessage] = React.useState("");
  const ctx = React.useContext(UserContext);
  
  return (
    <>
    {loaded? <div className="hi-msg">Welcome, {user}</div> : <div></div>}
    
    <div className="login-card">
    <Card
      header="Login"
      status={status}
      body={
        show ? (
          <LoginForm setUser={setUser} setShow={setShow} setStatus={setStatus} />
        ) : (
          <LoginMessage setShow={setShow} setStatus={setStatus} />
        )
      }
    />
    </div>
    </>
  );

  

  function LoginForm() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [disabled, setDisabled] = React.useState(true);

    function handleLogin() {

      // validate fields
      if (!validate(email, "email")) return;
      if (!validate(password, "password")) return;
      
      // Firebase auth
      const auth = firebase.auth();
      const promise = auth.signInWithEmailAndPassword(
        email,
        password
      );
      firebase.auth().onAuthStateChanged((firebaseUser) => {
        if (firebaseUser) {
          console.log(firebaseUser);
          console.log(email, password);

          // get account info from MongoDB
          fetch(`/account/login/${email}/${password}`)
          .then(response => response.text())
          .then(text => {
            try{
              const data = JSON.parse(text);
              setShow(false);
              setUser(data.name);
              setLoaded(true);
              setSuccess(true);
              ctx.user = data.name;
              ctx.email = data.email;
            } catch {
              setMessage(text);
              setSuccess(false);
              setShow(false);
            }
          });
        } else {
          //error codes
          setStatus("unAuthorized User. Please create a new account.");   
          setTimeout(() => setStatus(""), 3000);
        }
      });
      promise.catch((e) => {
        setLoaded(false);
        console.log(e.message)});       
    }

    return (
      <>
        Email
        <br />
        <input
          type="input"
          className="form-control"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => {
            setEmail(e.currentTarget.value);
            setDisabled(false);
          }}
        />
        <br />
        Password
        <br />
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => {
            setPassword(e.currentTarget.value);
            setDisabled(false);
          }}
        />
        <br />
        <div className="login-btn">
          <button
            type="submit"
            className="btn btn-light"
            onClick={handleLogin}
            disabled={disabled}
            
          >Login</button>
        </div>
      </>
    );
  }

  function LoginMessage(props) {
    return success ? (
      <>
        <h5>Login Success</h5>
        <a href="#/balance/">
          <button
          type="submit"
          className="btn btn-light"
          onClick={() => props.setShow(true)}
          >Go to Account</button>
        </a>
      </>
    ) : (
      <>
        <h5>{message}</h5>
        <button
          type="submit"
          className="btn btn-light"
          onClick={() => props.setShow(true)}
        >Retry</button>
      </>
    );
  }

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label + " is required");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }
}



