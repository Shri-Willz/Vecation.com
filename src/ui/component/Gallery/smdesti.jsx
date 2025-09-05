import Imagegallery from "./ImageGallery.jsx";

export default function smdestination () {
    return(
        <div className=" md:mx-[30px] xl:mx-[100px] lg:mt-32">
            <div className="grid grid-cols-1 justify-between items-center ">
                <h1 className="text-[24px] lg:text-[30px] font-merri m-2 ">
                    Popular destinations
                </h1>
                <div className=" flex justify-end col-end-3">
                <p className="font-pop w-52 text-gery text-[10px] justify-items-end mr-2  ">
                    Uncover the world's most sought-after travel spots with our curated list of popular destinations.
                </p>
            </div>
            </div>
            
            <Imagegallery /> 
        </div>
    )
}