import * as React from "react";
import { SVGProps } from "react";

const Bulb = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.429 22.8c0 .6.542 1.2 1.357 1.2h5.428c.815 0 1.357-.6 1.357-1.2v-1.2H5.43v1.2ZM9.5 0C4.207 0 0 3.72 0 8.4c0 2.88 1.629 5.4 4.071 6.84V18c0 .6.543 1.2 1.358 1.2h8.142c.815 0 1.358-.6 1.358-1.2v-2.76C17.37 13.68 19 11.16 19 8.4 19 3.72 14.793 0 9.5 0Z"
      fill="#EBC351"
    />
  </svg>
);

export default Bulb;
