
"use client";

import { useState } from "react";
import OtpVerificationModal, { VerifyOtpButton } from "./OtpVerificationModal";

export default function ExampleUsage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleVerifyOtp = async (otp: string) => {
    // Handle OTP verification logic here
    console.log("Verifying OTP:", otp);
  };

  return (
    <div>
      <VerifyOtpButton onClick={() => setIsModalOpen(true)} />
      <OtpVerificationModal
        email="user@example.com"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onVerify={handleVerifyOtp}
      />
    </div>
  );
}
