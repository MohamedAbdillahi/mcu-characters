import React from 'react'
import {motion} from 'framer-motion'
const FakeCard = () => {
  return (
    <motion.div  className={"relative block animate-pulse w-[150px] h-[225px] bg-slate-300 rounded-md"} exit={{ opacity:0 }}
    initial={{ opacity:0 }}
    animate={{ opacity:1 }}>
      
    </motion.div>
  )
}

export default FakeCard