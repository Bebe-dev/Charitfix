import { useState } from "react";
import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { X } from "tabler-icons-react";

interface VolunteerFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const areas = ["Medical & Blood", "Social Service", "Education", "Fundraising", "Admin & Support"];
const availability = ["Weekdays", "Weekends", "Both"];

export default function VolunteerForm({ isOpen, onClose }: VolunteerFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [selectedAvailability, setSelectedAvailability] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const isValid = name && email && phone && selectedArea && selectedAvailability;

  const handleSubmit = () => {
    if (!isValid) return;
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    // reset after close
    setTimeout(() => {
      setName("");
      setEmail("");
      setPhone("");
      setSelectedArea(null);
      setSelectedAvailability(null);
      setSubmitted(false);
    }, 300);
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
        onClick={handleClose}
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">

          <div className="bg-[#00715D] px-6 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              
              <div>
                <p className="text-white font-bold text-base">Join Volunteers</p>
                <p className="text-green-100 text-xs">Make a difference in your community</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          <div className="px-6 py-6 max-h-[75vh] overflow-y-auto">

            {submitted ? (
              <div className="text-center py-6">
               
                <h3 className="font-bold text-gray-800 text-lg mb-2">You're in, {name.split(" ")[0]}!</h3>
                <p className="text-[#505A59] text-sm mb-6">
                  Thank you for signing up to volunteer with CharitFix. We'll reach out to you at <span className="text-[#00715D] font-medium">{email}</span> within 48 hours.
                </p>
                <Button
                  onClick={handleClose}
                  width="100%"
                  borderRadius="12"
                  backgroundColor="#00715D"
                  color="white"
                  _hover={{ backgroundColor: "white", color: "#00715D", border: "1px solid #00715D" }}
                >
                  Done
                </Button>
              </div>
            ) : (
              <VStack spacing={4} align="stretch">

                <Box>
                  <Text fontSize="xs" color="gray.500" mb={1}>Full Name</Text>
                  <input
                    type="text"
                    placeholder="e.g. Amaka Johnson"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#00715D] transition-colors"
                  />
                </Box>

                <Box>
                  <Text fontSize="xs" color="gray.500" mb={1}>Email Address</Text>
                  <input
                    type="email"
                    placeholder="e.g. amaka@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#00715D] transition-colors"
                  />
                </Box>

                <Box>
                  <Text fontSize="xs" color="gray.500" mb={1}>Phone Number</Text>
                  <input
                    type="tel"
                    placeholder="e.g. 08012345678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#00715D] transition-colors"
                  />
                </Box>

                <Box>
                  <Text fontSize="xs" color="gray.500" mb={2}>Area of Interest</Text>
                  <div className="flex flex-wrap gap-2">
                    {areas.map((area) => (
                      <button
                        key={area}
                        onClick={() => setSelectedArea(area)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium border-2 transition-all duration-150 ${
                          selectedArea === area
                            ? "bg-[#00715D] text-white border-[#00715D]"
                            : "bg-white text-gray-600 border-gray-200 hover:border-[#00715D] hover:text-[#00715D]"
                        }`}
                      >
                        {area}
                      </button>
                    ))}
                  </div>
                </Box>

                <Box>
                  <Text fontSize="xs" color="gray.500" mb={2}>Availability</Text>
                  <div className="flex gap-2">
                    {availability.map((a) => (
                      <button
                        key={a}
                        onClick={() => setSelectedAvailability(a)}
                        className={`flex-1 py-2 rounded-xl text-xs font-semibold border-2 transition-all duration-150 ${
                          selectedAvailability === a
                            ? "bg-[#00715D] text-white border-[#00715D]"
                            : "bg-white text-gray-600 border-gray-200 hover:border-[#00715D] hover:text-[#00715D]"
                        }`}
                      >
                        {a}
                      </button>
                    ))}
                  </div>
                </Box>

                <Button
                  onClick={handleSubmit}
                  isDisabled={!isValid}
                  size="lg"
                  width="100%"
                  borderRadius="12"
                  backgroundColor="#00715D"
                  color="white"
                  _hover={{ backgroundColor: "white", color: "#00715D", border: "1px solid #00715D" }}
                  _disabled={{ opacity: 0.4, cursor: "not-allowed" }}
                >
                  Sign Me Up 
                </Button>

              </VStack>
            )}
          </div>
        </div>
      </div>
    </>
  );
}