import React, { useState } from 'react';
import './Navbar.css';
import M from  'materialize-css/dist/js/materialize.min.js';

function componentDidMount() {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem, {
        edge: "left",
        inDuration: 250
    });
}

export default function Navbar({ onToggle, textoBotao }) {
    const [state, setstate] = useState(false);

    const changeClass = () => {
        const scrollValue = document.documentElement.scrollTop;

        if(scrollValue > 100) {
            setstate(true);
        } else {
            setstate(false);
        }

    }

    window.addEventListener('scroll', changeClass);

    return (
        <div className="Navbar">

            <div class='navbar-fixed'>
                <nav>

                    <div className={state ? "nav-wrapper navdivtrans":"nav-wrapper navdivsolid"}>
                        <a href="#top" class="center title left">Meu site</a>
                        <a href="#" data-target="mobile-demo" class="sidenav-trigger right"><i class="material-icons">menu</i></a>

                        <ul class="right hide-on-med-and-down">
                            <li><a href='#conteudo1'>Sobre Mim</a></li>
                            <li><a href='#conteudo2'>Meus Projetos</a></li>
                        </ul>
                    </div>

                </nav>

                <ul class="sidenav blue lighten-4" id="mobile-demo">
                    <li><a href='#conteudo1'>Sobre Mim</a></li>
                    <li><a href='#conteudo2'>Meus Projetos</a></li>
                </ul>
                
            </div>
            
        </div>
      );
    
}