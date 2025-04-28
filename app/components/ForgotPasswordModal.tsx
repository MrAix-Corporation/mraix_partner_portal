"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { forgotPassword, verifyResetPassword } from "../store/auth/authSlice";
import LoadingSpinner from "./LoadingSpinner";
import { toast } from "react-hot-toast";
import OtpVerificationModal from "./OtpVerificationModal";

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ForgotPasswordModal({
  isOpen,
  onClose,
}: ForgotPasswordModalProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (!showOtpForm) {
        await dispatch(forgotPassword(email)).unwrap();
        setShowOtpForm(true);
        toast.success("OTP sent to your email!");
      } else {
        if (password !== confirmPassword) {
          toast.error("Passwords do not match!");
          return;
        }
        await dispatch(
          verifyResetPassword({
            email,
            password,
            confirmpassword: confirmPassword,
          }),
        ).unwrap();
        toast.success("Password reset successfully!");
        onClose();
      }
    } catch (error) {
      toast.error(error?.message || "Failed to process request");
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-2xl font-semibold text-purple-600 mb-4">
          Reset Password
        </h2>
        {showOtpForm && <OtpVerificationModal  email,
                            onVerify,
                            isOpen,
                            onClose, />}
      </div>
    </div>
  );
}
