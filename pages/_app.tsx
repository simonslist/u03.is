import type { ReactElement } from "react";
import type { AppProps } from "next/app";

import "../style.css";

export default function Nextra({
  Component,
  pageProps,
}: AppProps): ReactElement {
  return <div>
    <Component {...pageProps} />
  </div>
}
