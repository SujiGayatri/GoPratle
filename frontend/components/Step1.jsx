"use client";
export default function Step1({ formData, setFormData, nextStep }) {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col gap-4">

      <h3 className="text-xl font-semibold">Event Basics</h3>

      <input
        type="text"
        name="eventName"
        placeholder="Event Name"
        className="w-full border border-gray-300 bg-white text-gray-900 placeholder-gray-400 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
        onChange={handleChange}
      />

      <input
        type="text"
        name="eventType"
        placeholder="Event Type (Wedding, Party...)"
        className="w-full border border-gray-300 bg-white text-gray-900 placeholder-gray-400 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
        onChange={handleChange}
      />

      <input
        type="date"
        name="date"
        className="w-full border border-gray-300 bg-white text-gray-900 placeholder-gray-400 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
        onChange={handleChange}
      />

      <input
        type="text"
        name="location"
        placeholder="Location"
        className="w-full border border-gray-300 bg-white text-gray-900 placeholder-gray-400 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
        onChange={handleChange}
      />

      <input
        type="text"
        name="venue"
        placeholder="Venue (optional)"
        className="w-full border border-gray-300 bg-white text-gray-900 placeholder-gray-400 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
        onChange={handleChange}
      />

      <select
        name="hiringType"
        className="w-full border border-gray-300 bg-white text-gray-900 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onChange={handleChange}
      >
        <option value="">Select Hiring Type</option>
        <option value="planner">Event Planner</option>
        <option value="performer">Performer</option>
        <option value="crew">Crew</option>
      </select>

      <button
        onClick={nextStep}
        className="bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-xl mt-4 font-medium shadow-md transition-all duration-200"
      >
        Next
      </button>

    </div>
  );
}