import React, { Component } from "react";
import './Footer.css';

export default function Footer() {

    return (
        <div className="Footer">

            <footer class="page-footer blue lighten-2">
                <div class="row">
                    <div class='col s4'>
                        <a href="mailto:vitor.augustoniess.2015@gmail.com"><i class="material-icons white-text">email</i><p class='white-text'>E-mail</p></a>
                    </div>
                    <div class='col s4'>
                        <a href="https://www.instagram.com/vitoraugustoniess"><i class="fa fa-instagram white-text"></i><p class='white-text'>Instagram</p></a>
                    </div>
                    <div class='col s4'>
                        <a href="https://github.com/VitorNiess"><i class="fa fa-github white-text"></i><p class='white-text'>Github</p></a>
                    </div>
                </div>

                <div class="blue lighten-1 low"></div>
            </footer>

        </div>
    );
    
}