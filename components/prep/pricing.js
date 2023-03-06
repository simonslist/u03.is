import * as React from 'react';

const base = 120;
const projectHours = 80;
const twoHourDiscountRate = 0.8125;
const projecyDiscountRate = 0.8;
const summerDiscountRate = 0.8;

const oneHour = base;
const twoHour = base * 2 * twoHourDiscountRate;
const projectBased = twoHour * projectHours * projecyDiscountRate;

// const oneHourSummer = oneHour * summerDiscountRate
// const twoHourSummer = twoHour * summerDiscountRate
// const projectBasedSummer = projectBased * summerDiscountRate

const PriceCard = ({ type, price, recommendation }) => {
  return (
    <div class='col-span-12 rounded-2xl bg-white/90 p-4 text-black shadow-lg lg:col-span-4'>
      <div class='mb-5 flex justify-between border-b-2 border-black/10 text-lg '>
        <span class='font-bold'>{type}</span>
        <span class='font-medium'>${price}</span>
      </div>

      <p>{recommendation}</p>
    </div>
  );
};

const Pricing = () => {
  return (
    <section class='bg-black'>
      <section class='bg-blue-600/20 p-5 py-28 lg:min-h-screen lg:p-28'>
        <h1 class='text-5xl text-white'>Pricing</h1>
        <div class='flex grid-cols-3 flex-col gap-10 pt-20 md:grid md:grid-cols-12 lg:grid-cols-12 lg:gap-20'>
          <PriceCard
            type='1 hour'
            price={oneHour}
            recommendation='ideal for the beginning of the tutoring process until the student has enough stamina for longer sessions'
          />
          <PriceCard
            type='2 hours'
            price={twoHour}
            recommendation='best when the exam is sooner than 5 months
        and the student can handle longer periods of focus'
          />
          <PriceCard
            type='Project based'
            price={projectBased.toLocaleString()}
            recommendation='best when the exam is not within 5 months and
        the student can meet at least 2-3 times a week, and
        if they are fully committed to put in the work'
          />
        </div>

        <div className='flex grid-cols-12 flex-col md:grid'>
          <div class='col-span-7'>
            <div class='mt-20 rounded-lg bg-white/20 p-5 text-white'>
              <p class=''>
                Project based tutoring is effectively an "unlimitted tutoring
                plan". We have sessions as often as possible with time for
                homework in between. The total amount is due upfront. You may
                also pay in 3 installments with an additional 5% convenience
                fee: 20 percent upfront, 40% after the first 20 tutoring hours,
                and the rest after the next 20 tutoring hours.
              </p>
              <p>
                If you start with hourly sessions, book less than 30 hours, and
                later switch to Project Based tutoring, you will recieve a
                pro-rated price.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Pricing;
