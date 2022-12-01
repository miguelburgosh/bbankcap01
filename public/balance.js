function Balance() {
  const ctx = React.useContext(UserContext);
  const [show, setShow] = React.useState(true)
  const [status, setStatus] = React.useState('')
  const [balance, setBalance] = React.useState('')
  const[loaded, setLoaded] = React.useState(false);
  
  React.useEffect(() => {


    // Get Logged in user from MongoDB
    fetch(`/account/findOne/${ctx.email}`)
    .then(response => response.text())
    .then(text => {
      try {
        const data = JSON.parse(text)
        setBalance(data.balance)
        if(data?.message){
        console.log(data.message)
        }
        console.log('JSON:', JSON.stringify(data))
      } catch (err) {
        console.log('err:', text)
      }
    })
    setLoaded(true);
  },[loaded])

  const spinner =  <h1>Loading...</h1>;

  return (
    <>
    {!loaded ? <div>{spinner}</div> : (
      <>
      <div className="hi-msg">Welcome {ctx.user}</div>
      <Card
        txtcolor=" "
        bgcolor=" "
        header="Balance"
        body={
            <ul className="list-group list-group-flush make-center bg-light">
              <li className="list-group-item make-center">
                Account balance: 
                <li className="list-group-item make-center">
                $ {balance}
                </li>
              </li>
            </ul>
        }
      />
      </>
    )}
    </>
  );
}