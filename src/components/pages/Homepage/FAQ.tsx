import { AiFillHeart } from "react-icons/ai";
import { getFaqs } from "@/lib/contentful/api";

const FAQ = async () => {
  const faqs = await getFaqs();
  const textColor = "text-[#ce6b69]";
  const iconColor = "text-[#ce6b69]";
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto my-4 text-center max-w-6xl px-4">
      {faqs.map((faq, index) => {
        return (
          <li key={index} className="my-4">
            <div className="flex items-center justify-center gap-2 text-lg lg:text-xl mb-2">
              <div className={`py-2 ${iconColor}`}>
                <AiFillHeart />
              </div>
              <span className={`font-pacifico ${textColor}`}>{faq.question}</span>
            </div>
            <p className="text-base lg:text-lg font-libre text-center px-4">
              A: {faq.answer}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default FAQ;
