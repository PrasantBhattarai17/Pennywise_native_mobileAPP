import  { useEffect, useState } from 'react'

export const useDetailsOfUser = () => {
 const [data,setData]=useState<any>(null);
 const fetchUser=async()=>{
    const response=await fetch('https://api.github.com/users/PrasantBhattarai17');
    const json=response.json();
    console.log(json)
 }

useEffect(()=>{
setData(fetchUser());
},[])

  return data;
}

