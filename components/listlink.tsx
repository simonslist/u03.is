import Link from "next/link";
// import * as React from "react"

const ListLink = ({ href, label }) => {
  return (
    <div className="not-prose my- group relative">
      <div className="absolute -inset-0.5 animate-tilt rounded-lg bg-gradient-to-r from-neutral-700 to-neutral-200 text-xs opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200 "></div>
      <Link
        href={href}
        className="relative mx-0 flex content-between gap-0 rounded-lg bg-neutral-900 py-4 pl-5 leading-none text-lg"
      >
        {label}
      </Link>
    </div>
  );
};

ListLink.defaultProps = {
  d: null,
};
export default ListLink;
