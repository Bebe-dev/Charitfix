import { useState } from "react";
import {
  Box,
  Button,
  Text,
  VStack,
  //   Input,
  //   HStack,
  //   Progress,
  //   Flex,
  //   Spacer,
} from "@chakra-ui/react";
import { X } from "tabler-icons-react";
import { DonationCardProps } from "../utils/types/donationCardProps";
import { payWithPaystack } from "../utils/paystack";

interface DonateFormProps {
  isOpen: boolean;
  onClose: () => void;
  donation: DonationCardProps | null;
}

const presetAmounts = [1000, 5000, 10000, 25000, 50000];

export default function DonateForm({
  isOpen,
  onClose,
  donation,
}: DonateFormProps) {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<1 | 2>(1);

  if (!isOpen) return null;

  const finalAmount =
    selectedAmount ?? (customAmount ? Number(customAmount) : null);

  const handleNext = () => {
    if (!finalAmount || finalAmount <= 0) return;
    setStep(2);
  };

  const handleBack = () => setStep(1);

  const handleSubmit = () => {
    if (!name || !email || !finalAmount) return;

    payWithPaystack({
      email: "praiseisinkaye@email.com",
      amount: finalAmount * 100,
      reference: `donation_${donation?.category}_${Date.now()}`,
      onSuccess: () => {
        alert("Payment successful!");
        alert(
          `Thank you ${name}! Your donation of ₦${finalAmount.toLocaleString()} to ${donation?.title} is being processed.`,
        );
      },
      onClose: () => {
        console.log("Payment closed");
      },
    });

    // reset
    setStep(1);
    setSelectedAmount(null);
    setCustomAmount("");
    setName("");
    setEmail("");
  };

  const handleClose = () => {
    onClose();
    setStep(1);
    setSelectedAmount(null);
    setCustomAmount("");
    setName("");
    setEmail("");
  };

  return (
    <div>
      <div
        className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
        onClick={handleClose}
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
          <div className="bg-[#00715D] px-6 py-5 flex items-center justify-between">
            <div>
              <p className="text-white font-bold text-base">
                {step === 1 ? "Choose Amount" : "Your Details"}
              </p>
              <p className="text-green-100 text-xs">
                {donation?.title || "Donation Campaign"}
              </p>
            </div>
            <button
              onClick={handleClose}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          <div className="px-6 pt-5">
            <div className="flex items-center gap-2 mb-1">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step >= 1 ? "bg-[#00715D] text-white" : "bg-gray-200 text-gray-500"}`}
              >
                1
              </div>
              <div
                className={`flex-1 h-1 rounded-full ${step === 2 ? "bg-[#00715D]" : "bg-gray-200"}`}
              />
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === 2 ? "bg-[#00715D] text-white" : "bg-gray-200 text-gray-500"}`}
              >
                2
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-400 mb-4">
              <span>Amount</span>
              <span>Details</span>
            </div>
          </div>

          <div className="px-6 pb-6">
            
            <div className="bg-gray-50 rounded-2xl p-4 mb-5 border border-gray-100">
              <div className="flex justify-between mb-1">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  {donation?.category || "Campaign"}
                </p>
                <span className="text-xs font-bold text-[#00715D]">
                  {donation?.progress || 0}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                <div
                  className="bg-[#00715D] h-1.5 rounded-full"
                  style={{ width: `${donation?.progress || 0}%` }}
                />
              </div>
              <div className="flex gap-4 text-xs">
                <div>
                  <p className="font-bold text-gray-800">{donation?.raised}</p>
                  <p className="text-[#00715D]">Raised</p>
                </div>
                <div>
                  <p className="font-bold text-gray-800">{donation?.goal}</p>
                  <p className="text-[#505A59]">Goal</p>
                </div>
              </div>
            </div>

      
            {step === 1 && (
              <VStack spacing={4} align="stretch">
                <Text fontSize="sm" fontWeight="semibold" color="gray.600">
                  Select an amount
                </Text>

                <div className="grid grid-cols-3 gap-2">
                  {presetAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount("");
                      }}
                      className={`py-2.5 rounded-xl text-sm font-semibold border-2 transition-all duration-150 ${
                        selectedAmount === amount
                          ? "bg-[#00715D] text-white border-[#00715D]"
                          : "bg-white text-gray-700 border-gray-200 hover:border-[#00715D] hover:text-[#00715D]"
                      }`}
                    >
                      ₦{amount.toLocaleString()}
                    </button>
                  ))}
                </div>

                <Box>
                  <Text fontSize="xs" color="gray.500" mb={1}>
                    Or enter a custom amount
                  </Text>
                  <div className="flex items-center border-2 rounded-xl px-3 py-2 gap-2 focus-within:border-[#00715D] border-gray-200 transition-colors">
                    <span className="text-[#00715D] font-bold text-sm">₦</span>
                    <input
                      type="number"
                      placeholder="e.g. 20000"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      className="flex-1 outline-none text-sm text-gray-700 bg-transparent"
                    />
                  </div>
                </Box>

                {finalAmount && finalAmount > 0 && (
                  <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-center">
                    <p className="text-xs text-gray-500">You are donating</p>
                    <p className="text-xl font-extrabold text-[#00715D]">
                      ₦{finalAmount.toLocaleString()}
                    </p>
                  </div>
                )}

                <Button
                  onClick={handleNext}
                  isDisabled={!finalAmount || finalAmount <= 0}
                  size="lg"
                  width="100%"
                  borderRadius="12"
                  backgroundColor="#00715D"
                  color="white"
                  _hover={{
                    backgroundColor: "white",
                    color: "#00715D",
                    border: "1px solid #00715D",
                  }}
                  _disabled={{ opacity: 0.4, cursor: "not-allowed" }}
                >
                  Continue →
                </Button>
              </VStack>
            )}

            {/*  STEP 2 */}
            {step === 2 && (
              <VStack spacing={4} align="stretch">
                <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500">Donating</p>
                    <p className="text-lg font-extrabold text-[#00715D]">
                      ₦{finalAmount?.toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={handleBack}
                    className="text-xs text-[#00715D] underline font-medium"
                  >
                    Change
                  </button>
                </div>

                <Box>
                  <Text fontSize="xs" color="gray.500" mb={1}>
                    Full Name
                  </Text>
                  <input
                    type="text"
                    placeholder="e.g. Amaka Johnson"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#00715D] transition-colors"
                  />
                </Box>

                <Box>
                  <Text fontSize="xs" color="gray.500" mb={1}>
                    Email Address
                  </Text>
                  <input
                    type="email"
                    placeholder="e.g. amaka@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#00715D] transition-colors"
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    Your receipt will be sent here
                  </p>
                </Box>

                <Button
                  onClick={handleSubmit}
                  isDisabled={!name || !email}
                  size="lg"
                  width="100%"
                  borderRadius="12"
                  backgroundColor="#00715D"
                  color="white"
                  _hover={{
                    backgroundColor: "white",
                    color: "#00715D",
                    border: "1px solid #00715D",
                  }}
                  _disabled={{ opacity: 0.4, cursor: "not-allowed" }}
                >
                  Donate ₦{finalAmount?.toLocaleString()} 
                </Button>

                <button
                  onClick={handleBack}
                  className="text-sm text-gray-500 hover:text-[#00715D] transition-colors text-center"
                >
                  ← Back
                </button>
              </VStack>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
