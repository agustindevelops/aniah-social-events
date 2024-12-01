"use client";
import React, { FormEvent, useState } from "react";
import axios, { isAxiosError } from "axios";

const AddToEmailList = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const email = formData.get("email") as string;

      const { status } = await axios.post("/api/subscribe", {
        email,
      });

      if (status === 200) {
        setError("");
        setIsSuccess(true);
      } else {
        setError("");
      }
    } catch (e) {
      if (isAxiosError(e) && e.response) {
        setError(e.response.data);
      } else {
        setError("An unexpected error occurred:");
      }
    }
  };

  if (isSuccess)
    return (
      <div className="my-6 w-full text-center text-2xl">
        Thank you! We will keep you updated!
      </div>
    );

  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="mx-auto mt-10 flex max-w-md gap-x-4">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="text-brown-500 min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
          placeholder="Enter your email"
        />

        <button
          type="submit"
          className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Notify me
        </button>
      </div>
      {error && (
        <div className="px-3 py-1 text-center text-sm text-red-500">
          {error}
        </div>
      )}
    </form>
  );
};

export default AddToEmailList;
