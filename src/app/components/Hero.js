'use client';

import { useContext } from "react";
import {SearchContext } from '../context/search';
import  Search from './Search';
import Image from "next/image";
import {motion,easeInOut } from 'framer-motion';
import {fadeIn} from '/variant';

export default function Hero() {
    const {searchActive} = useContext(SearchContext);

    return (<section className=" h-screen  pt-8 xl:h-[98vh] bg-[#b2b7c2]/10" id='home'>
    <div className=" container mx-auto h-full xl:pt-10">
    <div className="flex flex-col xl:flex-row  justify-center items-center
    xl:justify-start h-full"> 
      <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
         <motion.h1 
         className="h1"
         variants={fadeIn('down',0.2)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once:false,amount:0.6}}
         
         >
          Explore the Finest <span className=" text-accent-default">Global</span> {' '}
          Offers
         </motion.h1>
         <motion.p 
         className="description max-w-[550px] mx-auto mb-6 xl:mx-0 xl:mb-10"
         variants={fadeIn('down',0.4)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once:false,amount:0.6}}
         >
            Find you ideal ride for any adventure with our diverse range Offers
            affordable and dependable car rentals.
         </motion.p>
         <motion.div className="flex gap-x-3 justify-center xl:justify-start"
                  variants={fadeIn('down',0.6)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{once:false,amount:0.8}}
         >
            <button className=" btn-cta">
               <Image 
               src={'/icons/buttons/app-store.svg'} 
               width={132}
               height={36}
               alt=''
               />
            </button>
            <button className=" btn-cta">
               <Image 
               src={'/icons/buttons/google-play.svg'} 
               width={132}
               height={36}
               alt=''
               />
            </button>
         </motion.div>
         </div>
      <motion.div className="relative w-full h-full max-h-[50vh] md:max-w-[70vw]
      xl:max-w-[80vw] xl:max-h-[60vh] xl:absolute xl:-right-[100px] 
      min-[1680px]:right-[120px] xl:top-48"
      variants={fadeIn('up',0.6)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false,amount:0.6}}   
      >
         <Image
          src={'/images/hero/car.svg'}
          fill
          alt=''
          priority
          style={{objectFit:'contain'}}
         />
        
      </motion.div>
    </div>  
   </div>
    {searchActive?(
     <motion.div className=" fixed top-[100px] z-10 w-full max-w-[1920px]"
     initial={{y:'-100%'}}
     animate = {{y:'0'}}
     transition={{easy:easeInOut}}

     >
      <Search />
     </motion.div>
    )
    :(
      <div className=" -mt-12 w-full max-w-[1300px]  mx-auto ">
     <motion.div 
     variants={fadeIn('up',0.8)}
     initial='hidden'
     whileInView={'show'}
     viewport={{once:false,amount:0.2}}   
     >
        <Search />
     </motion.div>
     </div>
    )}
    </section>);
 }