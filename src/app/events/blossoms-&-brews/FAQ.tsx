const faqs = [
  {
    id: 1,
    question: 'What is included in the ticket?',
    answer:
      'Each ticket includes: 2 hrs. of tea time with your besties, a grazing table brunch, 3 different teas served table side, access to our Flower Market full of wonderful vendors, a goodie bag full of fun tea time treats, and you get to take your tea cups home with you at the end of the day!',
  },
  {
    id: 2,
    question: 'What is the Flower Market?',
    answer:
      "The Flower Market is a market full of our wonderful local vendors selling their art, treats, & much more. We'll be announcing our vendors on Instagram as we get closer to the date! Stay tuned.",
  },
  {
    id: 3,
    question: 'What to wear?',
    answer:
      'Think floral dresses, pastel colors, & garden party outfits! The dress code is not mandatory but it definitely makes it more fun.',
  },
  {
    id: 4,
    question: 'What food will we serve?',
    answer:
      "We'll be serving tea sandwiches, savory bites, and sweet treats on a giant grazing table!",
  },
  {
    id: 5,
    question: 'Is there any differences in the groupings?',
    answer:
      'No, each group gets exactly the same things, we just want everyone to feel comfortable and not overcrowd the space! The only difference is the time.',
  },
  {
    id: 6,
    question: 'What tea will be served?',
    answer:
      "A traditional black tea, a floral tea, and a blooming tea will be served at each table! We'll have milk, soymilk and sugar at each table to sweeten your tea to taste.",
  },
];

export default function FAQ() {
  return (
    <section>
      <div className='mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-2xl font-bold leading-10 tracking-tight text-blue-500'>
            Frequently Asked Questions
          </h2>
        </div>
        <div className='mt-20'>
          <dl className='space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10'>
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className='text-peach-500 text-base font-semibold leading-7'>
                  {faq.question}
                </dt>
                <dd className='mt-2 text-base leading-7'>{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
