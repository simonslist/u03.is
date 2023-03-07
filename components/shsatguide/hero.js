import Image from 'next/image';
import simon from '../../public/simon.jpeg';

const Hero = () => {
  return (
    <div class=' min-h-screen bg-black md:min-h-0  md:p-10 '>
      <div class='flex grid-cols-12 flex-col px-5 text-gray-100 md:mx-7 md:grid '>
        <section class=' md:col-span-7 '>
          <h1 class='py-20 text-3xl font-bold sm:text-center sm:text-3xl md:pt-5 md:text-left md:text-5xl lg:text-6xl '>
            80% of my SHSAT students have gone on to a Specialized High School.
          </h1>
        </section>
        <Image
          src={simon}
          alt='Simon'
          class='rounded-lg shadow-2xl md:col-span-4 md:col-start-9 lg:mt-44'
        />
        <section class='sm:ml-10 md:col-span-7 md:-mt-36'>
          <p className='mb-0 text-left text-lg  md:text-2xl'>
            This is a special opportunity for you to drastically improve your
            child's chances of passing the SHSAT, and attending a top tier high
            school.
          </p>
        </section>
      </div>
      <div class='flex justify-center pt-24'>
        <a
          class='btn-outline btn-primary btn-md btn border-2 sm:text-xl md:w-[61%] '
          href='#consultation'
        >
          Get Your Free consultation
        </a>
      </div>
    </div>
  );
};

export default Hero;
