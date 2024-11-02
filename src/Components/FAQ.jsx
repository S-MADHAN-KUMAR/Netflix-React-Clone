import React from 'react';

const FAQ = () => {
  return (
    <>
      <div className="faq sm:px-28">
        <h2 className='text-2xl sm:mb-16 mb-10'>Frequently Asked Questions</h2>

        <ul className="accordion">
          <li>
            <input type="checkbox" id="first" />
            <label htmlFor="first" className='sm:text-xl text-base '>What is Netflix?</label>
            <div className="content">
              <p className='sm:text-xl text-base'>
                Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies,
                anime, documentaries and more – on thousands of internet-connected devices.
              </p>
              <p className='sm:text-xl text-base'>
                You can watch as much as you want, whenever you want, without a single ad – all for one low
                monthly price. There's always something new to discover, and new TV shows and movies are added
                every week!
              </p>
            </div>
          </li>

          <li>
            <input type="checkbox" id="second" />
            <label className='sm:text-xl text-base ' htmlFor="second">How much does Netflix cost?</label>
            <div className="content">
              <p className='sm:text-xl text-base'>
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one
                fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.
              </p>
            </div>
          </li>

          <li>
            <input type="checkbox" id="third" />
            <label className='sm:text-xl text-base ' htmlFor="third" >Where can I watch?</label>
            <div className="content">
              <p className='sm:text-xl text-base'>
                Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at
                netflix.com from your personal computer or on any internet-connected device that offers the Netflix
                app, including smart TVs, smartphones, tablets, streaming media players, and game consoles.
              </p>
              <p className='sm:text-xl text-base'>
                You can also download your favorite shows with the iOS or Android app. Use downloads to watch
                while you're on the go and without an internet connection. Take Netflix with you anywhere.
              </p>
            </div>
          </li>

          <li>
            <input type="checkbox" id="fourth" />
            <label className='sm:text-xl text-base ' htmlFor="fourth">How do I cancel?</label>
            <div className="content">
              <p className='sm:text-xl text-base'>
                Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel
                your account online in two clicks. There are no cancellation fees – start or stop your account
                anytime.
              </p>
            </div>
          </li>

          <li>
            <input type="checkbox" id="fifth" />
            <label className='sm:text-xl text-base ' htmlFor="fifth" >What can I watch on Netflix?</label>
            <div className="content">
              <p className='sm:text-xl text-base'>
                Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning
                Netflix originals, and more. Watch as much as you want, anytime you want.
              </p>
            </div>
          </li>

          <li>
            <input type="checkbox" id="sixth" />
            <label className='sm:text-xl ' htmlFor="sixth" >Is Netflix good for kids?</label>
            <div className="content">
              <p className='sm:text-xl text-base'>
                The Netflix Kids experience is included in your membership to give parents control while kids
                enjoy family-friendly TV shows and films in their own space.
              </p>
              <p className='sm:text-xl text-base'>
                Kids profiles come with PIN-protected parental controls that let you restrict the maturity
                rating of content kids can watch and block specific titles you don’t want kids to see.
              </p>
            </div>
          </li>
        </ul>
        <p className='sm:text-xl text-base'>Ready to watch? Enter your email to create or restart your membership.</p>


        <form action="" className='flex sm:items-center justify-center sm:flex-row flex-col mt-12 mb-14  gap-x-6 gap-y-4'>
          <input type="text" placeholder='Email address' className='w-11/12 sm:w-2/5 my-3 text-white backdrop-blur-sm border p-3 px-6 rounded-sm bg-transparent focus:outline-none '/>
          <button type="submit" className='bg-red-600 text-lg w-fit sm:py-3 sm:px-20 sm:font-semibold px-8 py-2 rounded-sm'>Get Started </button>

         </form>

      </div>
    </>
  );
};

export default FAQ;
