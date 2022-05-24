import { Card } from '../../Components/Card'
import { IMG } from '../../assets/img'

import './style.scss'

export const Home = () => {
    return (
        <section className="home">
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
        </section>
    )
}
