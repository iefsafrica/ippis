import CounterDisplay from "@/components/counterDisplay";
import VerificationForm from "@/components/firstSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white py-8 px-4
    ">
      <div className="container max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <CounterDisplay activeIndex={0} />
          <div className="mt-6">

            <VerificationForm />
          </div>
        </div>
      </div>
    </div>
  );
}
