import Img3 from "../../../../public/assets/images/img3.jpg"
import { ArrowUpRightIcon} from '@heroicons/react/20/solid'
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"
import { useState } from "react"
import { Link } from "react-router-dom"





export default function smaboutus() 
{
    const [count, setcount] = useState(false)
    return(
        <div className="grid grid-col-1 md:mx-[30px] xl:mx-[100px] md:grid-cols-2 md:justify-betwee mx-2 ">
            <div className="h-[500px] md:h-[600px] lg:h-[700px] xl:h-[750px] mb-4 md:mb-0 mx-auto md:p-8 ">
                <img
                    src={Img3}
                    alt="mountine image"
                    className="max-h-full rounded-lg mx-auto w-[408px] xl:w-[500px] md:h-[480px] lg:h-[750px] "
                >
                </img>
            </div>
            <div className="col-span-1 h-[450px] font-pop items-start md:mt-8 ">
                <p className="mb-4 md:text-xl md:ml-0 ">
                    About us
                </p>
                <h1 className="font-pop font-semibold mt-4 mb-4 md:mt-0 md:mb-4 md:text-2xl md:text-left">
                    Embark on an Ecip Adventure to the Mystories and Uncharted Land and Beyond
                </h1>
                <p className="mb-4 md:text-lg  text-gery ">
                    Vecation.com is your ultimate travel offering personalized intineraries and unforgotable experience whether you're seeking adventure, relation or cultural exploration, 
                    <span className="hidden lg:block">vecation.com crafts journeys that cater to your unique preference. Discover the world with ease and confidience, Knowing that very detail is taken care of by our expert team </span>
                </p>
                <label className="flex">
                <Link to="/about">
                    <button type="button"  className="text-primary md:ml-0 ">
                    learn more<ArrowUpRightIcon  className="size-4 fill-primary float-right mt-1  "/>
                    </button>
                </Link>
                </label>
                <ScrollTrigger onEnter={() => setcount(!count)} onExit={() => setcount(!count)}> 
                <div className="mx-auto inline-flex w-full gap-10 lg:gap-24 mt-8 lg:mt-32 justify-evenly ">
                
                    <div className="text-primary">
                        {count && <CountUp start={0} end={100} duration={2} delay={0} className="text-primary text-[24px] md:text-[40px]"/>}
                        <span className=" text-[20px] lg:text-[36px]">+</span>
                        <p className=" text-[18px]  lg:text-[20px]  text-gery ">
                            Countries
                        </p>
                    </div>
                    <div className="text-primary">
                        {count && <CountUp start={0} end={171} duration={2} delay={0} className="text-primary text-[24px] md:text-[40px]"/>}
                        <span className=" text-[20px] lg:text-[36px]">+</span>
                        <p className=" text-[18px] lg:text-[20px]  text-gery">
                            Group Tour
                        </p>
                    </div>
                    <div className="text-primary">
                        {count && <CountUp start={0} end={69} duration={2} delay={0} className="text-primary text-[24px] md:text-[40px]"/>}
                        <span className=" text-[20px] lg:text-[36px]">+</span>
                        <p className=" text-[18px] lg:text-[20px]  text-gery">
                            Group
                        </p>
                    </div>
                
                </div>
                </ScrollTrigger>
            </div>
        </div>
    )
}