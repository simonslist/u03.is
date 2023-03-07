import * as React from 'react';

import Image from 'next/image';
import milancard from '../../public/prep/milancard.jpg';
import reesemessage from '../../public/prep/reesemessage.jpg';
import jiyoung from '../../public/prep/jiyoung.jpg';
import maggiemessage from '../../public/prep/maggiemessage.jpeg';
import lucasmessage from '../../public/prep/lucasmessage.jpg';
import anja from '../../public/prep/anja.jpeg';
import jennymessage from '../../public/prep/jennymessage.jpeg';

const Result = ({ year, name, school, reflection }) => {
  return (
    <div className='text-left text-white/80'>
      <h2 className='flex flex-col justify-center bg-gradient-to-r from-red-800 to-primary bg-clip-text pb-10 text-transparent'>
        <div class='text-5xl'>{year}</div>
        <div class='text-5xl '>{name}</div>
        <div class='text-6xl font-extrabold'>{school}</div>
      </h2>
      <p class='text-lg leading-loose text-white sm:text-2xl'>{reflection}</p>
    </div>
  );
};

const Review = ({ name, relationship, school, review, children }) => {
  return (
    <div class=' card rounded-lg  px-5 pt-5 text-white'>
      <p class='text-lg leading-loose text-white sm:text-2xl'>"{review}"</p>
      <div class='grid grid-cols-12  bg-black pt-5'>
        <div class='place-end col-span-10 flex flex-col justify-end  text-right text-white'>
          <span class='pr-3'>{name}</span>
          <span class='pr-3'>{relationship}</span>
        </div>
        <div class='roundedxl col-span-2'>{children}</div>
      </div>
    </div>
  );
};

