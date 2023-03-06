import * as React from 'react';

const CTA = () => {
  return (
    <section className='prose'>
      <p class='prose pt-10'>
        This Blog is a supplement to my 1-on-1 tutoring services and my online
        SHSAT course. If you're interested in my personalized services, please
        visit the websites linked below.
      </p>
      <div className='flex space-x-10 pt-10 prose-a:no-underline'>
        <a
          href='https://u03.is/testprep'
          className='rounded-md border bg-slate-900 px-3 py-2 text-slate-100'
        >
          1-on-1 Tutoring
        </a>
        {/* <a
          href="https://shsat.io"
          className="px-3 py-2 border rounded-md text-slate-900 bg-slate-100 border-slate-900"
        >
          Online Course
        </a> */}
      </div>
    </section>
  );
};

export default CTA;
