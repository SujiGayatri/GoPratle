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

  return (
    <div className="flex flex-col gap-4">

      <h3 className="text-xl font-semibold">Details</h3>

      {fields.map((field) => (
        <input
          key={field.name}
          type={field.type}
          name={field.name}
          placeholder={field.label}
          onChange={handleChange}
          className="w-full border border-gray-300 bg-white text-gray-900 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      ))}

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