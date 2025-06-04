'use client';

type VerifyButtonProps = {
  onClick?: () => void;
};

export default function VerifyButton({ onClick }: VerifyButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      console.log('Verify & Continue clicked');
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-medium float-right"
    >
      Verify & Continue
    </button>
  );
}
