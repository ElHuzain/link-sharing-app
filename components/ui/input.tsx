import * as React from "react"

import { cn } from "@/lib/utils"
import { FormMessage, useFormField } from "./form"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {

    const { error, formMessageId } = useFormField()

    return (
      <div className={cn("bg-white group flex py-3 items-center border focus-within:border-purple focus-within:shadow-xl focus-within:!shadow-active rounded-[8px]", error?.message && "border-red")}>
        {
          props.icon && <span className="mx-4">{props.icon}</span>
        }

        <input
          type={type}
          className={cn(
            "flex w-full text-dark-gray rounded-md bg-background text-sm border-0 outline-0 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
            className,
            error?.message && "text-red"
          )}
          ref={ref}
          {...props}
        />

        <FormMessage className="mx-4 whitespace-nowrap text-red text-body-s" />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }