import { Card } from '../../Components/Card'
import { IMG } from '../../assets/img'
import { motion } from 'framer-motion'

import './style.scss'

export const Home = () => {
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth }}
            className="home"
        >
            <h1>/ popular products</h1>
            <div className="content">
                {Object.keys(IMG).map((key, index) => (
                    <Card
                        title={key}
                        img={IMG[key].img}
                        price={IMG[key].price}
                        index={index}
                        key={key}
                    />
                ))}
            </div>
        </motion.div>
    )
}
