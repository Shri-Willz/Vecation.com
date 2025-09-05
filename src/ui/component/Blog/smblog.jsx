import React from "react";
import {ArrowLongRightIcon} from '@heroicons/react/24/outline'
import lst from "./lstofblog.js"
import { Link } from "react-router-dom";



function smblog() {

    return(
        <div className=" grid grid-cols-2 mx-[16px] mt-20 md:mx-[30px] xl:mx-[100px] p-4 ">
            <div className="flex flex-col gap-2 col-span-2 md:col-span-1 md:justify-center">
                <h1 className=" mb-2 font-merri font-semibold md:text-xl lg:text-2xl xl:text-3xl">
                    Travel Is like a Food Of Mind
                </h1>
                <p className="mb-2 font-pop text-gery">
                    Discover The allure of travel through captivating stories
                </p>
                <Link to="/contact" >
                    <button className=" font-pop border p-2 w-32 rounded-s-3xl rounded-e-3xl px-2 md:text-lg  bg-primary text-white flex justify-center items-center  hover:bg-secondary hover:text-primary">
                    Explore <ArrowLongRightIcon className = "size-5 ml-1" />
                    </button>
                </Link>
            </div>
            
            <div className=" col-span-2 md:col-span-1">
                {
                    lst.map((items) =>
                    (
                        <div className=" flex gap-2 py-6" key={items.id}>
                            <img src={items.src} alt={items.name} className=" bg-secondary  rounded-e-lg rounded-s-lg h-[160px]   w-36 "></img>
                            <div className="flex flex-col gap-2 lg:justify-evenly pl-2  ">
                                <div className="flex gap-2 text-sm">
                                    <p className="bg-gray-200 rounded-lg px-4">
                                        {items.category[0]}
                                    </p>
                                    <p className="bg-gray-200 rounded-lg px-4">
                                        {items.category[1]}
                                    </p>
                                </div>
                                <div>
                                    <h1 className="text-lg font-merri md:text-xl lg:text-2xl pb-10 pt-2">
                                        {items.name}
                                    </h1>
                                </div>
                                <div className=" text-sm flex gap-2 ">
                                    <p>
                                        {items.Date} 
                                    </p>
                                    <p>
                                        |
                                    </p>
                                    <p>
                                        {items.min}
                                    </p>
                                </div> 
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default smblog;