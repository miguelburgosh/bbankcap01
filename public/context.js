const Route          = ReactRouterDOM.Route;
const Link           = ReactRouterDOM.Link;
const HashRouter     = ReactRouterDOM.HashRouter;
const UserContext    = React.createContext(null);
const DisplayContext = React.createContext(null);



// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyC58miYWyw9DO_LlMNepQJ58C0uTUp0wuE",
  authDomain: "badbank-9e3ee.firebaseapp.com",
  projectId: "badbank-9e3ee",
  storageBucket: "badbank-9e3ee.appspot.com",
  messagingSenderId: "731715950380",
  appId: "1:731715950380:web:c0687d5dae4ce1e3e33e89"

};

// Firebase Init
firebase.initializeApp(firebaseConfig);


function Card(props) {
  function classes() {
    const bg = props.bgcolor ? " bg-" + props.bgcolor : " ";
    const txt = props.txtcolor ? " text-" + props.txtcolor : " ";
    return "card mb-3 " + bg + txt;
  }

  return (
    <div className={classes()} style={{ maxWidth: "20rem" }}>

      <div className="card-header">{props.header}</div>
      
      <div className="card-body">
        {props.title && <h5 className="card-title">{props.title}</h5>}
        {props.text && <p className="card-text">{props.text}</p>}
        {props.body}
        {props.status && <div id="createStatus">{props.status}</div>}
      </div>
    
    </div>
  );
}
