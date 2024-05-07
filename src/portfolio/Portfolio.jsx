import "./Portfolio.scss"
import React, { useRef } from 'react';
import {motion,useScroll, useSpring, useTransform} from "framer-motion"
const items = [
    {
        id: 1,
        title: "Svensk Husman",
        img: "/husmangubbe.png",
        desc: "Under min tid som student på kursen Produktutveckling i medieteknik med metoden Design-Build-Test ",
    },
    {
        id: 2,
        title: "Svensk Husman",
        img: "/husmangubbe.png",
        desc: "Under min tid som student på kursen Produktutveckling i medieteknik med metoden Design-Build-Test ",
    },
    {
        id: 3,
        title: "Svensk Husman",
        img: "/husmangubbe.png",
        desc: "Under min tid som student på kursen Produktutveckling i medieteknik med metoden Design-Build-Test ",
    },
    {
        id: 4,
        title: "Svensk Husman",
        img: "/husmangubbe.png",
        desc: "Under min tid som student på kursen Produktutveckling i medieteknik med metoden Design-Build-Test ",
    }
  
]
const Single = ({ item }) => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target:ref,
        //offset: ["start start", "end start"]
    });
    const y = useTransform(scrollYProgress, [0,1],[-250,250]);

    return (
      <section ref={ref}>
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref = {ref}>
                <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{y}} >
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <button>Läs mer</button>
            </motion.div>
          </div>
          </div>
      </section>
    );
  };
  

  const Portfolio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref });

    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Portfolio</h1>
                <motion.div style={{ scaleX }} className="progressbar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} scrollYProgress={scrollYProgress} />
            ))}
        </div>
    );
};

export default Portfolio
