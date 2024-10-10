import React from "react";

function PortfolioItems({ title, stack, link }) {
    return (
        <>
            <div className=" border-2 border-stone-900 rounded-md overflow-hidden dark:border-white ">
                <div className="w-full p-4">
                    <h3 className="text-lg md:text-xl dark:text-white mb-2  md:mb-3 font-semibold dark:text-white ">{title}</h3>
                    <p className="flex flex-wrap gap-2 flex-row items-center justify-start md:text-sm dark:text-white">
                        {stack.map(items => (
                            <span className="inline-block px-2 py-1  font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                                {items}
                            </span>
                        )
                        )}
                    </p>
                    <a href={link} target="_blank">link</a>


                </div>

            </div></>
    );
}

export default PortfolioItems;