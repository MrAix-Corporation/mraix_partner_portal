
"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import LoadingSpinner from "./LoadingSpinner";

interface OtpVerificationModalProps {
  email: string;
  onVerify: (otp: string) => Promise<void>;
  isOpen: boolean;
  onClose: () => void;
}

export function VerifyOtpButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
    >
      Verify OTP
    </button>
  );
}

export default function OtpVerificationModal({ email, onVerify, isOpen, onClose }: OtpVerificationModalProps) {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await onVerify(otp);
      setOtp("");
      onClose();
    } catch (error) {
      toast.error("OTP verification failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      {isLoading && <LoadingSpinner />}
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[400px] mx-4 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl font-semibold text-purple-600 mb-4">OTP Verification</h2>
        <p className="text-sm text-gray-600 mb-6">
          Please enter the verification code sent to {email}
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
            required
          />
          <div className="flex gap-4 mt-8">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 text-sm font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm font-medium transition-colors shadow-sm"
            >
              Verify OTP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
