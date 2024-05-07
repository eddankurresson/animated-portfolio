import { useEffect, useState } from "react";
import { motion } from "framer-motion";  // Ensure motion is imported
import "./Cursor.scss";

const Cursor = () => {
    const [position, setPosition] = useState({x: 0, y: 0});  // Corrected to y: 0 for proper initialization

    useEffect(() => {
        const mouseMove = (e) => {
            setPosition({x: e.clientX, y: e.clientY});
        };
        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);  // Dependency array is empty to ensure this runs only once after initial render

    return (
        <motion.div className="cursor" style={{ x: position.x+10, y: position.y+10 }}></motion.div>  // Use style prop to animate position
    );
}

export default Cursor;
