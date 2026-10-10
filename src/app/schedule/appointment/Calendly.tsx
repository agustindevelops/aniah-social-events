"use client";

import { useMemo, useState } from "react";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";

const CALENDLY_URL = "https://calendly.com/aniahsocialevents/30min?back=1";

const Calendly = () => {
  const [height, setHeight] = useState("630px");

  const eventHandlers = useMemo(
    () => ({
      onPageHeightResize: (event: { data: { payload: { height: string } } }) => {
        setHeight(event.data.payload.height);
      },
    }),
    [],
  );

  useCalendlyEventListener(eventHandlers);

  return (
    <InlineWidget
      url={CALENDLY_URL}
      styles={{ minWidth: "320px", height }}
    />
  );
};

export default Calendly;
