import { SVGProps } from "react";

export function MaterialSymbolsArrowShapeUp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      {/* Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE */}
      <path fill="#888888" d="M8 21v-6H3l9-11l9 11h-5v6z" />
    </svg>
  );
}
