import React from 'react'
import './modal.css'
import {motion} from 'framer-motion'


const Modal = ({selectedImg, setSelectedImg}) => {

    const handleClick=(e) =>{
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null);
        }
    }
  return (
    <motion.div className='backdrop' onClick={handleClick}
    initial={{opacity:0}}
    animate={{opacity:1}}
    >
        <motion.img src={selectedImg} alt="modal-pic" 
        initial={{scale:0.1}}
        animate={{scale:1}}
        />
    </motion.div>
  )
}

export default Modal