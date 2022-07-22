import { useState , useEffect } from 'react'
import { getProjects } from '../services/projectServices';


export const useProject = () => {
    const [data , setData] = useState([]);

    useEffect( ()=> {
        setData( getProjects() )
      },[])

  return { data }
}
