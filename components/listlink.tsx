import Link from "next/link";
// import * as React from "react"

const ListLink = ({ href, label }) => {
  return (
    <div className="not-prose relative group">
      <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-neutral-700 to-neutral-300 text-xs opacity-75 blur "></div>
      <Link
        href={href}
        className="relative mx-0 flex content-between gap-0 rounded-lg  py-4 pl-5 leading-none group-hover:text-primary bg-neutral-900"
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
