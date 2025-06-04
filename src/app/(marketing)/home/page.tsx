import React from "react";
import ippis from "@/assets/ippis-logo.jpeg";
import Image from "next/image";

const home = () => {
  const statusData = [
    {
      id: 1,
      title: "Verification",
      isActive: true,
    },
    {
      id: 2,
      title: "Personal Information",
      isActive: false,
    },
    {
      id: 3,
      title: "Employment Information",
      isActive: false,
    },
    {
      id: 4,
      title: "Document Upload",
      isActive: false,
    },
    {
      id: 5,
      title: "Review & Submit",
      isActive: false,
    },
  ];
  return (
    <div className="w-screen h-screen overflow-auto relative pt-[32px]">
      <div className="max-w-[70%] mx-auto bg-white shadow-md rounded-lg p-8 space-y-6 border border-black/10">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center justify-between text-gray-500 gap-2 w-full">
            {statusData?.map(({ id, title, isActive }) => {
              return (
                <div
                  key={id}
                  className={`flex flex-col items-center space-x-2 gap-1`}
                >
                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-full font-bold ${
                      isActive ? "bg-green-600  text-white" : "border border-black/20 text-black"
                    }`}
                  >
                    {id}
                  </div>
                  <span className="text-green-700 font-semibold">{title}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-green-700 mb-2">
            Step 1: Identity Verification
          </h2>
          <p className="text-gray-600">
            Please provide your Bank Verification Number (BVN) and National
            Identification Number (NIN) for verification.
          </p>
        </div>

        <div className="border border-red-300 p-6 rounded-md space-y-4">
          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="bvn"
            >
              Bank Verification Number (BVN)
            </label>
            <input
              id="bvn"
              type="text"
              // maxlength="11"
              placeholder="Enter your 11-digit BVN"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="nin"
            >
              National Identification Number (NIN)
            </label>
            <input
              id="nin"
              type="text"
              // maxlength="11"
              placeholder="Enter your 11-digit NIN"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
        </div>

        <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded text-sm text-gray-700">
          <p className="font-semibold">Important</p>
          <p>
            Please ensure that you enter your correct BVN and NIN. These will be
            used to verify your identity and cannot be changed later.
          </p>
        </div>

        <div className="text-right">
          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400">
            Verify & Continue
          </button>
        </div>
      </div>

      <div className="w-full absolute bottom-0 border-t border-t-black/10 flex flex-row items-center justify-center gap-3 py-4">
        <Image
          src={ippis}
          alt="Picture of the author"
          height={64}
          width={64}
          priority
        />
        <p className="text-base">© 2025 IPPIS Nigeria. All rights reserved.</p>
      </div>
    </div>
  );
};

export default home;
