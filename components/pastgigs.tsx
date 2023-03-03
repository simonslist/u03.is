import Link from "next/link";
import Image from "next/image";
import f210923 from "../public/flyers/210923.png";
import f211001 from "../public/flyers/211001.jpg";
import f220404 from "../public/flyers/220404.jpg";
import f221013 from "../public/flyers/221013.jpeg";
import f221029 from "../public/flyers/221029.jpeg";
import f221111 from "../public/flyers/221111.jpg";
import f221201 from "../public/flyers/221201.jpg";
import f221216 from "../public/flyers/221216.jpg";
import f221229 from "../public/flyers/221229.jpg";
import f230112 from "../public/flyers/230112.jpg";
import f230119 from "../public/flyers/230119.png";
import f230120 from "../public/flyers/230120.jpg";
import f230126 from "../public/flyers/230126.jpeg";
import f230127 from "../public/flyers/230127.jpg";

const flyerStyle = "pb-2  rounded-sm";

const PastGigs = ({ href, label }) => {
  return (
    <div className="columns-4 gap-2 pt-10">
      <Image className={flyerStyle} src={f210923} alt="flyer" />
      <Image className={flyerStyle} src={f211001} alt="flyer" />
      <Image className={flyerStyle} src={f220404} alt="flyer" />
      <Image className={flyerStyle} src={f221013} alt="flyer" />
      <Image className={flyerStyle} src={f221029} alt="flyer" />
      <Image className={flyerStyle} src={f221111} alt="flyer" />
      <Image className={flyerStyle} src={f221201} alt="flyer" />
      <Image className={flyerStyle} src={f221216} alt="flyer" />
      <Image className={flyerStyle} src={f221229} alt="flyer" />
      <Image className={flyerStyle} src={f230112} alt="flyer" />
      <Image className={flyerStyle} src={f230119} alt="flyer" />
      <Image className={flyerStyle} src={f230120} alt="flyer" />
      <Image className={flyerStyle} src={f230126} alt="flyer" />
      <Image className={flyerStyle} src={f230127} alt="flyer" />
    </div>
  );
};

export default PastGigs;
