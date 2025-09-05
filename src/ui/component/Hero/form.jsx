import Country from "./country.jsx"
import Calender from "./calender.jsx"
import Guest from "./guest.jsx"
import { MagnifyingGlassIcon} from '@heroicons/react/20/solid'
import { Link } from "react-router-dom"


export default function Form() {

return (
    <form className=" inline-flex flex-col col-span-4 w-full mt-4 items-center h-min lg:mt-6  md:mt-0 gap-6 bg-white mx-auto ">
        <Country />
        <Calender />
        <Guest />
        <Link to="/form">
            <button
                type="submit"
                className=" flex border-2 p-4 mt-4 rounded-full justify-center bg-primary"
                ><MagnifyingGlassIcon  className="size-4 md:size-6   lg:size-10 fill-white "/>
            </button>
        </Link>
    </form>
    
)
}
