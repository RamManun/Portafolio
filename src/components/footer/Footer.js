import React, { Component } from 'react';

class Footer extends Component {
    
    render() { 
        return ( 
            <footer>
                <div class="row">
                    <div class="twelve columns">
                        <ul class="social-links">
                        <li><a href="https://www.facebook.com/rammanun"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="https://twitter.com/ramcesloko"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/ramces-manun-722b30167/"><i class="fa fa-linkedin"></i></a></li>
                        <li><a href="https://www.instagram.com/ram_manun/"><i class="fa fa-instagram"></i></a></li>
                        <li><a href="https://github.com/RamManun"><i class="fa fa-github"></i></a></li>
                        </ul>
                        <ul class="copyright">
                        <li>&copy; Copyright 2020 Ram Manun</li>  
                        </ul>
                    </div>
                    <div id="go-top"><a class="smoothscroll" title="Back to Top" href="#home"><i class="icon-up-open"></i></a></div>
                </div>
            </footer>
         );
    }
}
 
export default Footer;