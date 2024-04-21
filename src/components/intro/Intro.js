import React, { Component } from "react";
import { useState, useEffect } from 'react';
import imgIntro from './foguete.jpg';
import './Intro.css';
import useWindowResizeThreshold from "../screensize/useWindowResizeThreshold";

const MAX_MOBILE_WIDTH = 1400

export default function Intro() {
    const isMobileSize = useWindowResizeThreshold(MAX_MOBILE_WIDTH)

    useEffect(() => {}, [isMobileSize])
    
    if(isMobileSize){

        return (
            <div className="Intro">
               <div class='divintro row'>
    
                    <div>
                        <div class='row divmainintro'>
                            <div class='col s12 divtitleintro'>
                                <h1 class='flow-text titleintro section scrollspy left-align' id='conteudo1'>Olá e bem-vindo ao meu portfólio!</h1>
                            </div>
                            
                            <div class='col s12 divparintro'>
                                <p class="flow-text parintrosmall left-align">
                                    Meu nome é Vítor, e sou um entusiasta da tecnologia, atualmente cursando Ciência da Computação na Universidade Federal de São João del-Rei (UFSJ). 
                                    Complementarmente, possuo formação técnica em Informática pelo CEFET-MG, o que solidificou fortemente minha base em fundamentos de computação.
                                    Ao longo da minha jornada acadêmica e profissional, adquiri habilidades em diversas áreas, com foco principal em desenvolvimento de software. 
                                    Tenho proficiência em várias linguagens de programação, incluindo Python, PHP e JavaScript, as quais utilizo para criar soluções eficientes e escaláveis. 
                                    Além disso, tenho explorado o framework React, consolidando meu conhecimento em desenvolvimento front-end e minha capacidade de criar interfaces dinâmicas e responsivas.

                                    Estou sempre em busca de desafios e oportunidades para expandir meu conhecimento e aprimorar minhas habilidades. 
                                    Busco ativamente experiência empresarial para aplicar meus conhecimentos na prática e contribuir para o crescimento de organizações inovadoras. 
                                    Meu objetivo é não apenas destacar-me no mercado de trabalho, mas também fazer a diferença por meio de soluções criativas e eficazes.
                                    Navegue pelo meu portfólio e conheça mais sobre mim e meu trabalho. Estou ansioso para colaborar em projetos empolgantes e fazer parte de equipes dinâmicas. 
                                    Se você está em busca de um profissional comprometido, apaixonado e pronto para enfrentar desafios, entre em contato!
                                </p>
                            </div>
                        </div>
                    </div>
    
               </div>
            </div>
        );

    } else {

        return (
            <div className="Intro">
               <div class='divintro row'>
    
                    <div class="parallax-container imgintro hide-on-med-and-down">
                        <div class="parallax"><img class='imgintroins' src={imgIntro}></img></div>
    
                        <div class='row divmainintro'>
                            <div class='col s12 divtitleintro'>
                                <h1 class='flow-text titleintro section scrollspy left-align' id='conteudo1'>Olá e bem-vindo ao meu portfólio!</h1>
                            </div>
                            
                            <div class='col s8 divparintro'>
                                <p class="flow-text left-align">
                                    Meu nome é Vítor, e sou um entusiasta da tecnologia, atualmente cursando Ciência da Computação na Universidade Federal de São João del-Rei (UFSJ). 
                                    Complementarmente, possuo formação técnica em Informática pelo CEFET-MG, o que solidificou fortemente minha base em fundamentos de computação.
                                    Ao longo da minha jornada acadêmica e profissional, adquiri habilidades em diversas áreas, com foco principal em desenvolvimento de software. 
                                    Tenho proficiência em várias linguagens de programação, incluindo Python, PHP e JavaScript, as quais utilizo para criar soluções eficientes e escaláveis. 
                                    Além disso, tenho explorado o framework React, consolidando meu conhecimento em desenvolvimento front-end e minha capacidade de criar interfaces dinâmicas e responsivas.
    
                                    Estou sempre em busca de desafios e oportunidades para expandir meu conhecimento e aprimorar minhas habilidades. 
                                    Busco ativamente experiência empresarial para aplicar meus conhecimentos na prática e contribuir para o crescimento de organizações inovadoras. 
                                    Meu objetivo é não apenas destacar-me no mercado de trabalho, mas também fazer a diferença por meio de soluções criativas e eficazes.
                                    Navegue pelo meu portfólio e conheça mais sobre mim e meu trabalho. Estou ansioso para colaborar em projetos empolgantes e fazer parte de equipes dinâmicas. 
                                    Se você está em busca de um profissional comprometido, apaixonado e pronto para enfrentar desafios, entre em contato!
                                </p>
                            </div>
    
                        </div>
                    </div>
    
               </div>
            </div>
        );

    }
    
}