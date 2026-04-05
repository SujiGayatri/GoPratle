"use client";

export default function Step3({ formData, setFormData, nextStep, prevStep }) {

  const handleChange = (e) => {
    setFormData({
      ...formData,
      additionalInfo: e.target.value,
    });
  };

  return (
    <div className="flex flex-col gap-4">

      <h3 className="text-xl font-semibold">Additional Information</h3>

      <textarea
        placeholder="Any specific requirements or notes..."
        rows={4}
        onChange={handleChange}
        className="w-full border border-gray-300 bg-white text-gray-900 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <div className="flex justify-between mt-4">
        <button
          onClick={prevStep}
          className="px-4 py-2 bg-gray-300 rounded-lg"
        >
          Back
        </button>

        <button
          onClick={nextStep}
          className="px-4 py-2 bg-indigo-500 text-white rounded-lg"
        >
          Next
        </button>
      </div>

    </div>
  );
}