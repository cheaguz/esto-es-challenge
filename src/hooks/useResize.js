import { useState, useEffect } from 'react'

export const useResize = () => {
    const [isPhone , setIsPhone] = useState(window.innerWidth < 900 ? true : false)

    useEffect(()=>{
        handleResize();
        window.addEventListener("resize",handleResize);
        return () => window.removeEventListener("resize",handleResize);
    })
    
    const handleResize = () => {
        if(window.innerWidth < 900) setIsPhone(true)
        else setIsPhone(false)
    }

   

    return { isPhone }
}