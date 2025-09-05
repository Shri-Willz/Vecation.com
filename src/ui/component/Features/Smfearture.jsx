import Expert from "../../../../public/assets/svg/expert.svg"
import Aeroplane from "../../../../public/assets/svg/airplane.svg"
import Bus from "../../../../public/assets/svg/bus.svg"
import Map from "../../../../public/assets/svg/map.svg"
import {ArrowLongRightIcon} from '@heroicons/react/24/outline'
import { Link } from "react-router-dom"


const features = [
    {id:1 ,Name :"Expert Guid",Descripation : "Expert guides provide customized advice on dining, and activities.",src : Expert},
    {id:2 ,Name :"Comfy Vehicle",Descripation : " vehicle equipped with ergonomic recliner seats.",src : Bus},
    {id:3 ,Name :"Travel Support",Descripation : " Travelers can save, share, and access their itineraries on multiple devices.",src : Aeroplane},
    {id:4 ,Name :"Rare Places",Descripation: "The 'Hidden Gems Explorer' is a specialized feature designed for travelers.",src : Map}
]

export default function Feature () {
    return(
        <div className=" hidden sm:block md:grid md:grid-cols-2 items-center mt-20 md:mx-[30px] xl:mx-[100px]">
            <div className="flex flex-col gap-3 flex-wrap align-content-start">
                <h1 className="font-merri font-semibold md:text-xl lg:text-2xl xl:text-3xl">
                    Why do people travel with us
                </h1>
                <p className=" md:mt-0 font-pop  text-gery">
                    Embark on a journey filled with joy and wonder! 
                </p>
                <Link to="/contact">
                    <button className="border font-pop w-44 p-2 rounded-s-3xl rounded-e-3xl md:text-lg  bg-primary text-white flex justify-center items-center  hover:bg-secondary hover:text-primary">
                        Contact Us <ArrowLongRightIcon className = "fill-dark size-5 ml-1" />
                    </button>
                </Link>
            </div>
            <div className="grid grid-cols-2 lg:gap-4 xl:text-xl m-4">
                {
                    features.map((item) => (
                    
                    <div key={item.id} className=" mx-auto ml-1 md:ml-2 mt-6 items-center ">
                        <img
                            src={item .src}
                            className="size-8 fill-primary border-[1px] border-primary rounded-full p-1"
                        >
                        </img>
                        <h1 className="font-pop font-medium text-dark">
                            {item.Name}
                        </h1>
                        <p className="font-pop text-sm text-gery ">
                            {item.Descripation}
                        </p>
                    </div> 
                    ))
                }
            </div>
        </div>
    )
}