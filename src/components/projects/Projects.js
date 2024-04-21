import React, { Component } from "react";
import './Projects.css';
import pets1 from './pets1.png';
import pets2 from './pets2.png';
import pets3 from './pets3.png';
import pets4 from './pets4.png';
import px1 from './px1.png';
import px2 from './px2.png';
import px3 from './px3.png';
import px4 from './px4.png';
import q1 from './q1.png';
import q2 from './q2.png';
import q3 from './q3.png';
import q4 from './q4.png';

export default function Projects() {

    return (
        <div className="Projects">

            <div>
                <h1 class='flow-text titleproj section scrollspy' id='conteudo2'>Agora, irei mostrar um pouco dos projetos que já desenvolvi!</h1>
            </div>

            <div>
                <h3 class='flow-text titlesub left-align'>Pets</h3>

                <p class='flow-text left-align textproj'>
                    Este projeto foi desenvolvido como parte do seu trabalho de conclusão de curso no curso técnico. 
                    Trata-se de uma aplicação web voltada para a adoção de animais, onde os usuários podem criar postagens sobre animais disponíveis para adoção
                     e visualizar postagens de outros usuários. Desenvolvido utilizando PHP.
                </p>
            </div>

            <div class='divcar'>
                <div class="carousel carousel-slider">
                    <a class="carousel-item"><img src={pets1}></img></a>
                    <a class="carousel-item"><img src={pets2}></img></a>
                    <a class="carousel-item"><img src={pets3}></img></a>
                    <a class="carousel-item"><img src={pets4}></img></a>
                </div>
            </div>

            <div>
                <h3 class='flow-text titlesub left-align'>Quilombo Urbano</h3>

                <p class='flow-text left-align textproj'>
                    Este projeto foi realizado como parte de um trabalho da disciplina de introdução à engenharia de software. 
                    Consiste em uma aplicação web destinada ao cadastro de aulas para uma comunidade, onde os professores podem publicar informações sobre aulas e eventos, 
                    e os alunos podem se inscrever nessas aulas. Assim como o primeiro projeto, este também foi desenvolvido utilizando PHP.
                </p>
            </div>

            <div class='divcar'>
                <div class="carousel carousel-slider">
                    <a class="carousel-item"><img src={q1}></img></a>
                    <a class="carousel-item"><img src={q2}></img></a>
                    <a class="carousel-item"><img src={q3}></img></a>
                    <a class="carousel-item"><img src={q4}></img></a>
                </div>
            </div>

            <div>
                <h3 class='flow-text titlesub left-align'>Projeto X</h3>

                <p class='flow-text left-align textproj'>
                    Este projeto, desenvolvido como parte de um trabalho da disciplina de oficina de desenvolvimento de software, é uma aplicação que permite a edição de arquivos PDF, 
                    alterando valores específicos com base em uma planilha de entrada. Foi feito utilizando o framework React e a linguagem Python, e ainda está em desenvolvimento.
                </p>
            </div>

            <div class='divcar'>
                <div class="carousel carousel-slider">
                    <a class="carousel-item"><img src={px1}></img></a>
                    <a class="carousel-item"><img src={px2}></img></a>
                    <a class="carousel-item"><img src={px3}></img></a>
                    <a class="carousel-item"><img src={px4}></img></a>
                </div>
            </div>

        </div>
    );
    
}