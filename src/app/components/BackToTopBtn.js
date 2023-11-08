'use client';
import React,{useEffect,useState} from "react";
import { Link } from "react-scroll";
import { FaChevronUp} from 'react-icons/fa';


export default function BackToTopBtn() {
   const [isActive,setIsActive] = useState(false);

   useEffect(()=>{
       
      const handleScroll = () =>{
          if(window.scrollY >400 ){
              setIsActive(true);
          }
          else{
            setIsActive(false);
          }
     

      };

     window.addEventListener('scroll',handleScroll);

     return ()=>{
      window.removeEventListener('scroll',handleScroll);
     };


   })

   return (
   <Link 
    to="home"
    smooth={true}
   className={`${!isActive && 'hidden' } fixed bg-accent-default hover:bg-accent-hover w-12 h-12
   right-16 bottom-11 z-20 cursor-pointer flex justify-center items-center
   text-white border-white boder-2`}>
      <FaChevronUp className=' text-xl'/>
   </Link>
      );
}