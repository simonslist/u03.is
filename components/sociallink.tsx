// import * as React from "react"

const SocialLink = ({ d, href }) => {
  return (
    <a href={href}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        fill="currentColor"
        className="fill-black dark:fill-white"
        viewBox="0 0 24 24"
      >
        <path d={d} />
      </svg>
    </a>
  );
};

export default SocialLink;
