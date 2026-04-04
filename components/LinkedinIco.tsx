import { SVGProps } from "react";

export function LineMdLinkedin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      {/* Icon from Material Line Icons by Vjacheslav Trushkin - https://github.com/cyberalien/line-md/blob/master/license.txt */}
      <circle cx="4" cy="4" r="2" fill="#888888" opacity="0">
        <animate fill="freeze" attributeName="opacity" dur="0.2s" to="1" />
      </circle>
      <g
        fill="none"
        stroke="#888888"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      >
        <g strokeDasharray="12" strokeDashoffset="12">
          <path d="M4 10v10">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.2s"
              dur="0.2s"
              to="0"
            />
          </path>
          <path d="M10 10v10">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.5s"
              dur="0.2s"
              to="0"
            />
          </path>
        </g>
        <path
          strokeDasharray="24"
          strokeDashoffset="24"
          d="M10 15c0 -2.76 2.24 -5 5 -5c2.76 0 5 2.24 5 5v5"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.7s"
            dur="0.3s"
            to="0"
          />
        </path>
      </g>
    </svg>
  );
}
