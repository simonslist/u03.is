import * as React from 'react';

const Consultation = () => {
  return (
    <div
      id='consultation'
      class='grid grid-cols-12 bg-black py-36 px-5 lg:px-36'
    >
      <div class='col-span-12 '>
        <div class='mx-auto max-w-screen-md p-5'>
          <div class='mb-16 text-center'>
            <h2 class='text-3xl font-extrabold leading-normal tracking-tight text-white sm:text-4xl'>
              Free Consultation
            </h2>
          </div>

          <form class='w-full text-white'>
            <div class='-mx-3 mb-6 flex flex-wrap text-gray-300'>
              <div class='mb-6 w-full px-3 md:mb-0 md:w-1/2'>
                <label
                  class='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-300'
                  for='grid-first-name'
                >
                  What's your full name?
                </label>
                <input
                  class='mb-3 block w-full appearance-none rounded border border-red-500 bg-gray-200 py-3 px-4 leading-tight text-gray-300 focus:bg-white focus:outline-none'
                  id='grid-first-name'
                  type='text'
                  placeholder='Jane'
                />
              </div>
              <div class='w-full px-3 md:w-1/2'>
                <label
                  class='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-300'
                  for='grid-last-name'
                >
                  Which grade is your child currently in?
                </label>
                <input
                  class='block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-300 focus:border-gray-500 focus:bg-white focus:outline-none'
                  id='grid-last-name'
                  type='text'
                  placeholder='Doe'
                />
              </div>
            </div>
            <div class='-mx-3 mb-6 flex flex-wrap'>
              <div class='w-full px-3'>
                <label
                  class='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-300'
                  for='grid-password'
                >
                  Email Address
                </label>
                <input
                  class='mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-300 focus:border-gray-500 focus:bg-white focus:outline-none'
                  id='grid-email'
                  type='email'
                  placeholder='********@*****.**'
                />
              </div>
            </div>

            <div class='-mx-3 mb-6 flex flex-wrap'>
              <div class='w-full px-3'>
                <label
                  class='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-300'
                  for='grid-password'
                >
                  Phone Number
                </label>
                <input
                  class='mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-300 focus:border-gray-500 focus:bg-white focus:outline-none'
                  id='grid-email'
                  type='email'
                  placeholder='212-321-0632'
                />
              </div>
            </div>
            <div class='-mx-3 mb-6 flex flex-wrap'>
              <div class='w-full px-3'>
                <label
                  class='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-300'
                  for='grid-password'
                >
                  What progress has your child made so far? Do they have a
                  target school? Do you have any particular educational
                  concerns?
                </label>
                <textarea
                  rows='10'
                  class='mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-300 focus:border-gray-500 focus:bg-white focus:outline-none'
                ></textarea>
              </div>
              <div class='flex w-full justify-between px-3'>
                <div class='md:flex md:items-center'>
                  <label class='block font-bold text-gray-500'>
                    <input class='mr-2 leading-tight' type='checkbox' />
                    <span class='text-sm'>Send me your newsletter!</span>
                  </label>
                </div>
                <button
                  class='focus:shadow-outline rounded bg-secondary py-2 px-6 font-bold text-white shadow hover:bg-black focus:outline-none'
                  type='submit'
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
