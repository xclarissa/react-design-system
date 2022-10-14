import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps { 
  children: React.ReactNode;
  asChild?: boolean;
}

export function Button({ asChild, children }: ButtonProps) {
  
  const ButtonComponent = asChild ? Slot : 'button'
  return (
    <ButtonComponent
      className={clsx("py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white")}
    >
      {children}  
    </ButtonComponent>
  )
}
