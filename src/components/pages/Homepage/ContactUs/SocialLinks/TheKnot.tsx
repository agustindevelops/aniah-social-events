import Image from "next/image";

const TheKnot = () => {
  return (
    <a
      className="transition-transform hover:scale-110"
      target="_blank"
      href="https://www.theknot.com/marketplace/redirect-2079260?utm_source=vendor_website&utm_medium=banner&utm_term=8b31c857-d48a-404a-9cec-324f879fbb67&utm_campaign=vendor_badge_assets"
    >
      <Image
        alt="TheKnot.com"
        src="https://d13ns7kbjmbjip.cloudfront.net/For_Your_Website/TK-icon_circle_large.png"
        width={60}
        height={60}
        quality={100}
      />
    </a>
  );
};

export default TheKnot;
