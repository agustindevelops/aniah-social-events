import Image from 'next/image';
import Link from 'next/link';

const posts = [
  {
    id: 1,
    imageUrl:
      'https://aniah-social-events.s3.amazonaws.com/homepage/gallery_thumbnail_1.JPG',
  },
  {
    id: 2,
    imageUrl:
      'https://aniah-social-events.s3.amazonaws.com/homepage/gallery_thumbnail_2.JPG',
  },

  {
    id: 3,
    imageUrl:
      'https://aniah-social-events.s3.amazonaws.com/homepage/gallery_thumbnail_3.JPG',
  },
];

const Gallery = () => {
  return (
    <Link
      className='bg-white py-24 hover:scale-105 hover:shadow-2xl sm:py-32'
      href='/gallery'
    >
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-primary text-3xl font-bold tracking-tight sm:text-4xl'>
            Checkout our Gallery
          </h2>
        </div>
        <div className='mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {posts.map((post) => (
            <div
              key={post.id}
              className='relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 transition duration-300 hover:scale-105 hover:shadow-lg sm:pt-48 lg:pt-96'
            >
              <Image
                src={post.imageUrl}
                height={800}
                width={500}
                alt={post.imageUrl}
                className='absolute inset-0 -z-10 h-full w-full object-cover'
              />
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Gallery;
