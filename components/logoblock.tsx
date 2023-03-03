import Image from "next/image";
import wb from "../public/logo/white-black.png";
import bw from "../public/logo/black-white.png";
import bg from "../public/logo/black-gray.png";
import br from "../public/logo/black-red.png";
import blg from "../public/logo/blue-gray.png";
import gy from "../public/logo/green-yellow.png";

const logostyle = "pb-2";

const LogoBlock = ({ href, label }) => {
  return (
    <div className="columns-6 gap-2 ">
      <Image className={logostyle} src={wb} alt="me" />
      <Image className={logostyle} src={bw} alt="me" />
      <Image className={logostyle} src={bg} alt="me" />
      <Image className={logostyle} src={br} alt="me" />
      <Image className={logostyle} src={blg} alt="me" />
      <Image className={logostyle} src={gy} alt="me" />
    </div>
  );
};

export default LogoBlock;
