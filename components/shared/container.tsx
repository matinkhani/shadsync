import React, { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  grid?: boolean;
  className?: string;
  gridClassName?: string;
}

const Container: FC<Props> = ({ children, grid, className, gridClassName }) => {
  return (
    <div className={`w-full flex justify-center ${className}`}>
      <div className="max-w-[1340px] w-full">
        {grid ? (
          <div
            className={`grid ${gridClassName} grid-cols-4 md:grid-cols-8 lg:grid-cols-12 h-full`}
          >
            {children}
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default Container;
