import {motion} from "framer-motion"
import './Hero.scss'
import logo from '../assets/KC.svg'


const Hero = () => {
    return <div className="wrapper">
        <div className="logo">
            <img src={logo} alt="KC Icon" />
        </div>
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
        
        <motion.button class="button-join" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                delay:2
            }}
        >Join Us</motion.button>
    </div>
}

export default Hero;