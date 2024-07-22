import * as React from "react";

import { cn } from "@/lib/utils";
import EyeVisibilityOffIcon from "../icons/eye-visibility-off-icon";
import EyeVisibilityOnIcon from "../icons/eye-visibility-on-icon";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  startIconOnclick?: () => void;
  endIconOnclick?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      startIcon,
      endIcon,
      endIconOnclick,
      startIconOnclick,
      ...props
    },
    ref
  ) => {
    const [passwordStatus, setPasswordStatus] = React.useState<"Hide" | "Show">(
      "Show"
    );
    const [initialType, setInitialType] = React.useState<
      React.HTMLInputTypeAttribute | undefined
    >(type);

    const changePasswordVisibility = () => {
      setPasswordStatus(passwordStatus === "Hide" ? "Show" : "Hide");
      setInitialType(initialType === "password" ? "text" : "password");
    };

    const showEyeIcon: { [key: string]: React.ReactNode } = {
      Hide: <EyeVisibilityOffIcon className="cursor-pointer" />,
      Show: <EyeVisibilityOnIcon className="cursor-pointer" />,
    };

    return (
      <div className="relative w-full">
        {startIcon && (
          <div
            className="absolute left-1.5 top-1/2 transform -translate-y-1/2"
            onClick={startIconOnclick}
          >
            {startIcon}
          </div>
        )}
        <input
          type={initialType}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            startIcon && "pl-8",
            endIcon && "pr-8",
            className
          )}
          ref={ref}
          {...props}
        />
        {endIcon ||
          (type === "password" && (
            <div
              className="absolute right-1.5 top-1/2 transform -translate-y-1/2"
              onClick={
                type === "password" ? changePasswordVisibility : endIconOnclick
              }
            >
              {type === "password" ? showEyeIcon[passwordStatus] : endIcon}
            </div>
          ))}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
