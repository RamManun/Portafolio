import React, { Component } from 'react';

export default class About extends Component {
    render() { 
        return ( 
            <section id="about">
                <div class="row">      
                    <div class="three columns">      
                        <img class="profile-pic"  src="images/profilepic.jpg" alt="" />      
                    </div>      
                    <div class="nine columns main-col">      
                        <h2>Sobre mi</h2>      
                        <p>Soy un joven de 24, vivo en Honduras en el departamento de Cortes me gusta la programacion tanto de aplicaciones para windows,
                        aplicaciones web y aplicaciones nativas para android y ios, uso distintos lenguajes de progrmacion como lo es Java, C# y actualemte
                        JavaScript para aplicaciones web y .Net, me gusta la programacion porque me apaciona el hecho de saber que contribuyo al futuro de
                        las tecnologias y asi ayudar a mejorar el presente.
                        </p>      
                        <div class="row">      
                            <div class="columns contact-details">      
                                <h2>Detalles Contacto</h2>
                                <p class="address">
                                        <span>Ramces Alejandro Manun Melgar</span><br></br>
                                        <span>Res. Las cascadas<br></br>
                                            Choloma, Cortes, Honduras
                                        </span><br></br>
                                        <span>+504 9695-5014</span><br></br>
                                <span>ramces12@gmail.com</span>
                                    </p>      
                            </div>      
                            <div class="columns download">
                                <p>
                                <a href="#" class="button"><i class="fa fa-download"></i>Descargar CV</a>
                                </p>
                            </div>                             
                        </div>
                    </div> 
                </div>      
            </section>
         );
    }
}
 
