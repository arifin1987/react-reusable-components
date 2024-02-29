import { twMerge } from "tailwind-merge";
import cn from "../../utils/cn";

const Button = ({ className, variant }) => {
  const getVariant = () => {
    switch (variant) {
      case "outline":
        return "btn-outline";
      case "ghost":
        return "btn-ghost";
      default:
        return "btn-solid";
    }
  };
  return (
    <button
      className={cn(
        getVariant(variant),

        className
      )}
    >
      Click
    </button>
  );
};

export default Button;
