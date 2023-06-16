import Image from 'next/image';

const GetToKnowMe = () => {
  return (
    <div>
      <div className='grid grid-cols-1 items-center gap-4 p-4 text-center text-lg md:grid-cols-2 md:text-2xl'>
        <Image
          src='/images/get-to-know-me-photo-squiggle.png'
          alt="Get To Know Me Aniah's Photo"
          width={414}
          height={414}
          className='mx-auto'
        />
        <div>
          <Image
            src='/images/get-to-know-me-title.png'
            alt="Get To Know Me Aniah's Title"
            width={452}
            height={104}
            className='mx-auto p-2'
          />
          <p>
            Introducing Aniah's Social Events Co. - where creativity meets
            unforgettable moments. I'm Aniah, and I founded this company out of
            my deep love for creating and designing beautiful projects. Having
            worked as a bridal seamstress, coordinator, decorator, and now a
            planner, I've gained a wealth of experience in the wedding industry.
          </p>
        </div>

        <p className={'md:col-span-2'}>
          My goal is simple: to share my creativity and help others create
          unique and memorable events. I believe in the power of meticulous
          attention to detail and the transformative nature of design. With
          Aniah's Social Events Co., I bring my unique artistic vision to every
          project, ensuring that no element is overlooked.
        </p>
        <p className={'md:col-span-2'}>
          When you choose Aniah's Social Events Co., you can trust in my
          expertise to turn your dreams into extraordinary, lifelong memories.
          Let me elevate your event and make it truly magical. Together, we'll
          create an unforgettable experience that reflects your individuality
          and leaves a lasting impression on all who attend.
        </p>
      </div>
    </div>
  );
};

export default GetToKnowMe;
