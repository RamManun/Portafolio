import React, { Component } from 'react';

class Resume extends Component {
    state = {  }
    render() { 
        return ( 
            <section id="resume">
                <div class="row education">
                    <div class="three columns header-col">
                        <h1><span>Educacion</span></h1>
                    </div>
                    <div class="nine columns main-col">
                        <div class="row item">
                        <div class="twelve columns">
                            <h3>Universidad Autonoma de Honduras</h3>
                            <p class="info">Licenciado en Informatica Administrativa <span>&bull;</span> <em class="date">Enero 2016 - Actualidad</em></p>
                            <p>
                                Actualmente sigo estudiando en la universidad Autonoma de Honduras (UNAH) soy pasante de la carrera
                                aqui aprendi mucho sobre lenguajes como C, C++, C# y .NET, lo demas lo he aprendido de forma autodidactica,
                                tambien aprendi mucho sobre Redes y Hardware con cursos en Cisco.
                            </p>
                        </div>
                        </div> 
                    </div> 
                </div> 
                    <div class="row skill">
                    <div class="three columns header-col">
                        <h1><span>Habilidades</span></h1>
                    </div>
                    <div class="nine columns main-col">
                        <p>
                            Tengo habilidades, principalmente en desarrollo web con el framework de React JS y en desarrollo de aplicaciones
                            Nativas en React Native, conocimientos en Redes para Switches y Routes y habilidades de Bases de datos, tanto en 
                            MySQL y SQL Server para almacenamiento de informacion.
                        </p>
                            <div class="bars">
                            <ul class="skills">
                                <li><span class="bar-expand illustrator"></span><em>ReactJS</em></li>
                                <li><span class="bar-expand illustrator"></span><em>React Native</em></li>
                                <li><span class="bar-expand wordpress"></span><em>.NET</em></li>
                                <li><span class="bar-expand css"></span><em>CSS</em></li>
                                <li><span class="bar-expand illustrator"></span><em>SQL Server</em></li>
                                <li><span class="bar-expand illustrator"></span><em>MySQL</em></li>
                                <li><span class="bar-expand html5"></span><em>HTML5</em></li>
                                <li><span class="bar-expand jquery"></span><em>C#</em></li>
                                <li><span class="bar-expand illustrator"></span><em>Redes</em></li>
                                </ul>
                            </div>
                        </div> 
                </div> 
            </section>
         );
    }
}
 
export default Resume;