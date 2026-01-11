const Subtitle = ({ subtitle }: { subtitle?: string }) => {
  if (!subtitle) return <></>;

  return (
    <h2 className="bg-[#f9f1ec] w-full font-shrikhand text-center text-4xl font-bold my-16 text-[#CE6B69] flex lg:flex-row flex-col gap-2 items-center justify-center py-8">
      <span className="flower-accent">✨</span>
      <p className="max-w-4xl">{subtitle}</p>
      <span className="flower-accent">✨</span>
    </h2>
  );
};

export default Subtitle;
