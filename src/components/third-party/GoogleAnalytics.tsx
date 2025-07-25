import { GoogleTagManager } from "@next/third-parties/google";

const GoogleAnalytics = () => {
  const ga_id = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

  if (!ga_id) return <></>;

  return (
    <>
      <GoogleTagManager gtmId={ga_id} />
    </>
  );
};
export default GoogleAnalytics;
