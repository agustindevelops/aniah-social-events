"use client";

import { InlineWidget } from "react-calendly";

const Schedule = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-4">
      <div className="mb-12 mt-24 w-full max-w-7xl">
        <h1 className="text-3xl font-bold mb-4">Schedule a Meeting</h1>
        <InlineWidget url="https://calendly.com/aniahsocialevents/30min?back=1" />
      </div>
    </div>
  );
};

export default Schedule;
