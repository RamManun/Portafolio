import React, { Component } from 'react';

class Portfolio extends Component {
    render() { 
        return ( 
            <section id="portfolio">
                <div class="row">
                    <div class="twelve columns collapsed">
                        <h1>Mis Trabajos.</h1>
                        <div id="portfolio-wrapper" class="bgrid-quarters s-bgrid-thirds cf">
                        <div class="columns portfolio-item">
                            <div class="item-wrap">
                                <a href="#modal-01" title="">
                                    <img alt="" src="images/portfolio/GastoSemanal.jpg"/>
                                    <div class="overlay">
                                    <div class="portfolio-item-meta">
                                            <h5>Gasto Semanal</h5>
                                        <p>Aplicacion Web</p>
                                        </div>
                                    </div>
                                    <div class="link-icon"><i class="icon-plus"></i></div>
                                </a>
                            </div>
                            </div>
                        <div class="columns portfolio-item">
                            <div class="item-wrap">
                                <a href="#modal-02" title="">
                                    <img alt="" src="images/portfolio/Noticias.jpg"/>
                                    <div class="overlay">
                                    <div class="portfolio-item-meta">
                                            <h5>Noticias</h5>
                                        <p>Web de Noticias con API</p>
                                        </div>
                                    </div>
                                    <div class="link-icon"><i class="icon-plus"></i></div>
                                </a>
                            </div>
                            </div> 
                        <div class="columns portfolio-item">
                            <div class="item-wrap">
                                <a href="#modal-03" title="">
                                    <img alt="" src="images/portfolio/Store.jpg"/>
                                    <div class="overlay">
                                    <div class="portfolio-item-meta">
                                            <h5>Tienda Online</h5>
                                        <p>Tienda online con base de datos</p>
                                        </div>
                                    </div>
                                    <div class="link-icon"><i class="icon-plus"></i></div>
                                </a>
                            </div>
                            </div>
                        <div class="columns portfolio-item">
                            <div class="item-wrap">
                                <a href="#modal-04" title="">
                                    <img alt="" src="images/portfolio/PacienteVeterinaria.jpg"/>
                                    <div class="overlay">
                                    <div class="portfolio-item-meta">
                                            <h5>Paciente de veterinario</h5>
                                        <p>listar pacientes</p>
                                        </div>
                                    </div>
                                    <div class="link-icon"><i class="icon-plus"></i></div>
                                </a>
                            </div>
                            </div>
                        <div class="columns portfolio-item">
                            <div class="item-wrap">
                                <a href="#modal-05" title="">
                                    <img alt="" src="images/portfolio/Imagenes.jpg"/>
                                    <div class="overlay">
                                    <div class="portfolio-item-meta">
                                            <h5>Imagenes</h5>
                                        <p>sitio tipo google imagenes</p>
                                        </div>
                                    </div>
                                    <div class="link-icon"><i class="icon-plus"></i></div>
                                </a>
                            </div>
                            </div> 
                        <div class="columns portfolio-item">
                            <div class="item-wrap">
                                <a href="#modal-06" title="">
                                    <img alt="" src="images/portfolio/Clima.jpg"/>
                                    <div class="overlay">
                                    <div class="portfolio-item-meta">
                                            <h5>Clima</h5>
                                        <p>App de Clima</p>
                                        </div>
                                    </div>
                                    <div class="link-icon"><i class="icon-plus"></i></div>
                                </a>
                            </div>
                            </div> 
                        <div class="columns portfolio-item">
                            <div class="item-wrap">
                                <a href="#modal-07" title="">
                                    <img alt="" src="images/portfolio/Eventos.jpg"/>
                                    <div class="overlay">
                                    <div class="portfolio-item-meta">
                                            <h5>Eventos</h5>
                                        <p>Eventos con Rest API</p>
                                        </div>
                                    </div>
                                    <div class="link-icon"><i class="icon-plus"></i></div>
                                </a>
                            </div>
                            </div> 
                        <div class="columns portfolio-item">
                            <div class="item-wrap">
                                <a href="#modal-08" title="">
                                    <img alt="" src="images/portfolio/CotizadorSeguros.jpg"/>
                                    <div class="overlay">
                                    <div class="portfolio-item-meta">
                                            <h5>Cotizador de Seguros</h5>
                                        <p>para Autos</p>
                                        </div>
                                    </div>
                                    <div class="link-icon"><i class="icon-plus"></i></div>
                                </a>
                            </div>
                            </div> 
                        </div> 
                    </div> 
                    <div id="modal-01" class="popup-modal mfp-hide">
                        <img class="scale-with-grid" src="images/portfolio/modals/GastoSemanal.jpg" alt="" />
                        <div class="description-box">
                            <h4>Gasto Semanal</h4>
                            <p>aplicacion web sobre gasto semanal</p>
                        <span class="categories"><i class="fa fa-tag"></i>Webdesign</span>
                        </div>
                        <div class="link-box">
                        <a href="https://github.com/RamManun/Presupuesto_Gastos_Semanalt">Details</a>
                            <a class="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                    <div id="modal-02" class="popup-modal mfp-hide">
                        <img class="scale-with-grid" src="images/portfolio/modals/Noticias.jpg" alt="" />
                        <div class="description-box">
                            <h4>Web sobre noticias</h4>
                            <p>Web de noticias API</p>
                        <span class="categories"><i class="fa fa-tag"></i>Web Development</span>
                        </div>
                        <div class="link-box">
                        <a href="https://github.com/RamManun/noticias">Details</a>
                            <a class="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                    <div id="modal-03" class="popup-modal mfp-hide">
                        <img class="scale-with-grid" src="images/portfolio/modals/store.jpg" alt="" />
                        <div class="description-box">
                            <h4>Tienda online</h4>
                            <p>Tienda de ventas de camisas, pagina de prueba</p>
                        <span class="categories"><i class="fa fa-tag"></i>Web Development</span>
                        </div>
                        <div class="link-box">
                        <a href="https://github.com/RamManun/Tienda_Virtual">Details</a>
                            <a class="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                    <div id="modal-04" class="popup-modal mfp-hide">
                        <img class="scale-with-grid" src="images/portfolio/modals/PacienteVeterinaria.jpg" alt="" />
                        <div class="description-box">
                            <h4>Paciente de veterinaria</h4>
                            <p>Aplicacion web sobre paciente de veterinaria</p>
                        <span class="categories"><i class="fa fa-tag"></i>Web Development</span>
                        </div>
                        <div class="link-box">
                        <a href="https://github.com/RamManun/administrador_veterinaria">Details</a>
                            <a class="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                    <div id="modal-05" class="popup-modal mfp-hide">
                        <img class="scale-with-grid" src="images/portfolio/modals/Imagenes.jpg" alt="" />
                        <div class="description-box">
                            <h4>Web de buscador de imagenes</h4>
                            <p>web tipo google imagenes con REST API</p>
                        <span class="categories"><i class="fa fa-tag"></i>Webdesign</span>
                        </div>
                        <div class="link-box">
                        <a href="https://github.com/RamManun/Buscador_Imagenes">Details</a>
                            <a class="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                    <div id="modal-06" class="popup-modal mfp-hide">
                        <img class="scale-with-grid" src="images/portfolio/modals/Clima.jpg" alt="" />
                        <div class="description-box">
                            <h4>Clima</h4>
                            <p>Aplicacion Web de clima con API</p>
                        <span class="categories"><i class="fa fa-tag"></i>Web Development</span>
                        </div>
                        <div class="link-box">
                        <a href="https://github.com/RamManun/aplicacion_de_clima">Details</a>
                            <a class="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                    <div id="modal-07" class="popup-modal mfp-hide">
                        <img class="scale-with-grid" src="images/portfolio/modals/Eventos.jpg" alt="" />
                        <div class="description-box">
                            <h4>Eventos</h4>
                            <p>Aplicacion Web de Eventos con API</p>
                        <span class="categories"><i class="fa fa-tag"></i>Web Development</span>
                        </div>
                        <div class="link-box">
                        <a href="https://github.com/RamManun/Eventos">Details</a>
                            <a class="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                    <div id="modal-08" class="popup-modal mfp-hide">
                        <img class="scale-with-grid" src="images/portfolio/modals/CotizadorSeguros.jpg" alt="" />
                        <div class="description-box">
                            <h4>Cotizador de Seguros</h4>
                            <p>Cotizador de seguros para Autos </p>
                        <span class="categories"><i class="fa fa-tag"></i>Webdesign</span>
                        </div>
                        <div class="link-box">
                        <a href="https://github.com/RamManun/Cotizador_Seguros">Details</a>
                            <a class="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                </div>
            </section>
         );
    }
}
 
export default Portfolio;