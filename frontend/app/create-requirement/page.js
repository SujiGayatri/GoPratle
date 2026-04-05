"use client";

import { useState } from "react";
import Step1 from "../../components/Step1";
import Step2 from "../../components/Step2";
import Step3 from "../../components/Step3";
import Step4 from "../../components/Step4";
import StepIndicator from "../../components/StepIndicator";

export default function CreateRequirement() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const res = await fetch("https://gopratle-9gwe.onrender.com/api/requirements", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      await res.json();

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start py-12 px-4">

      {/* Hide Step Indicator after submit */}
      {!submitted && <StepIndicator step={step} />}

      <h2 className="text-3xl font-bold mb-8 text-center">
        Post Your Requirement
      </h2>

      {/* ✅ SUCCESS SCREEN */}
      {submitted ? (
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl border border-gray-100 text-center">
          
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            ✅ Requirement Submitted!
          </h2>

          <p className="text-gray-600 mb-6">
            Your requirement has been successfully posted. We’ll connect you with the right professionals soon.
          </p>

          <button
            onClick={() => {
              setFormData({});
              setStep(1);
              setSubmitted(false);
            }}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-md transition"
          >
            Create Another Requirement
          </button>

        </div>
      ) : (

        /* ✅ FORM FLOW */
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl border border-gray-100">

          {step === 1 && (
            <Step1
              formData={formData}
              setFormData={setFormData}
              nextStep={() => setStep(2)}
            />
          )}

          {step === 2 && (
            <Step2
              formData={formData}
              setFormData={setFormData}
              nextStep={() => setStep(3)}
              prevStep={() => setStep(1)}
            />
          )}

          {step === 3 && (
            <Step3
              formData={formData}
              setFormData={setFormData}
              nextStep={() => setStep(4)}
              prevStep={() => setStep(2)}
            />
          )}

          {step === 4 && (
            <Step4
              formData={formData}
              prevStep={() => setStep(3)}
              handleSubmit={handleSubmit}
              loading={loading}
            />
          )}

        </div>
      )}
    </div>
  );
}