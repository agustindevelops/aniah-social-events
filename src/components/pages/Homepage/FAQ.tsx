import { getFaqs } from "@/lib/contentful/api";

const FAQ = async () => {
  const faqs = await getFaqs();
  return (
    <ul className="list-inside mx-auto my-4 text-center max-w-4xl">
      {faqs.map((faq, index) => (
        <li key={index} className="my-8">
          <div className="flex items-center justify-center gap-2 text-2xl lg:text-3xl font-libre mb-2">
            <span
              role="img"
              aria-label="heart"
              className="text-peach-500 mt-0.5"
            >
              ❤️
            </span>
            <span>{faq.question}</span>
          </div>
          <p className="text-xl lg:text-2xl font-libre text-center px-4">
            A: {faq.answer}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default FAQ;
