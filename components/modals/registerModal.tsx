import useRegisterModal from "@/hooks/useRegisterModal";
import Modal from "../ui/modal";
import { useState } from "react";

export default function RegisterModal() {
  const registerModal = useRegisterModal();

  const [step, setStep] = useState(1);

  const bodyContent = step === 1 ? <RegisterStep1 /> : <RegisterStep2 />;

  const footer = <div>Footer content</div>;

  return (
    <Modal
      body={bodyContent}
      footer={footer}
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
      step={step}
      totalSteps={2}
    />
  );
}

function RegisterStep1() {
  return <div>Register Step 1</div>;
}
function RegisterStep2() {
  return <div>Register Step 2</div>;
}
