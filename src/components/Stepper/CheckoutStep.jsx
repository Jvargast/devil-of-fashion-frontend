import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";
import "./CheckoutStep.css";

const CheckoutStep = ({ activeStep }) => {
  const steps = [
    {
      label: "Carrito de compra",
    },
    {
      label: "Pago",
    },
    {
      label: "Compra Realizada",
    },
  ];
  const stepStyles = {
    boxSizing: "border-box",
  };
  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep} style={stepStyles}>
        {steps.map((item, index) => (
          <Step
            key={index}
            active={activeStep === index ? true : false}
            completed={activeStep >= index ? true : false}
          >
            <StepLabel
              style={{
                color: activeStep >= index ? "#e1251b" : "rgba(0, 0, 0, 0.649)",
              }}
            >
              <h1
                style={{
                  color: activeStep >= index ? "white" : "gray",
                }}
              >
                {item.label}
              </h1>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default CheckoutStep;
