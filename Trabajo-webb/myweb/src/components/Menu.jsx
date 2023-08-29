import React from "react";
import icono from "../assets/icono_prinsipal-removebg-preview.png"
import capa from "../assets/capa.png"
import "../styles/Menu.css"
function Menu() {
    return (
        <div class="main">
            <div class="menu">
                <div class="opc">
                    <div class="icono">
                        <img src={icono} alt=""/>
                            <div>
                                <h2>THE COMPANY</h2>
                            </div>
                    </div>
                    <div class="menufinal">
                        <div class="men">HOME</div>
                        <div class="men">SERVICES</div>
                        <div class="men">BLOG</div>
                        <div class="men">CONTACT</div>
                        <div class="men">ABOUT</div>
                    </div>
                </div>
                <div class="dates">
                    <div>
                        <div>
                            <h1 class="fo">A Perfect App</h1>
                            <h1 class="for">For Your Lifestyle</h1>
                        </div>
                        <div class="texto">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur <br/>
                                    adipiscing elit, sed do eiusmod tempor <br/>
                                        incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                                <div>
                                    <button class="bot">PURCHASE</button>
                                </div>
                        </div>
                        <div class="imagen">
                            <div><img src={capa} alt=""/></div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Menu;