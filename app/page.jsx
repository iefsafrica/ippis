
import Stepper from "@/components/steps";
import VerificationForm from "@/components/verification-form";

export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50 py-10 px-24">
      <div className="w-full max-w-3xl mx-auto bg-white p-24 rounded-lg shadow-md">
        <Stepper current={1} />
        <VerificationForm />
      </div>
    </main>
  );
}
