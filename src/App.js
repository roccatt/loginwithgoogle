import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");

  const responseGoogle = (response) => {
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
  };
  return (
    <div className="App">
      <h1 style={{ color: "red" }}>Login Using Google</h1>
      <h2>Welcome: {name}</h2>
      <h2>Gmail: {email}</h2>
      <img src={url} alt="Profile" />
      <GoogleLogin
        clientId="298415685904-l1sv785jkt5tmpplejdeu9ju3ae2ih3o.apps.googleusercontent.com"
        buttonText="Login With Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      ,
    </div>
  );
}
