function Home() {
  const ctx = React.useContext(UserContext);
  console.log(ctx);

  React.useEffect(() => {
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
