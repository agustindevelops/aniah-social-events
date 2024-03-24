import AddToEmailList from '@/components/forms/AddToEmailList';
import { BLOSSOMS_AND_BREWS } from '@/utils/content/events';

export default function CTA() {
  return (
    <div className='bg-cream-200 text-shadow-md py-16 text-white sm:py-24'>
      <div className='mx-auto max-w-7xl font-semibold sm:px-6 lg:px-8'>
        <div className='bg-peach-200 relative isolate overflow-hidden px-6 py-24 sm:rounded-3xl sm:px-24 xl:py-32'>
          <h2 className='text-shadow-xl mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight sm:text-4xl'>
            {BLOSSOMS_AND_BREWS.CTA.TITLE}
          </h2>
          <p className='text-shadow-md text-cream mx-auto mt-2 max-w-xl text-center text-lg leading-8'>
            {BLOSSOMS_AND_BREWS.CTA.DESCRIPTION}
          </p>
          <div>
            <AddToEmailList />
          </div>
          <svg
            viewBox='0 0 1024 1024'
            className='absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2'
            aria-hidden='true'
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill='url(#blossoms-brews-gradient)'
              fillOpacity='0.7'
            />
            <defs>
              <radialGradient
                id='blossoms-brews-gradient'
                cx={0}
                cy={0}
                r={1}
                gradientUnits='userSpaceOnUse'
                gradientTransform='translate(512 512) rotate(90) scale(512)'
              >
                <stop stopColor='#FFFFFF' />
                <stop offset={1} stopColor='#F7F2E1' stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
