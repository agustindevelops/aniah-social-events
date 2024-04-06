export default function Page({ params }: { params: { slug: string } }) {
  return <div className='mt-24'>My Post: {params.slug}</div>;
}
