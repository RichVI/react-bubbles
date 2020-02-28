import React, { useState, useEffect } from "react";
import { Pack } from "@potion/layout";
import { Svg, Circle,Area  } from "@potion/element";

const Bubbles = ({ colors }) => {
  const [bubbleData, setBubbleData] = useState([]);
  useEffect(() => {
    const generateBubbleData = colors.map((_, i) => ({
      value: Math.floor(Math.random() * (colors.length * 2)) + 1,
      key: `${i + 1}`
    }));
    setBubbleData(generateBubbleData);
  }, [colors]);

  return (
    <div className="bubble-wrap">
      <p>bubbles</p>
      <Svg width={800} height={800}>
        
        <Pack
          data={{
            children: bubbleData
          }}
          sum={datum => datum.value}
          size={[600, 600]}
          includeRoot={false}
          nodeEnter={d => ({ ...d, r: 0 })}
          animate
        >
          {nodes =>
            nodes
              .map(({ x, y, r, key }, i) => {
                if (i < colors.length) {
                  return (
                    <>
                    <Circle key={key} cx={x} cy={y} r={r} fill={colors[i].code.hex} />
                    <Area
  x={d => d.x}
  y1={d => d.y1}
  y0={80}
  points={[
    { x: 10, y1: 20 },
    { x: 30, y1: 40 },
    { x: 40, y1: 30 },
    { x: 50, y1: 70 },
    { x: 70, y1: 40 },
    { x: 90, y1: 50 },
  ]}
  fill='black'
/>
                    </>
                    
                  );
                }
                return null;
              })
              .filter(v => v)
          }
        </Pack>
      </Svg>
    </div>
  );
};

export default Bubbles;
