import Image from "next/image";
import simon from "../../public/simon.jpeg";

const Hero = () => {
  return (
    <div class=" min-h-screen bg-black md:min-h-0  md:py-20 ">
      <div class="flex grid-cols-12 flex-col px-10 text-gray-100 md:mx-7 md:grid lg:mx-10">
        <section class="text-center md:col-span-7 md:text-left ">
          <h1 class="pt-20 text-3xl font-bold md:pt-10  md:text-5xl lg:text-7xl">
            80% of my SHSAT students have gone on to a Specialized High School.
          </h1>
        </section>
        <Image
          src={simon}
          alt="Simon"
          class="rounded-lg shadow-2xl md:col-span-3 md:col-start-10 lg:mt-28"
        />
        <section class="mt-10 ml-10 text-center md:col-span-8 md:-mt-28 md:pl-36 md:text-left">
          <p class="text-md mb-0 text-base md:text-3xl">
            This is a special opportunity to drastically increase your child's
            chances of passing the SHSAT and attending a top tier school.
          </p>
          <a
            class=" btn btn-outline btn-red btn-md my-10 border-2 text-2xl "
            href="#consultation"
          >
            Get Your Free consultation
          </a>
        </section>
      </div>
    </div>
  );
};

export default Hero;
