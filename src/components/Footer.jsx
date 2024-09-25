import React from "react";

function Footer(){
    return(
    
          <div className="text-center flex flex-row justify-center items-center ">

            <a href="https://www.linkedin.com/in/suresh-s0005/" 
            target="_blank" rel="noopener noreferrer" 
            className="text-blue-600 underline hover:text-blue-800 mr-5">
            LinkedIN
            </a>

            <a href="https://github.com/Suresh-s5" 
            target="_blank" rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800 mr-5">
            github
            </a>
            {/* <a href=""></a> */}

          </div>
            

    );
}

export default Footer;