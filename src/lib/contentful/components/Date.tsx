import React from "react";
import dateFormat from "dateformat";
import { strToUTCDate } from "@/utils/functions";

const Date = ({ date }: { date: string }) => {
  return (
    <time className="text-brown-500 text-base font-semibold leading-7">
      {dateFormat(strToUTCDate(date), "longDate")}
    </time>
  );
};

export default Date;
