import { BLOSSOMS_AND_BREWS } from '@/utils/content/events';

const Facts = () => {
  return (
    <div className='mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8'>
      <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
        <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
          {BLOSSOMS_AND_BREWS.FACTS.TITLE}
        </h2>
        <div className='mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row'>
          <div className='lg:w-full lg:max-w-2xl lg:flex-auto'>
            <p className='text-xl leading-8 text-gray-600'>
              {BLOSSOMS_AND_BREWS.FACTS.PARAGRAPH.ONE}
            </p>
            <div className='mt-10 max-w-xl text-base leading-7 text-gray-700'>
              <p>{BLOSSOMS_AND_BREWS.FACTS.PARAGRAPH.TWO}</p>
              <p className='mt-10'>
                {BLOSSOMS_AND_BREWS.FACTS.PARAGRAPH.THREE}
              </p>
            </div>
          </div>
          <div className='lg:flex lg:flex-auto lg:justify-center'>
            <dl className='w-64 space-y-8 xl:w-80'>
              {BLOSSOMS_AND_BREWS.FACTS.STATS.map(({ LABEL, VALUE }) => (
                <div key={LABEL} className='flex flex-col-reverse gap-y-4'>
                  <dt className='text-base leading-7 text-gray-600'>{LABEL}</dt>
                  <dd className='text-5xl font-semibold tracking-tight text-gray-900'>
                    {VALUE}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