const Proof = () => {
  return (
    <section class='proof flex grid-cols-12 flex-col gap-20 gap-y-24 bg-black px-5 sm:gap-y-36 md:grid md:py-56 md:px-20'>
      <div class='col-span-9 col-start-1'>
        <Result
          year='2015'
          name='Sudat K.'
          school='Stuyvesant'
          reflection='Sudat was my very first 1-on-1 student for the SHSATs. He worked very hard, completed assignments ahead of time, and constantly demanded more challenging assignments. By the time Sudat took the exam, he had completed just about every practice test that was available at the time - and multiple times at that. His goal was to get into Stuy with a perfect score. Apparently, he scored the second highest score possible. Thanks to his level of commitment I was able to develop and test a personal prep theory that I now use for all my students regardless of their goals.'
        />
      </div>
      <div class='col-span-10 col-start-3 '>
        <Result
          year='2016'
          name='Yusha K.'
          school='Stuyvesant'
          reflection="Yusha was Sudat's younger brother by a year. We started prepping before Sudat got his results as his parents felt he was less studious and would need the extra time. Very different personality, especially in regards to studying but just as confident as Sudat shrug. He was aiming for Stuyvesant because that's where his brother wanted to go. When it came to reviewing his work, he was quick to put aside his ego and learn new strategies with the understanding that he might pick up something more efficient that could make more sense for him."
        />
      </div>

      <div class='col-span-9 col-start-2'>
        <Image src={milancard} alt='Milan' />
      </div>

      <div class='col-span-8 col-start-1'>
        <Result
          year='2016'
          name='Milan H.'
          school='Brooklyn Tech'
          reflection='I started working with Milan 2 months before the exam. He was enrolled at Kaplan, but his parents wanted a second opinion. His goal was to get into Brooklyn Tech and his practice test scores were right around the mark and sometimes a bit higher. Our goal was to increase his practice scores to a safer margin higher than the cutoff score, improve his ability to recognize which questions to come back to, practice time management strategies, and practice with a much greater variety of practice tests from other high quality test prep publishers.'
        />
      </div>

      <div class='col-span-5 col-start-1'>
        <Image src={reesemessage} alt='Reese' />
      </div>
      <div class='col-span-7 col-start-6 pt-56'>
        <Result
          year='2016'
          name='Reese KD.'
          school='HSMSE'
          reflection='I started working with Reese a few months before the exam. His practice tests at Kaplan were alarming, and his self-confidence was basically shot. With only a limited amount of time before the exam, we focused on his strongest section of the exam (math) until he was consistently answering at least 90% of the math questions correctly. When we moved on to working on the English section, his performance on practice tests was much higher, and after explainging how to take advantage of the grading curves, his outlook on the exam was much much better.'
        />
      </div>
      <div class='col-span-10 col-start-2'>
        <Review
          name='Jiyoung K.'
          relationship="Reese's mom"
          school='HSMSE'
          review='After working with Simon for 2 months, my son increased his SHSAT score by 150 points… enough to get him into his first choice school. Simon is the best SHSAT tutor ever (I’ve had many other tutors previously). When my son first started working with Simon, he could not finish the practice test, despite working with another private tutor and being enrolled in Kaplan. He exceeded all expectations and built my son’s confidence in himself. Simon is extremely knowledgeable, strategic, and focused on getting the highest score possible, and he will get your child there. My son says that Simon is THE reason he will go to his first choice school.'
        >
          <Image src={jiyoung} alt='Jiyoung' class='bwimg' />
        </Review>
      </div>
      <div class='col-span-10 col-start-2'>
        <Result
          year='2017'
          name='Mary C.'
          school='Bronx Science'
          reflection='I started working with Mary the summer before the exam. Mary was super attentive during our sessions, extremely organized and studious as she studied on her own, and very receptive to learning new problem solving strategies. She was already on the path to attend highly rated schools in Manhattan along with her peers, but she wanted to go somewhere a bit more challenging even if it was much farther away. Her father was a teacher and after a couple months of prep, I gave them a scheduled list of practice tests to complete before the exam and they were able to prep on their own without any further sessions with me.'
        />
      </div>
      <div class='col-span-5 col-start-1'>
        <Image src={maggiemessage} alt='Maggie' />
      </div>
      <div class='col-span-7 col-start-6 md:pt-72'>
        <Result
          year='2017'
          name='Mason L.'
          school='Brooklyn Tech'
          reflection="Mason was one of the fiercest students I've ever . She was extremely competitive and motivated to do better than her peers. There was a month where she had to leave for summer camp. I assigned a bunch of practice questions, and tests, and a schedule. Despite being in an environment where most of her friends were having fun and enjoying summer, Mason completed all of her assigned work, self-graded herself, and knew exactly what she was having trouble with when we resumed our tutoring."
        />
      </div>

      <div class='col-span-6 col-start-1'>
        <Result
          year='2018'
          name='Lucas SV.'
          school='Brooklyn Tech'
          result='2018  Brooklyn Tech'
          reflection='Lucas was a very inquisitive student who always came to our sessions with new problem-specific questions. We started prepping about a year before the exam. We were waiting until the school tours in Octoebr for him to determine his target school. In order to cover all his bases we prepped with Stuy in mind. Weeks before the exam, he decided to apply for Brooklyn Tech and so we changed our strategy. Since he was already scoring at a Stuy level, we spent the rest of our time on aggressive question-skipping so that he could consistently score above the cutoff for Brooklyn Tech while also having plenty of time left over in case of non-ideal testing conditions..'
        />
      </div>
      <div class='col-span-6 col-start-7 sm:mt-96'>
        <Image src={lucasmessage} alt='Lucas' />
      </div>

      <div class='col-span-10 col-start-2'>
        <Review
          name='Anja S.'
          relationship="Lucas' mom"
          school='HSMSE'
          review='Simon has been tutoring our son Lucas last year for the SHSAT exam. We  were very happy with him and his approach to the test, he gradually prepared Lucas for the test and once he had solid knowledge of the topics they worked on timing which is an important component of the exam. We are still in touch with Simon and from the time to time he is working with Lucas on certain subjects. I would definitely recommend him as a tutor and are happy to answer any questions !'
        >
          <Image src={anja} alt='Anja' />
        </Review>
      </div>
      <div class='col-span-8 col-start-1'>
        <Result
          year='2018'
          name='Jullian A.'
          school='Xavier (HSPT)'
          reflection='Jullian and his parents had a bunch of different goals for him that were all somewhat related to SHSAT prep. His parents wanted him to apply for Laguardia (via auditions), Xavier, and also Brooklyn Latin. The latter two required similiar exam prep. The first school required slightly higher school grades which is also something we indirectly worked on in the beginning stages of his test-prep. In the end he was accepted into his first choice, Laguardia, and also Xavier which we specifically prepped for via SHSAT test-prep and limited HSPT test-prep materials.'
        />
      </div>
      <div class='col-span-4 col-start-1 pb-56 sm:mt-28 '>
        <Image src={jennymessage} alt='Jenny' />
      </div>
      <div class='col-span-8 col-start-5'>
        <Result
          year='2019'
          name='Ethan M.'
          school='Brooklyn Tech'
          reflection='Ethan was a silly student. I have no idea how he got in. His parents wanted him to apply for Laguardia (via auditions), Xavier, and also Brooklyn Latin. The latter two required similiar exam prep. The first school required slightly higher school grades which is also something we indirectly worked on in the beginning stages of his test-prep. In the end he was accepted into his first choice, Laguardia, and also Xavier which we specifically prepped for via SHSAT test-prep and limited HSPT test-prep materials.'
        />
      </div>
    </section>
  );
};

export default Proof;
