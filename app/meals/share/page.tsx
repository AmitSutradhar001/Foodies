"use client";

import { mealsShare } from "@/lib/actions";
import { redirect } from "next/navigation";
import { useActionState, useEffect, useState, ChangeEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface fileP {
  name: string;
  label: string;
}

export default function Share() {
  const [state, formAction, isPending] = useActionState(mealsShare, {
    success: false,
    message: "",
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };
  useEffect(() => {
    if (state.success && state.message.length > 0) {
      setImagePreview(null);
      toast.success(state.message);
      setTimeout(() => {
        redirect("/meals");
      }, 1000);
    } else if (!state.success && state.message.length > 0) {
      setImagePreview(null);
      toast.error(state.message);
    }
  }, [state]);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="max-w-xl mx-auto mt-16 flex w-full flex-col border-[1px] border-blue-800 rounded-lg bg-white/50 p-8">
        <h2 className="font-bold text-3xl mb-1 text-orange-500/70">
          Make Food Together!
        </h2>
        <p className="mb-5 leading-relaxed font-semibold text-gray-600">
          Share your recipe with us!
        </p>
        <form action={formAction}>
          {/* FLEX CONTAINER */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* NAME FIELD */}
            <div className="w-full bg-white py-4 rounded-lg">
              <div className="relative">
                <input
                  type="text"
                  id="yourName"
                  name="username"
                  className="peer bg-transparent h-10 w-full rounded-lg text-gray-500 placeholder-transparent ring-2 px-2 ring-gray-500/50 focus:ring-sky-600 focus:outline-none"
                  placeholder="Your Name"
                />
                <label
                  htmlFor="yourName"
                  className="absolute left-2 -top-3 text-sm text-gray-500 bg-white px-1 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                >
                  Your Name
                </label>
              </div>
            </div>
            {/* EMAIL FIELD */}
            <div className="w-full bg-white py-4 rounded-lg">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="peer bg-transparent h-10 w-full rounded-lg text-gray-500 placeholder-transparent ring-2 px-2 ring-gray-500/50 focus:ring-sky-600 focus:outline-none"
                  placeholder="Email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-2 -top-3 text-sm text-gray-500 bg-white px-1 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                >
                  Email
                </label>
              </div>
            </div>
          </div>

          {/* TITLE FIELD */}
          <div className="w-full bg-white py-4 rounded-lg mt-4">
            <div className="relative">
              <input
                type="text"
                id="title"
                name="title"
                className="peer bg-transparent h-10 w-full rounded-lg text-gray-500 placeholder-transparent ring-2 px-2 ring-gray-500/50 focus:ring-sky-600 focus:outline-none"
                placeholder="Title"
              />
              <label
                htmlFor="title"
                className="absolute left-2 -top-3 text-sm text-gray-500 bg-white px-1 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
              >
                Title
              </label>
            </div>
          </div>

          {/* INSTRUCTIONS FIELD */}
          <div className="w-full bg-white py-4 rounded-lg mt-4">
            <div className="relative">
              <textarea
                id="instructions"
                name="instructions"
                className="peer bg-transparent h-28 w-full resize-none rounded-lg text-gray-500 placeholder-transparent ring-2 px-2 ring-gray-500/50 focus:ring-sky-600 focus:outline-none"
                placeholder="Instructions"
              />
              <label
                htmlFor="instructions"
                className="absolute left-2 -top-3 text-sm text-gray-500 bg-white px-1 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
              >
                Instructions
              </label>
            </div>
          </div>
          {/*Image File */}
          <div className="flex justify-start items-center gap-4">
            {/* File Upload Box */}
            <div className="rounded-md border border-indigo-500 bg-gray-50 p-4 shadow-md w-28 h-28">
              <label
                htmlFor="foodImg"
                className="flex flex-col items-center gap-2 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 fill-white stroke-indigo-500"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="text-gray-600 font-medium">Upload file</span>
              </label>
              <input
                id="foodImg"
                name="foodImg"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
            {/* Image Preview or Question Mark Icon */}
            <div className="flex justify-center items-center rounded-md border border-indigo-500 bg-gray-50 shadow-md w-28 h-28">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Uploaded"
                  className="w-full h-full object-cover rounded-md"
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={30}
                  height={30}
                  id="Help"
                >
                  <path
                    d="M12.59552,8.1052856c-1.3356934-0.3458862-2.6988525,0.4564819-3.0447388,1.7921753c-0.0690308,0.2675171,0.0918579,0.5403442,0.359375,0.609375s0.5403442-0.0918579,0.609375-0.359375c0.126709-0.4932251,0.4951172-0.8884277,0.9782104-1.0494995c0.7857666-0.2619629,1.6350708,0.1627197,1.8969727,0.9484253c0.2619629,0.7857666-0.1626587,1.6350708-0.9484253,1.8969727c-0.6036377,0.2243042-0.9979858,0.8074341-0.9814453,1.4511719v0.628479c0.0001221,0.276001,0.223999,0.4996338,0.5,0.4994507h0.0005493c0.276001-0.0001831,0.4996338-0.223999,0.4994507-0.5v-0.6279297c-0.0135498-0.2148438,0.1074219-0.4155884,0.3037109-0.5039062c0.7988892-0.2697754,1.4077759-0.9243774,1.6191406-1.7406616C14.7335815,9.8143311,13.9311523,8.4511719,12.59552,8.1052856z M11.9646606,15.3973999c-0.3452148,0-0.625,0.2798462-0.625,0.625s0.2797852,0.625,0.625,0.625c0.3451538,0,0.625-0.2798462,0.625-0.625S12.3098145,15.3973999,11.9646606,15.3973999z M12,2C6.4771729,2,2,6.4771729,2,12s4.4771729,10,10,10c5.5201416-0.0064697,9.9935303-4.4798584,10-10C22,6.4771729,17.5228271,2,12,2z M12,21c-4.9705811,0-9-4.0294189-9-9s4.0294189-9,9-9c4.9683228,0.0054321,8.9945679,4.0316772,9,9C21,16.9705811,16.9705811,21,12,21z"
                    fill="#66ccff"
                  ></path>
                </svg>
              )}
            </div>
          </div>
          {/* BUTTON */}
          <button className="w-full rounded border-0 bg-gradient-to-tl from-pink-400 via-indigo-400 to-teal-400 py-2 px-6 text-lg cursor-pointer text-white hover:bg-indigo-600 focus:outline-none mt-4">
            {!isPending ? (
              "Share"
            ) : (
              <>
                <div className="flex items-center justify-center w-full  text-gray-900 dark:text-gray-100 dark:bg-gray-950">
                  <div>
                    <h1 className="text-white font-bold flex items-center">
                      <svg
                        stroke="white"
                        fill="white"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="animate-spin"
                        height={20}
                        width={20}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13.6695 15.9999H10.3295L8.95053 17.8969L9.5044 19.6031C10.2897 19.8607 11.1286 20 12 20C12.8714 20 13.7103 19.8607 14.4956 19.6031L15.0485 17.8969L13.6695 15.9999ZM5.29354 10.8719L4.00222 11.8095L4 12C4 13.7297 4.54894 15.3312 5.4821 16.6397L7.39254 16.6399L8.71453 14.8199L7.68654 11.6499L5.29354 10.8719ZM18.7055 10.8719L16.3125 11.6499L15.2845 14.8199L16.6065 16.6399L18.5179 16.6397C19.4511 15.3312 20 13.7297 20 12L19.997 11.81L18.7055 10.8719ZM12 9.536L9.656 11.238L10.552 14H13.447L14.343 11.238L12 9.536ZM14.2914 4.33299L12.9995 5.27293V7.78993L15.6935 9.74693L17.9325 9.01993L18.4867 7.3168C17.467 5.90685 15.9988 4.84254 14.2914 4.33299ZM9.70757 4.33329C8.00021 4.84307 6.53216 5.90762 5.51261 7.31778L6.06653 9.01993L8.30554 9.74693L10.9995 7.78993V5.27293L9.70757 4.33329Z"></path>
                      </svg>{" "}
                      Sharing . . .
                    </h1>
                  </div>
                </div>
              </>
            )}
          </button>
        </form>
      </div>
    </>
  );
}
