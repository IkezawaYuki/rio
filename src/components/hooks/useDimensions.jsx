import { useState, useEffect } from "react";

const defaultDimensions = {
  width: 0,
  height: 0,
} 

const useDimensions = (targetRef) => {
  let [dimensions, setDimensions] = useState(defaultDimensions);
  const node = targetRef.current;

  const updateDiminsions = (node) => {
    return node === null 
      ? defaultDimensions
      : {
        width: node.offsetWidth,
        height: node.offsetHeight,
      };
  };

  dimensions = updateDiminsions(node);

  useEffect(() => {
    const resizeDimensions = () => {
      setDimensions(updateDiminsions(node));
    };
    window.removeEventListener("resize", resizeDimensions);
    window.addEventListener("resize", resizeDimensions);
  }, [node]);
  return dimensions;
}

export default useDimensions;