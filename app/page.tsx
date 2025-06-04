'use client";';
import Image from "next/image";

const RegistrationForm = () => {
	return (
		<div className="form-card flex items-center justify-center bg-[#FFF] w-[100%] max-w-[1300px] h-[94vh] mx-auto my-[3vh] pt-[26px] px-[16px] md:px-[70px] pb-[20px] shadow-md overflow-scroll scrollbar-hide">
			<div className="flex flex-col items-start justify-between ngap-[24px] w-[100%] h-[100%]">
				<div className="flex items-center flex-wrap p-3 w-full zbg-pink-200 justify-between mb-2 pb-6 border-b-2 border-gray-300">
					<div className="flex flex-col items-center justify-center gap-1">
						<span className="rounded-full bg-green-700 text-black text-[16px] font-semibold w-[40px] h-[40px] flex items-center justify-center">
							1
						</span>
						<p className="text-green-800">Verification</p>
					</div>
					<div className="flex flex-col items-center justify-center gap-1">
						<span className="rounded-full bg-white border-2 border-gray-300 text-black text-[16px] font-semibold w-[40px] h-[40px] flex items-center justify-center">
							2
						</span>
						<p>Personal Information</p>
					</div>
					<div className="flex flex-col items-center justify-center gap-1">
						<span className="rounded-full bg-white border-2 border-gray-300 text-black text-[16px] font-semibold w-[40px] h-[40px] flex items-center justify-center">
							3
						</span>
						<p>Employment Information</p>
					</div>
					<div className="flex flex-col items-center justify-center gap-1">
						<span className="rounded-full bg-white border-2 border-gray-300 text-black text-[16px] font-semibold w-[40px] h-[40px] flex items-center justify-center">
							4
						</span>
						<p>Document Upload</p>
					</div>
					<div className="flex flex-col items-center justify-center gap-1">
						<span className="rounded-full bg-white border-2 border-gray-300 text-black text-[16px] font-semibold w-[40px] h-[40px] flex items-center justify-center">
							5
						</span>
						<p>Review & Submit</p>
					</div>
				</div>
				{/* <hr className="bg-gray-400 h-[2px] my-4 w-full" /> */}
				<div className="mb-[20px]">
					<h2 className="font-extrabold text-green-800 text-[28px] my-4">
						Step 1: Identity Verification
					</h2>
					<p className="text-[17px] text-gray-800 mt-[8px] mb-4">
						Please provide your Bank Verification Number (BVN) and National
						Identification Number (NIN) for verification.
					</p>
				</div>
				<form className="flex  flex-col gap-[32px] w-[100%] mb-[76px]">
					<div className="border py-10 px-6 border-orange-200 flex flex-col gap-7 rounded">
						<div className="flex flex-col gap-2">
							<label htmlFor="">Bank Verification Number (BVN)</label>
							<input
								type="number"
								className="border py-3 rounded-lg placeholder-black p-2"
								placeholder="Enter your 11-digit BVN"
								required
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="">National Identification Number (NIN)</label>
							<input
								type="number"
								className="border py-3 rounded-lg p-2 placeholder-black"
								placeholder="Enter your 11-digit NIN"
								required
							/>
						</div>
					</div>
					<div className="warning border-2 border-amber-200 bg-pink-100 text-black p-4 flex flex-col gap-2 rounded-lg">
						<h5 className="flex items-center gap-3 text-black font-semibold">
							<span className="rounded-full size-6 flex items-center justify-center p-1 border-2 border-orange-800 text-orange-800">
								!
							</span>
							Important
						</h5>
						<p className=" text-[16px] pl-[36px]">
							Please ensure that you enter your correct BVN and NIN. These will
							be used to verify your identity and cannot be changed later.
						</p>
					</div>

					<button className="w-[200px] self-end bg-green-800 text-white font-semibold py-[15px] rounded-lg px-[5px] hover:bg-green-500 transition">
						Verify & Continue
					</button>
				</form>
			</div>
		</div>
	);
};

export default RegistrationForm;
