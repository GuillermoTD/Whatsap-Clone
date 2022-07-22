import WhatsapIcon from "../img/whatsapp.svg"


const Login = () => {
  return (
    <div className="LoginContainer">
      <div className="Login">
        <img className="Login_Icon" src={WhatsapIcon} alt="whatsap-icon" />
        <h2 className="Login_Title">Sign in with Whatsapp</h2>
        <button className="Login_Button1">Sign in with Google</button>
        <p>Or</p>
        <button className="Login_Button2">Sign in with a acccount</button>
      </div>
    </div>
  );
};
export default Login;
