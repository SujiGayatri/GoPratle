"use client";

export default function Step4({ formData, prevStep, handleSubmit, loading }) {
  const hiringLabels = {
    planner: "Event Planner",
    performer: "Performer",
    crew: "Crew",
  };

  const detailEntries = formData.details ? Object.entries(formData.details) : [];

  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-2xl font-semibold text-gray-900">Review & Submit</h3>
      <p className="text-sm text-gray-500">
        Please review the entered details before submission.
      </p>

      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 space-y-5">
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-3">
            Event Information
          </h4>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <div className="bg-white border border-gray-200 rounded-xl p-3">
              <span className="text-gray-500 block">Event Name</span>
              <span className="font-medium text-gray-900">
                {formData.eventName || "-"}
              </span>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-3">
              <span className="text-gray-500 block">Event Type</span>
              <span className="font-medium text-gray-900">
                {formData.eventType || "-"}
              </span>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-3">
              <span className="text-gray-500 block">Date</span>
              <span className="font-medium text-gray-900">
                {formData.date || "-"}
              </span>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-3">
              <span className="text-gray-500 block">Location</span>
              <span className="font-medium text-gray-900">
                {formData.location || "-"}
              </span>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-3">
              <span className="text-gray-500 block">Venue</span>
              <span className="font-medium text-gray-900">
                {formData.venue || "Not specified"}
              </span>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-3">
              <span className="text-gray-500 block">Hiring For</span>
              <span className="font-medium text-gray-900">
                {hiringLabels[formData.hiringType] || "-"}
              </span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-3">
            Category Details
          </h4>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            {detailEntries.length > 0 ? (
              detailEntries.map(([key, value]) => (
                <div
                  key={key}
                  className="bg-white border border-gray-200 rounded-xl p-3"
                >
                  <span className="text-gray-500 block capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </span>
                  <span className="font-medium text-gray-900">{value}</span>
                </div>
              ))
            ) : (
              <div className="text-gray-500">No category details added.</div>
            )}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-3">
            Additional Notes
          </h4>
          <div className="bg-white border border-gray-200 rounded-xl p-3 text-sm text-gray-700">
            {formData.additionalInfo?.trim()
              ? formData.additionalInfo
              : "No additional notes provided."}
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-2 gap-4">
        <button
          onClick={prevStep}
          className="w-1/2 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition"
        >
          Back
        </button>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`w-1/2 px-4 py-3 rounded-xl transition font-medium ${
            loading
              ? "bg-green-300 text-white cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600 text-white"
          }`}
        >
          {loading ? "Submitting..." : "Submit Requirement"}
        </button>
      </div>
    </div>
  );
}