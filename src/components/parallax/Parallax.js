import React, { Component } from "react";
import imgPar from './teste.png';
import './Parallax.css';

export default function Parallax() {

    return (
        <div className="Parallax">

            <div class="parallax-container z-depth-5 maindiv section scrollspy" id='top'>
                <div class="parallax"><img src={imgPar}></img></div>
                <div class="center-align">
                    <h1 class="white-text titlepara animated fadeInDown">Vítor Augusto Niess</h1>
                    <a href="#conteudo1" class="waves-effect waves-light waves-white btn blue lighten-3 parabtn animated fadeInUp">Sobre mim</a>
                </div>
            </div>

        </div>
    );
    
}