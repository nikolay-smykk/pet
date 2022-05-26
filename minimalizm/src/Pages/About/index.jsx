import { motion } from 'framer-motion'
import './style.scss'

export const About = () => {
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth }}
            className="home"
        >
            <h1>/ popular products</h1>
            About US
        </motion.div>
    )
}
