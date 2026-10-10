import {
  ChatBubbleLeftRightIcon,
  ClipboardDocumentCheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import Button from "@/components/buttons/Button";
import { START_PLANNING_ROUTE } from "@/utils/content/schedule";

const STEPS = [
  {
    step: "Step 01",
    title: "Tell Us Your Vision",
    description:
      "Share a few details about your celebration so we can recommend the right experience for you.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    step: "Step 02",
    title: "Review Your Plan",
    description:
      "We'll work through the details together so you know exactly what's included before booking.",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    step: "Step 03",
    title: "Enjoy Your Celebration",
    description:
      "We handle the planning, setup, and details of your selected services so you can focus on the moments that matter.",
    icon: SparklesIcon,
  },
];

const HowItWorks = () => {
  return (
    <section className="mx-auto my-24 w-full max-w-5xl px-4 sm:px-6">
      <div className="rounded-3xl border border-brown-200 bg-white px-6 py-12 text-center sm:px-10 sm:py-16">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-brown-500">
          How it works
        </p>
        <h2 className="font-nickainley mx-auto mt-4 max-w-3xl text-4xl text-[#CE6B69] sm:text-5xl md:text-6xl">
          Your dream event, made simple.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brown-700 sm:text-lg">
          From your first idea to the final celebration, we make the process
          feel effortless.
        </p>
        <ol className="mt-12 grid gap-10 text-center md:grid-cols-3 md:gap-8">
          {STEPS.map(({ step, title, description, icon: Icon }) => (
            <li key={step}>
              <Icon
                className="mx-auto h-8 w-8 text-[#CE6B69]"
                aria-hidden="true"
              />
              <p className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-brown-500">
                {step}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-brown-800">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brown-700">
                {description}
              </p>
            </li>
          ))}
        </ol>
        <div className="mx-auto mt-12 max-w-3xl">
          <Button
            href={START_PLANNING_ROUTE}
            className="block w-full py-4 text-center text-base"
          >
            Start Planning →
          </Button>
          <p className="mt-4 text-sm text-brown-500">
            Start by telling us a little about your event.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
