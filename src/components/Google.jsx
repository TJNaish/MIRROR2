import React from 'react';
import { GoogleLogin } from 'react-google-login-component';

export default class Login extends React.Component {
  responseGoogle(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    var googleId = googleUser.getId();

    console.log({ googleId });
    console.log({ accessToken: id_token });
    //anything else you want to do(save to localStorage)...
  }

  render() {
    return (
      <div>
        <GoogleLogin
          socialId="553396771789-166tn6hr3addi0m8j5hau5qjtkf158t6.apps.googleusercontent.com"
          className="google-login"
          scope="profile"
          fetchBasicProfile={false}
          responseHandler={this.responseGoogle}
          buttonText="Login With Google"
        />
      </div>
    );
  }
}
