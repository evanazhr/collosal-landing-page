import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const orbVariants = cva("rounded-full blur-[5px] absolute aspect-square", {
  variants: {
    variant: {
      "orb-1": "bg-linear-90  from-[#66FFC7] to-[#009C3E]",
      "orb-2": "bg-linear-90  from-[#FF81A6] to-[#FC165B]",
      "orb-3": "bg-[#6016FC]",
    },
    size: {
      default: "size-[55px]",
      sm: "size-[29px]",
      md: "size-[46px]",
    },
  },
  defaultVariants: {
    variant: "orb-1",
    size: "default",
  },
});

export default function orb({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof orbVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      data-slot="div"
      className={cn(orbVariants({ variant, size, className }))}
      {...props}
    />
  );
}
