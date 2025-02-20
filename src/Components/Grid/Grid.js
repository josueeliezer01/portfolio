import React, { useState, useEffect, useRef } from "react";
import "./Grid.css";
import { motion } from "framer-motion";
import {
  AutoAwesomeMotion,
  BarChart,
  DesignServices,
  GridView,
} from "@mui/icons-material";

function Grid() {
  const itemRefs = useRef([]); // References for each item in the grid
  const [inViewStates, setInViewStates] = useState(
    Array(4).fill(false) // Initialize state with false for all items
  );

  useEffect(() => {
    // Intersection observer setup (same as before)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.indexOf(entry.target);
          if (entry.isIntersecting) {
            setInViewStates((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Triggers when 10% of the item is visible
    );

    itemRefs.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => observer.disconnect(); // Clean up observer on unmount
  }, []);

  return (
    <div className="grid">
      <div className="grid__text">
        {/* Text section remains unchanged */}
      </div>
      <div className="skill">
        <div className="grid-container">
          {[
            { icon: <BarChart />, title: "UX Research", text: "..." },
            { icon: <GridView />, title: "UI Design", text: "..." },
            { icon: <DesignServices />, title: "Markup Design", text: "..." },
            { icon: <AutoAwesomeMotion />, title: "Prototyping Design", text: "..." },
          ].map((item, index) => (
            <motion.div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className="grid-item"
              initial={{ opacity: 0, y: 50 }}
              animate={inViewStates[index] ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              style={{
                // Updated grid layout properties
                gridRow: Math.ceil((index + 1) / 2), // Calculate row based on index
                gridColumn: (index % 2) === 0 ? 1 : 2, // Set column based on even/odd index
                backgroundColor: index % 2 === 0 ? "#d9d8d7" : "#bf9a54",
              }}>
              {item.icon}
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Grid;