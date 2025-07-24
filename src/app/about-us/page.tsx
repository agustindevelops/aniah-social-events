import Button from "@/components/buttons/Button";
import Image from "next/image";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen py-12 mt-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 font-nickainley">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto">
            <span className="flower-accent">✨</span> Where creativity blossoms
            into unforgettable moments <span className="flower-accent">✨</span>
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-20">
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Hi! We're Aniah and Agustin — the husband-and-wife team behind
              Aniah's Social Events Co. Together, we believe that every
              celebration deserves thoughtful design, seamless coordination, and
              a personal touch that makes it truly yours.
            </p>
            <div className="w-24 h-1 bg-[#e6b89c] mx-auto my-8"></div>
            <p className="text-center italic text-gray-600">
              "We don't just plan events; we craft experiences that reflect your
              personality, your dreams, and your style."
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Aniah */}
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="photo-placeholder w-64 h-64 md:w-48 md:h-64 shrink-0">
              <div className="text-center p-4">
                <span className="block text-4xl mb-2">🌷</span>
                <Image
                  src="/images/about-us/aniah.jpg"
                  alt="Aniah"
                  width={512}
                  height={512}
                />
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h2 className="text-3xl font-medium accent-border font-moonjelly">
                About Aniah
              </h2>
              <p className="mt-4 leading-relaxed">
                I'm Aniah, the founder, lead planner, and creative visionary
                behind it all. My passion for beautiful experiences comes from
                years of working as a bridal seamstress, wedding coordinator,
                and decorator. I love transforming ideas into stunning details
                that leave an indelible mark on your special day.
              </p>
            </div>
          </div>

          {/* Partner */}
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="photo-placeholder w-64 h-64 md:w-48 md:h-64 shrink-0">
              <div className="text-center p-4">
                <span className="block text-4xl mb-2">🤝</span>
                <Image
                  src="/images/about-us/agustin-and-aniah.jpg"
                  alt="Agustin"
                  width={512}
                  height={512}
                />
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h2 className="text-3xl font-medium accent-border font-moonjelly">
                About Agustin
              </h2>
              <p className="mt-4 leading-relaxed">
                And I'm Agustin — you'll often find me behind the scenes helping
                bring everything together. From coordinating event logistics to
                capturing behind-the-scenes moments and making sure our website
                and promotions run smoothly, I love supporting our couples and
                Aniah every step of the way.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-[#f9f1ec] rounded-lg p-8 md:p-12 mb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium text-center mb-8">
              Our Mission
            </h2>
            <div className="flex items-center justify-center mb-8">
              <span className="text-4xl mr-4">🌼</span>
              <div className="h-px bg-[#e6b89c] flex-grow"></div>
            </div>
            <p className="text-lg leading-relaxed text-center mb-6">
              Together, we believe that the magic lies in the details — and that
              thoughtful design can transform any event into a
              once-in-a-lifetime experience. From the first planning meeting to
              the final send-off, we're dedicated to making sure your
              celebration feels unique, personal, and unforgettable.
            </p>
          </div>
        </div>

        {/* Why Work With Us */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-medium text-center mb-12">
            Why Work With Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl mb-4">💛</div>
              <h3 className="text-xl font-medium mb-3">Personal Touch</h3>
              <p>
                When you choose us, you're not just hiring planners — you're
                inviting a team who cares deeply about your story.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-medium mb-3">Creative Vision</h3>
              <p>
                We don't just plan events; we craft experiences that reflect
                your personality, your dreams, and your style.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-medium mb-3">Attention to Detail</h3>
              <p>
                Your vision inspires us — and we're honored to bring it to life
                with meticulous care and creativity.
              </p>
            </div>
          </div>
        </div>

        {/* Closing */}
        <div className="bg-[#f9f1ec] rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-light mb-6">
            Let's Create Something Beautiful Together
          </h2>
          <p className="text-lg mb-8">
            Take a look around, get to know us a bit better, and when you're
            ready, let's sit down for a coffee (or a glass of champagne!) and
            dream up something beautiful together.
          </p>
          <Button href="/schedule">Contact Us</Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
