export function StepHeader({ stepNumber, title, description }) {
  return (
    <div className="space-y-2 ">
      <h1 className="text-2xl text-left font-semibold text-green-700">
        Step {stepNumber}: {title}
      </h1>
      <p className="text-gray-600 text-left">{description}</p>
    </div>
  );
}
