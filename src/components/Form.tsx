export default function Form() {
  const steps = [
    { id: 1, label: "Verification" },
    { id: 2, label: "Personal information" },
    { id: 3, label: "Employment information" },
    { id: 4, label: "Document upload" },
    { id: 5, label: "Review and Submit" },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-1/2">
      <div className="w-full p-2 bg-red-200 rounded-sm">
        <p className="text-sm text-red-600">Missing required fields</p>
      </div>

      <div className="flex flex-row justify-between items-center mt-4 border-b border-gray-300 pb-4">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center">
            <div
              className={`rounded-full w-8 h-8 flex items-center justify-center ${
                index === 0 ? "bg-green-800" : "bg-gray-300"
              }`}
            >
              <p className="text-sm">{step.id}</p>
            </div>
            <p
              className={`text-xs font-normal text-gray-700 ${
                index === 0 && "text-green-800"
              }`}
            >
              {step.label}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3 mt-4">
        <h1 className="text-lg text-green-900 font-bold">
          Step 1: Identity Verification
        </h1>

        <p className="text-xs">
          Please provide your Bank Verification Number (BVN) and National
          Identification Number (NIN) for verification
        </p>

        <form>
          <div className="border-1 rounded-sm border-red-100 p-4 mb-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-gray-700">
                Bank Verification Number (BVN)
              </label>
              <input
                type="number"
                maxLength={11}
                className="border rounded p-1 text-xs border-black placeholder:text-black"
                placeholder="Enter your BVN"
              />
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <label className="text-xs font-semibold text-gray-700">
                National Identification Number (NIN)
              </label>
              <input
                maxLength={11}
                type="number"
                className="border rounded p-1 text-xs border-black placeholder:text-black"
                placeholder="Enter your NIN"
              />
            </div>
          </div>

          <div className="rounded-sm border border-yellow-200 p-2">
            <p className="text-[10px] font-semibold">Important</p>
            <p className="text-[10px] font-normal">
              Please ensure that you enter your correct BVN and NIN. These will
              be used to verify your identity and cannot be changed later.
            </p>
          </div>

          <div className="flex flex-row justify-end">
            <button
              type="submit"
              className="mt-4 bg-green-800 text-white p-1.5 rounded hover:bg-green-700 transition duration-200 text-xs"
            >
              Verify and Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
