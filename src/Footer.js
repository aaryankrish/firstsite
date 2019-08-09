import React from 'react'
import {Link} from 'react-router-dom';

 function Footer() {
    return (
        <div>
        <footer>
		<ul>
		<li><Link to=""><i class="fa fa-facebook"></i></Link></li>
		<li><Link to=""><i class="fa fa-instagram"></i></Link></li>
		<li><Link to=""><i class="fa fa-twitter"></i></Link></li>
		<li >Copyrights 	&#169;</li>
		</ul>
        </footer>
        </div>
    )
}

export default Footer;