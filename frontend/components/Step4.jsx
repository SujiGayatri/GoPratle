"use client";

export default function Step4({ formData, prevStep, handleSubmit, loading }) {
  return (
    <div className="flex flex-col gap-4">

      <h3 className="text-xl font-semibold">Review & Submit</h3>

      <div className="bg-gray-100 p-4 rounded-lg text-sm">
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={prevStep}
          className="px-4 py-2 bg-gray-300 rounded-lg"
        >
          Back
        </button>

        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>

    </div>
  );
}