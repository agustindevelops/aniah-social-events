import Image from "next/image";
import Links from "./Links";

interface ImageProps {
  url: string;
  height: number;
}

const Reviews = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-4">
      <div className="mb-12 mt-24">
        <div className="grid grid-cols-1 items-center justify-center md:grid-cols-2">
          {images.map((image, index) => (
            <div key={index}>
              <Image
                src={`/images/reviews/${image.url}.png`}
                alt="Wedding gallery image"
                width={800}
                height={200}
                className="rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Review Section */}
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="mb-6 text-3xl font-bold">Share Your Experience</h1>
        <p className="mb-6 text-lg">
          We value your feedback! Please let us know about your experience
          working with us.
        </p>
        <Links />
      </div>
    </div>
  );
};

const images: ImageProps[] = [
  { url: "image-01", height: 200 },
  { url: "image-02", height: 200 },
  { url: "image-03", height: 200 },
  { url: "image-04", height: 200 },
  { url: "image-05", height: 200 },
  { url: "image-06", height: 200 },
  { url: "image-07", height: 200 },
  { url: "image-08", height: 200 },
  { url: "image-09", height: 200 },
  { url: "image-10", height: 200 },
  { url: "image-11", height: 200 },
  { url: "image-12", height: 200 },
];

export const metadata = {
  title: "Client Reviews of Aniah Social Events – Trusted Event Planning",
  description:
    "Read testimonials from happy couples and clients who trusted Aniah Social Events for weddings, parties, and special moments.",
};

export default Reviews;
