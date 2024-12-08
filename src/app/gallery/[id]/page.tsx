type Props = {
  params: {
    id: string;
  };
};

export default function GalleryPage({ params }: Props) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-2xl font-bold">Gallery Item: {params.id}</h1>
    </div>
  );
}
