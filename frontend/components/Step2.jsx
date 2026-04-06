"use client";

import formConfig from "../lib/formConfig";

export default function Step2({ formData, setFormData, nextStep, prevStep }) {
  const fields = formConfig[formData.hiringType] || [];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      details: {
        ...formData.details,
        [e.target.name]: e.target.value,
      },
    });
  };

  const isStepValid = fields.every(
    (field) => formData.details?.[field.name]?.toString().trim()
  );

  const inputClass =
    "w-full border border-gray-300 bg-white text-gray-900 placeholder-gray-400 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition";

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-semibold text-gray-900">Category Details</h3>
      <p className="text-sm text-gray-500">
        These fields change based on who you are hiring for.
      </p>

      {fields.map((field) => (
        <div key={field.name}>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {field.label} <span className="text-red-500">*</span>
          </label>
          <input
            type={field.type}
            name={field.name}
            value={formData.details?.[field.name] || ""}
            placeholder={field.label}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      ))}

      <div className="flex justify-between mt-4 gap-4">
        <button
          onClick={prevStep}
          className="w-1/2 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition"
        >
          Back
        </button>

        <button
          onClick={nextStep}
          disabled={!isStepValid}
          className={`w-1/2 px-4 py-3 rounded-xl transition ${
            isStepValid
              ? "bg-indigo-500 hover:bg-indigo-600 text-white"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}