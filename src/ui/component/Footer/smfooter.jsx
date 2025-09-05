import Logo from "../../../../public/assets/svg/logo.svg"
import Facebook from "../../../../public/assets/images/facebook.png"
import Instagram from "../../../../public/assets/images/instagram.png"
import Youtube from "../../../../public/assets/images/youtube.png"
import Linkedin from "../../../../public/assets/images/linkedin.png"
import Phone from "../../../../public/assets/svg/phone.svg"
import Mail from "../../../../public/assets/svg/mail.svg"
import Facebook_white from "../../../../public/assets/svg/facebook-white.svg" 
import Instagram_white from "../../../../public/assets/svg/instagram-white.svg"
import Youtube_white from "../../../../public/assets/svg/youtube-white.svg"
import Linkedin_white from "../../../../public/assets/svg/linkedin-white.svg"
import { Link } from "react-router-dom"



export default function smfooter(){
    return(
        <div className=" bg-dark h-[410px] md:h-[350px] lg:h-[400px] ">
            <div className="mx-[14px] md:mx-[30px] xl:mx-[100px] grid grid-cols-12">
                <div className="text-white pt-4 md:pt-0 mt-6 col-span-12 md:col-span-6">
                    <h1 className="font-pop font-medium text-2xl md:text-3xl lg:text-4xl xl:text-6xl">
                        Travel The World
                    </h1>
                    <p className="font-pop text-xs md:text-xs lg:text-sm text-gray-300 ">
                        Uncover the magic of travel with us. <br/> We'll take you to the most beautiful places on earth.
                    </p>
                </div>
                <div className="mt-6 col-span-12 md:col-span-6">
                    <form>
                        <label className="text-white font-pop text-xl lg:text-2xl">
                            Subcribe us
                            <div className="flex mt-2">
                                <input placeholder="Enter your email"className="bg-white w-full rounded-s-full rounded-e-full placeholder-gray-400 text-sm md:text-sm lg:text-lg p-2 text-black outline-none " type="text"></input>
                                <button type="submit" className="bg-primary text-white rounded-s-full rounded-e-full p-2 ml-2 w-20 flex justify-center items-center"> 
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>
                                </button>
                            </div>
                        </label>
                    </form>
                </div>
                    
                <hr className="mt-4 bg-primary col-span-12">
                </hr>
                <div className=" mt-4 h-full">
                    <div className=" w-32 col-span-3 md:col-span-4">
                        <Link to='/contact'>
                            <img src={Logo} alt="logo" className="size-10"></img>
                        </Link>
                        <p className="text-gray-300 font-pop text-[10px] md:text-sm lg:text-lg mt-2">
                            Travel Enjoy, Explore, <br/> Every Moment
                        </p>
                        <div className="flex mt-4 md:hidden  gap-1">
                            <img src={Facebook} alt="facebook" className="size-6 border p-1 rounded-full border-none bg-glow ml-0"></img>
                            <img src={Instagram} alt="instagram" className="size-6 border p-1 rounded-full border-none bg-glow"></img>
                            <img src={Youtube} alt="facebook" className="size-6 border p-1 rounded-full border-none bg-glow"></img>
                            <img src={Linkedin} alt="instagram" className="size-6 border p-1 rounded-full border-none bg-glow"></img>
                        </div>
                    </div>
                </div>
                <div className="col-start-5 col-span-3  md:col-start-4">
                    <h1 className="text-white font-pop text-lg mt-4 lg:text-xl xl:text-2xl">
                        Quick Links
                    </h1>
                    <ul className="text-gray-300 font-pop text-xs ml-2 flex flex-col gap-1 md:text-sm md:mt-2 md:gap-2 lg:text-lg">
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/contact'><li>Country</li></Link>
                        <Link to='/blog'><li>Blog</li></Link>
                        <Link to='/contact'><li>Contact</li></Link>
                    </ul>
                </div>
                <div className="hidden md:inline-grid col-start-7 col-span-2">
                    <h1 className="text-white font-pop text-lg mt-4 lg:text-xl">
                        Social Media
                    </h1>
                    <div className="md:flex md:flex-col md:mt-2 md:gap-2">
                        <a href='https://www.facebook.com/'>
                            <label className=" flex gap-2 items-center text-white">
                                <img src={Facebook_white} alt="facebook" className="size-6 md:size-7 lg:size-8 lg:text-lg border p-1 rounded-full border-none bg-glow"></img>
                                Facebook
                            </label>
                        </a>
                        <a href='/instagram.com'>
                            <label className=" flex gap-2 items-center text-white">
                                <img src={Instagram_white} alt="facebook" className="size-6 md:size-7 lg:size-8 lg:text-lg border p-1 rounded-full border-none bg-glow"></img>
                                Instagram
                            </label>
                        </a>                        
                        <a href='/youtube.com'>
                            <label className=" flex gap-2 items-center text-white">
                                <img src={Youtube_white} alt="facebook" className="size-6 md:size-7 lg:size-8 lg:text-lg border p-1 rounded-full border-none bg-glow"></img>
                                Youtube
                            </label>
                        </a>
                        <a href='/linkedin.com'>
                            <label className=" flex gap-2 items-center text-white">
                                <img src={Linkedin_white} alt="facebook" className="size-6 md:size-7 lg:size-8 lg:text-lg border p-1 rounded-full border-none bg-glow"></img>
                                Linkedin
                            </label>
                        </a>
                    </div>
                </div>
                <div className="col-start-9 md:col-start-10 col-span-4 md:col-span-3">
                        <h1 className="text-white font-pop text-lg mt-4">
                            Contact
                        </h1>
                        <ul className="text-gray-300 font-pop text-xs mt-2 flex flex-col gap-1">
                            <button onClick={() =>{
                                window.open("tel:+911234567890");}}>
                                <li className="flex gap-2 items-center">
                                    <img src={Phone} className="size-6 md:size-7 lg:size-8 lg:text-lg border p-1 rounded-full border-none bg-glow md:text-sm md:mt-2 "></img>
                                    <span  className="md:text-sm lg:text-lg"> +91 1234567890 </span> 
                                </li>
                            </button>
                            <button onClick={() =>{
                                window.open("https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKkkJlTwgVJJsXHkMtfpgzXXCFcChMVxdDZGxdpjjnhKdqXwTXDszXfHxGKCqCzMLrzbmpn");
                            }}>
                                <li className="flex gap-2 items-center">
                                    <img src={Mail} className="size-6 md:size-7 lg:size-8  border p-1 rounded-full border-none bg-glow md:mt-2"></img>
                                    <span className=" md:text-sm lg:text-lg">vecat@gmail.com</span> 
                                </li>
                            </button>
                    </ul>
                </div>
            </div>
        </div>
    )
}