
import { useState } from 'react'
const date=new Date();
function Footer(){
    return(
        <footer>
            <p>Copyright © {date.getFullYear()} All rights reserved.</p>
        </footer>
    );

}
export default Footer;