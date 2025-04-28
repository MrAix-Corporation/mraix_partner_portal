"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { forgotPassword, verifyResetPassword } from "../store/auth/authSlice";
import LoadingSpinner from "./LoadingSpinner";
import { toast } from "react-hot-toast";

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
  const [showResetForm, setShowResetForm] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (!showResetForm) {
        const res = await dispatch(forgotPassword(email)).unwrap();
        console.log(res, "UBSJUHJKSF");
        setShowResetForm(true);
        toast.success("Password reset code sent to your email!");
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
        <p className="text-sm text-gray-600 mb-6">
          Enter your email address to receive a password reset link
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!showResetForm ? (
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              required
            />
          ) : (
            <>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter new password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm mb-3"
                required
              />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                required
              />
            </>
          )}
          <div className="flex gap-4 mt-8">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 text-xs font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-xs font-medium transition-colors shadow-sm"
            >
              {!showResetForm ? "Send Reset Link" : "Reset Password"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
