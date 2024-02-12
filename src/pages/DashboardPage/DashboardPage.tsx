import React from "react";
import Titlebar from "../../components/Titlebar/Titlebar";
import Card, {CardProps} from "../../components/Card/Card";
import { motion } from 'framer-motion';
import cards from "../../components/Card/mockCards";


const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animation: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    }
  }),
}

const DashboardPage: React.FunctionComponent = () => {
 return (
   <div className="w-screen pb-8 bg-[#011019] flex flex-col items-center">
     <Titlebar/>
     <div className="flex flex-row gap-2 pt-32 max-w-6xl w-full justify-center">
       <div className="w-full max-w-2xl flex flex-col gap-4 h-auto">
         {cards.map((card, index) => (
           <motion.div
             key={index}
             variants={fadeInAnimationVariants}
             initial="initial"
             animate="animation"
             whileInView="animation"
             viewport={{
               once: true,
             }}
             custom={index}
             whileHover={{scale: 1.02}}
             whileTap={{scale: 1}}
             className="hover:opacity-50"

           >
             <Card key={index} {...card}/>
           </motion.div>
         ))}
       </div>
       <div className="lg:w-[20vw] w-96 h-96 hidden lg:flex ml-4 flex-col">
         <p className="text-white font-bold underline">
           More Articles
         </p>
         <div className="text-white/30 text-xl mt-2 flex flex-col gap-2">
           {cards.map((card, index) => (
             <p className="hover:text-blue-500 duration-300 transition-all cursor-pointer">
                {card.user.postTitle}
             </p>
           ))}
         </div>
       </div>
     </div>
   </div>

 )
}

export default DashboardPage;
