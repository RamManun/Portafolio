import React, { Component } from 'react';

class Contact extends Component {
    
    render() { 
        return ( 
            <section id="contact">
                    <div class="row section-head">
                        <div class="two columns header-col">
                        <h1><span>Get In Touch.</span></h1>
                        </div>
                        <div class="ten columns">
                            <p class="lead">
                                Puedes contactarme por correo electronico, llamarme o enviarme un Whatsapp a mi numero de celular 
                                aqui las direcciones.
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="eight columns">
                        <form action="" method="post" id="contactForm" name="contactForm">
                                <fieldset>
                            <div>
                                    <label for="contactName">Nombre <span class="required">*</span></label>
                                    <input type="text" value="" size="35" id="contactName" name="contactName"/>
                            </div>
                            <div>
                                    <label for="contactEmail">Email <span class="required">*</span></label>
                                    <input type="text" value="" size="35" id="contactEmail" name="contactEmail"/>
                            </div>
                            <div>
                                    <label for="contactSubject">Asunto</label>
                                    <input type="text" value="" size="35" id="contactSubject" name="contactSubject"/>
                            </div>
                            <div>
                                <label for="contactMessage">Mensaje <span class="required">*</span></label>
                                <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                            </div>
                            <div>
                                <button class="submit">Enviar</button>
                                <span id="image-loader">
                                    <img alt="" src="images/loader.gif"/>
                                </span>
                            </div>
                                </fieldset>
                            </form> 
                        <div id="message-warning"> Error boy</div>
                            <div id="message-success">
                            <i class="fa fa-check"></i>Your message was sent, thank you!<br></br>
                            </div>
                        </div>
                        <aside class="four columns footer-widgets">
                        <div class="widget widget_contact">
                                <h4>Direccion y Celular</h4>
                                <p class="address">
                                    Ramces Manun<br></br>
                                    Res. Las Cascadas Zona A <br></br>
                                    Choloma, Cortes, Honduras<br></br>
                                    <span>+504 9695-5014</span>
                                </p>
                            </div>
                        </aside>
                </div>
            </section>
         );
    }
}
 
export default Contact;