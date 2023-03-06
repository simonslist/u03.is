import Image from 'next/image';
import simon from '../../public/simon.jpeg';

const Hero = () => {
  return (
    <div class=' min-h-screen bg-black md:min-h-0  md:py-20 '>
      <div class='flex grid-cols-12 flex-col px-10 text-gray-100 md:mx-7 md:grid lg:mx-10'>
        <section class=' md:col-span-7 '>
          <h1 class='py-20 text-3xl font-bold sm:text-center sm:text-3xl md:pt-10 md:text-left md:text-5xl lg:text-7xl '>
            80% of my SHSAT students have gone on to a Specialized High School.
          </h1>
        </section>
        <Image
          src={simon}
          alt='Simon'
          class='rounded-lg shadow-2xl md:col-span-3 md:col-start-10 lg:mt-28'
        />
        <section class='pt-20 sm:ml-10 md:col-span-8 md:-mt-28 md:pl-36'>
          <p className='mb-0 text-left text-lg text-base  md:text-3xl'>
            This is a special opportunity for you to drastically increase your
            child's chances of passing the SHSAT and attending a top tier high
            school.
          </p>
          <a
            class=' btn-outline btn-primary btn-md btn my-10 border-2 sm:text-2xl '
            href='#consultation'
          >
            Get Your Free consultation
          </a>
        </section>
      </div>
    </div>
  );
};

export default Hero;
