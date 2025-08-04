"use client";
import { GoogleTagManager } from "@next/third-parties/google";

const GoogleAnalytics = () => {
  const GA4_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

  if (!GA4_ID) return <></>;

  return (
    <>
      <GoogleTagManager gtmId={GA4_ID} />
    </>
  );
};
export default GoogleAnalytics;
