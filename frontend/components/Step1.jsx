"use client";

export default function Step1({ formData, setFormData, nextStep }) {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isStepValid =
    formData.eventName?.trim() &&
    formData.eventType?.trim() &&
    formData.date?.trim() &&
    formData.location?.trim() &&
    formData.hiringType?.trim();

  const inputClass =
    "w-full border border-gray-300 bg-white text-gray-900 placeholder-gray-400 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition";

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-semibold text-gray-900">Event Basics</h3>
      <p className="text-sm text-gray-500">
        Fill the basic event details to continue.
      </p>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Event Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="eventName"
          placeholder="Enter event name"
          value={formData.eventName || ""}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Event Type <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="eventType"
          placeholder="Wedding, Party, Concert..."
          value={formData.eventType || ""}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Event Date <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          name="date"
          value={formData.date || ""}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Location <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="location"
          placeholder="Enter event location"
          value={formData.location || ""}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Venue
        </label>
        <input
          type="text"
          name="venue"
          placeholder="Venue (optional)"
          value={formData.venue || ""}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Hiring For <span className="text-red-500">*</span>
        </label>
        <select
          name="hiringType"
          value={formData.hiringType || ""}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select hiring type</option>
          <option value="planner">Event Planner</option>
          <option value="performer">Performer</option>
          <option value="crew">Crew</option>
        </select>
      </div>

      <div className="pt-2">
        <button
          onClick={nextStep}
          disabled={!isStepValid}
          className={`w-full py-3 rounded-xl font-medium shadow-md transition ${
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