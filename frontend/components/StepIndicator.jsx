"use client";

export default function StepIndicator({ step }) {
  const steps = ["Basics", "Details", "More Info", "Submit"];

  return (
    <div className="w-full max-w-2xl mx-auto mb-10">
      
      <div className="flex items-center justify-between relative">
        
        {/* Line */}
        <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200 z-0" />

        {steps.map((label, index) => {
          const stepNumber = index + 1;
          const isActive = step >= stepNumber;

          return (
            <div key={index} className="relative z-10 flex flex-col items-center flex-1">
              
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-semibold shadow-md transition
                ${isActive ? "bg-indigo-500" : "bg-gray-300"}`}
              >
                {stepNumber}
              </div>

              <p className="text-sm mt-2 text-gray-600 text-center">
                {label}
              </p>

            </div>
          );
        })}
      </div>
    </div>
  );
}