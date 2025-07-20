import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div className={`w-[84vw] max-w-screen-xl mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container; 