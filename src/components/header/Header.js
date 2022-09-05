import React, { Component } from 'react';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header id="home">
                <nav id="nav-wrap">

                    <a class="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a class="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

                    <ul id="nav" class="nav">
                        <li class="current"><a class="smoothscroll" href="#home">Home</a></li>
                        <li><a class="smoothscroll" href="#about">Sobre mi</a></li>
                        <li><a class="smoothscroll" href="#resume">Resumen</a></li>
                        <li><a class="smoothscroll" href="#portfolio">Trabajos</a></li>
                        <li><a class="smoothscroll" href="#testimonials">Testimonials</a></li>
                        <li><a class="smoothscroll" href="#contact">Contactame</a></li>
                    </ul>
                </nav> 

                <div class="row banner">
                    <div class="banner-text">
                        <h1 class="responsive-headline">Yo soy Ramces Manun.</h1>
                        <h3>Soy Programador <span>Desarrollador Web</span> creador de aplicaciones
                        web y aplicaciones nativas para android<a class="smoothscroll" href="#about">puedes bajar un poco</a>
                        y leer un poco mas <a class="smoothscroll" href="#about"> sobre mi</a>.</h3>
                        <hr />
                        <ul class="social">
                        <li><a href="https://www.facebook.com/rammanun"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="https://twitter.com/ramcesloko"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/ramces-manun-722b30167/"><i class="fa fa-linkedin"></i></a></li>
                        <li><a href="https://www.instagram.com/ram_manun/"><i class="fa fa-instagram"></i></a></li>
                        <li><a href="https://github.com/RamManun"><i class="fa fa-github"></i></a></li>
                        </ul>
                    </div>
                </div>
                <p class="scrolldown">
                    <a class="smoothscroll" href="#about"><i class="icon-down-circle"></i></a>
                </p>
            </header>
         );
    }
}
 
export default Header;