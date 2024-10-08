// StepperComponent.jsx
import { Box, Circle, HStack } from "@chakra-ui/react";
import { StepperProps } from "../utils/types/stepperProps";

export default function StepperComponent ({ steps, currentStep }: StepperProps) {
  return (
    <HStack spacing={6} align="center">
      {steps.map((_, index) => (
        <HStack key={index}>
          <Circle
            size="40px"
            bg={index + 1 === currentStep ? "green.600" : "gray.200"}
            color={index + 1 === currentStep ? "white" : "gray.600"}
            border={index + 1 === currentStep ? "2px solid" : ""}
            className="transition-colors duration-300 ease-in-out"
          >
            {index + 1}
          </Circle>
          {index < steps.length - 1 && (
            <Box
              className="h-1"
              w="40px"
              bg={index + 1 < currentStep ? "green.600" : "gray.200"}
              transition="background-color 0.3s ease-in-out"
            />
          )}
        </HStack>
      ))}
    </HStack>
  );
};

