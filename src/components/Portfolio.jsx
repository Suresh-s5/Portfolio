import React from "react";
import portfolio from "./data/portfolio";
import PortfolioItems from "./Portfolioitems";
import Title from "./Title";

function Portfolio(){
    return(
       
        <div className="flex flex-col  md:flex-row justify-center item-center p-4" >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                   
            {portfolio.map(project =>(
                <PortfolioItems  
                title={project.Title}
                stack={project.Stack} 
                link={project.Link}
                />
               ))}
            </div>
          
        </div>
      
    );
}

export default Portfolio;