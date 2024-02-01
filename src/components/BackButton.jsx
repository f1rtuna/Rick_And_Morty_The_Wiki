import React from 'react'
import {BiLeftArrowCircle} from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

export default function BackButton() {
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }

    return (
        <div className="cursor-pointer flex items-center absolute top-[15%] left-[10%]
                text-white uppercase font-gotham rounded-full
                bg-gray-800 border-4 border-white p-3 bg-opacity-50 z-10
                text-[1.5rem] font-oswald
                "
            onClick={goBack}
        >
            <BiLeftArrowCircle className='text-[2.5rem] mr-1'/>
            {/* <Link to= "/episode1" style={{ textDecoration: 'none', color: 'white' }}>Back to episode 1</Link> */}
            Back
        </div>
    )
}
