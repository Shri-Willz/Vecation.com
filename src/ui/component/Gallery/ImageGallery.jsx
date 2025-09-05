import React from "react"
import Japan from "../../../../public/assets/images/japan.jpg"
import Italy from "../../../../public/assets/images/italy.jpg"
import Greece from "../../../../public/assets/images/greece.jpg"
import ThaiLand from "../../../../public/assets/images/thailand.jpg"
import India from "../../../../public/assets/images/india.jpg"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { StarIcon} from '@heroicons/react/20/solid'
import { Link,useParams } from "react-router-dom"

const pop_country = [
    {
        id : 1,
        country_name :"Japan",
        image :Japan,
        startrating:"4.5"
    },
    {
        id : 2,
        country_name :"Italy",
        image :Italy,
        startrating:"4.7"
    },
    {
        id : 3,
        country_name :"Greece",
        image :Greece,
        startrating:"4.0"
    },
    {
        id : 4,
        country_name :"Thai Land",
        image :ThaiLand,
        startrating:"4.3"
    }, 
    {
        id : 5,
        country_name :"India",
        image :India,
        startrating:"4.5"
    }
]
const responsive = {
    xldesktop:{
        breakpoint: { max: 3000, min: 1440 },
        items: 4,
        slidesToSlide: 1 // optional, default to 1.
    },
    desktop: {
        breakpoint: { max: 1440, min: 1024 },
            items:3,
            slidesToSlide: 1 // optional, default to 1.
        },
    tablet: {
            breakpoint: { max: 1024, min: 640 },
            items: 3,
            slidesToSlide: 2 // optional, default to 1.
        },
    mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        }
    };



export default function Country(props) { 
    return(
                    <Carousel
                        draggable={true}
                        swipeable={true}
                        responsive={responsive}
                        infinite={true}
                        >
                        
                    {
                    pop_country.map((items) => (
                        <div className="mx-auto mt-6 w-44 md:w-52 lg:w-[280px] xl:w-[325px]">
                            <Link to='/county:' key={items.id}>
                            <img src={items.image} alt={items.country_name} className="h-48 w-44 md:w-52 md:h-60 lg:w-[280px] lg:h-72 xl:w-[325px] xl:h-[400px] rounded-lg cursor-pointer"></img>
                            <div className="flex  items-center justify-between"> 
                            <p className="m-2 md:text-lg lg:text-2xl">
                                {items.country_name}
                            </p>
                            <p className="flex md:text-lg lg:text-2xl items-center">
                                <StarIcon  className="fill-yellow-400 size-4 lg:size-6 mr-1 " /> <span>{items.startrating}</span>
                            </p>
                            </div>
                            </Link>
                            </div>
                        
                    ))}
                    </Carousel>   
        
    )
}