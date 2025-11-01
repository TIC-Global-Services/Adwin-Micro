import React from "react";
import clsx from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  /** 
   * Disable default padding (useful for banners or full-width layouts)
   * @default false
   */
  noPadding?: boolean;
  /** 
   * Optionally control max width (default: 1280px)
   */
  maxWidth?: string;
}

const ContainerLayout: React.FC<ContainerProps> = ({
  children,
  className,
  noPadding = false,
  maxWidth = "",
}) => {
  return (
    <div
      className={clsx(
        "mx-auto w-full",
        maxWidth,
        !noPadding && " px-6 md:px-14",
        className
      )}
    >
      {children}
    </div>
  );
};

export default ContainerLayout;
