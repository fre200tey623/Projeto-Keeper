import React from "react";

function Footer(){
    const ano = new Date();
    return(
        <div>
            <footer>Copyright &copy; {ano.getFullYear()}</footer>
        </div>
    );
}

export default Footer;
