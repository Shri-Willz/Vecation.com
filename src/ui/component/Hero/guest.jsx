import { useState } from "react";
import { UsersIcon} from '@heroicons/react/20/solid'

function Guest() {

    const[guest,setguest] = useState(0)
    function pluse(event) 
    {
        event.preventDefault();
        setguest(guest+1);
    }
    function minus(event) 
    {
        event.preventDefault();
        setguest(guest-1);
    }

    return(
        <div className="w-full col-span-4 md:col-span-6 ">
        <label className='font-pop ml-8 text-[16px] md:text-[18px] lg:text-[20px] col-span-4 md:col-span-6 '>Guest
            <UsersIcon className='size-4 relative bottom-[18px] ml-2 m' />
            <input
                type='text'
                placeholder='no.of guest'
                value={guest}
                className='pl-2 outline-none bg-white  w-10/12'
            > 
            </input>
            <button className='rounded-full bg-secondary hover:bg-primary relative top-1 md:top-2 '>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#12A277" className="size-6  hover:fill-white" onClick={pluse}>
                <path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
            </svg>
            </button>
            <button className='rounded-full bg-secondary hover:bg-primary ml-2 relative top-1 md:top-2 ' onClick={minus}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#12A277"  className="size-6  hover:fill-white">
                <path fill-rule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
            </svg>
            </button>
        </label>  
    </div>
    
    )
}


export default Guest;