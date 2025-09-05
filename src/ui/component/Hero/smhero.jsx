import React from "react";
import Img1 from "../../../../public/assets/images/img1.jpg"
import { motion } from "motion/react";
import Form from "./form.jsx"
import Img2 from "../../../../public/assets/images/img2.jpg"
import { Link } from "react-router-dom";
function Hero () {
    return(
        <div className="grid grid-cols-4 md:grid-cols-12 md:mx-[30px] xl:mx-[100px] max-w-full p-6 md:px-1 md:ml-8 justify-items-center mb-8 mx-auto">
            <div className="col-span-4 md:col-span-6 ">
                <h1 className="font-merri font-black text-[24px] text-dark lg:text-6xl">
                    Travel Enjoy <span>Explore Every Moment .
                    <svg 
                    viewBox="0 0 179 14"
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative left-2 bottom-3 w-40 lg:w-60">
                    <motion.path
                    initial = {{pathLength: 0}}
                    whileInView={{pathLength:1}}
                    transition={{
                        duration:1.30,
                        ease:"easeInOut" ,
                    }}
                    d="M1 5.67705C58.7339 25.4446 104.874 -8.78444 178 5.67705" stroke="#12A277" strokeWidth="3"/>
                    </svg>
                    </span>
                </h1>
                <p className="font-pop  text-gery mt-2 text-[14px] lg:text-xl">
                Embark on a journey where every moment opportunity for discovery.
                </p>
                <Link to="/contact">
                    <button className="mt-6 w-32 text-primary border h-10  bg-secondary px-2 py-1 rounded-s-3xl rounded-e-3xl hover:text-white hover:bg-primary md:text-lg">
                        Contact us
                    </button>
                </Link>
            </div>
            <div className="col-span-4 mt-4 md:col-start-7 md:h-[200px] lg:h-[250px] md:col-end-13 xl:col-start-9">
                <img  src={Img1} alt="Durcula's castel" className="rounded-xl md:row-end-2 h-[px] lg:h-[600px] w-[500px] "/>
            </div>
            <Form />
            <div className="hidden lg:block col-span-3 lg:col-start-6 xl:col-start-8 ">
                    <img src={Img2} alt="beach" className="h-[290px] xl:h-[350px] rounded-2xl border-white border-4 "/>
            </div>
            
        </div>
    )
}

export default Hero;