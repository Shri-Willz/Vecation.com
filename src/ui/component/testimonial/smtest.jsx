import { useEffect } from "react";
import Testimonial from "./list_of_test"
import { StarIcon} from '@heroicons/react/20/solid'



export default function Test() {
    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");
        addAnimation();
        function addAnimation() {
            scrollers.forEach((scroller) => {
            // add data-animated="true" to every `.scroller` on the page
            scroller.setAttribute("data-animated", true);
            // Make an array from the elements within `.scroller-inner`
            const scrollerInner = scroller.querySelector(".scroller__inner");
            const scrollerContent = Array.from(scrollerInner.children);

            // For each item in the array, clone it
            // add aria-hidden to it
            // add it into the `.scroller-inner`
            scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
    });
});
}
},[])

    return(
        <div className="h-[250px] mt-20 md:mx-[30px] xl:mx-[100px]">
            <div className="text-center">
                <h1 className="font-pop font-semibold md:text-xl lg:text-2xl xl:text-3xl">
                    Trusted Words By People
                </h1>
                <p className="text-xs font-pop text-gery">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, voluptatum.
                </p>
            </div>
            <div className="scroller mt-6" data-direction="right" data-speed="Slow">
                <div className="scroller__inner">
                    {
                        Testimonial.map((items) =>{
                            return(
                                <div className="bg-gray-50 w-[300px] h-[175px] mx-auto mt-10 rounded-lg grid grid-cols-12 grid-rows-2" key={items.id}>
                                    <div className="bg-white w-28 h-28 rounded-full relative bottom-10 ml-1">
                                        <img src={items.src} alt={items.name} className="rounded-full w-28 h-28"></img>
                                    </div>
                                    <div className="w-40 h-12  col-start-6 flex flex-col mt-4">
                                        <p className="font-pop font-normal text-sm">
                                            {items.name}
                                        </p>
                                        <p className="flex">
                                            <StarIcon  className="fill-yellow-400 size-5 mr-1 mt-[2px] " /> <span className="size-4">{items.star}</span>
                                        </p>
                                    </div>
                                    <div className="col-start-1 relative bottom-4 col-span-12 p-4">
                                        <p className="font-pop text-xs text-gery">
                                            {items.review} 
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}