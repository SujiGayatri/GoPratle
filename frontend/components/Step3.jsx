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
      <h3 className="text-2xl font-semibold text-gray-900">
        Additional Information
      </h3>
      <p className="text-sm text-gray-500">
        Add any notes or preferences for the team. This is optional.
      </p>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Notes
        </label>
        <textarea
          placeholder="Any specific requirements, preferences, timings, or expectations..."
          rows={5}
          value={formData.additionalInfo || ""}
          onChange={handleChange}
          className="w-full border border-gray-300 bg-white text-gray-900 placeholder-gray-400 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
        />
      </div>

      <div className="flex justify-between mt-4 gap-4">
        <button
          onClick={prevStep}
          className="w-1/2 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition"
        >
          Back
        </button>

        <button
          onClick={nextStep}
          className="w-1/2 px-4 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}