import {motion} from "framer-motion"
import {useState} from "react"
import './Hero.scss'
import logo from '../assets/KC.svg'
import Waitlist from '../Waitlist/Waitlist'

const Hero = () => {

    console.log()
    return <div className="wrapper">
        <div className="logo">
            <img src={logo} alt="KC Icon" />
        </div>

        {/* <div className="info">
            Under-dev
        </div> */}
        
        <div className="heading">
            <span className="accent-two">K</span><span className="accent-one">UUL</span>
            <span className="dot accent-one">.</span>
            <span className="hidden accent-two">club</span>
        </div>

        <motion.div className="heading-three accent-one"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
            delay: 1
        }}>
                Discover and Experience what you <span className="italic">&nbsp;LOVE</span>
        </motion.div>

        <motion.div className="accent-two heading-two"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                delay: 1.5
            }}
        >
                Connecting communities through events
        </motion.div>
        
        <Waitlist/>
    </div>
}

export default Hero;