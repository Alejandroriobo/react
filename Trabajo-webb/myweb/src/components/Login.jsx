import React from "react";
import "../styles/Login.css"

function Login()  {
    return (
        <div class="main">
            <div class="sombra">
                <div class="login2">
                <div class="login">
                    <div>
                        <h1>WELCOME</h1>
                    </div>
                </div>
                <h1>USER LOGIN</h1>
                <div class="logimenu">
                    <div class="user">
                        <input type="text" name="" required="" id="username"/>
                        <label>Username</label>
                    </div>
                    <div class="user">
                        <input type="password" name="" required="" id="Password"/>
                        <label>Password</label>
                    </div>
                    <div class="nm">
                        <div>
                            <p>
                                <input type="checkbox" id="check" />
                                <label for="check">Remember</label>
                            </p>
                        </div>
                        <div>
                            <p id="ca">Forget Password ?</p>
                        </div>  
                    </div>
                    <button class="botin"  onclick="location.href='/Menu/Inicio.html'"  >LOGIN</button>
                </div>
            </div>
            </div>
        </div>
      )
}

export default Login;