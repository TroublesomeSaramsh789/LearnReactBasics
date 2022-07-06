import { useState } from "react";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Form, Input, Button, DatePicker, InputNumber } from "antd";
import StepsComp from "./Steps";
import { BsFillPeopleFill } from "react-icons/bs";

import "./StepFormMain.scss";
import {
  useAddNormalBooking,
  useAddVirtualBooking,
} from "../../../services/WebsiteApisService";
import LoaderComp from "../../LoaderComp/LoaderComp";

const { RangePicker } = DatePicker;

const canGotoNextStepChecker = async (nameList, form) => {
  try {
    await form.validateFields(nameList);
    return true;
  } catch (error) {
    return false;
  }
};

const canGoToNextStep = async (activeStep, form) => {
  switch (activeStep) {
    case 1:
      return true;
    case 2:
      return true;
    case 3:
      return await canGotoNextStepChecker(
        ["phone_number", "fullName", "email", ""],
        form
      );
    // return true;
    default:
      return false;
  }
};

export default function StepFormMain({ trekData }) {
  const [form] = Form.useForm();

  const [activeStep, setActiveStep] = useState(1);

  const { mutate: addNormalBooking, isLoading: loadingAddNormalBooking } =
    useAddNormalBooking();
  const { mutate: addVirtualBooking, isLoading: loadingAddVirtualBooking } =
    useAddVirtualBooking();

  if (loadingAddNormalBooking) {
    return <LoaderComp />;
  }
  const handleStepChange = async (stepType) => {
    if (stepType === "prev") {
      return setActiveStep(activeStep - 1);
    }

    if (activeStep === 3) {
      form.submit();
    }

    const canGo = await canGoToNextStep(activeStep, form);
    if (canGo) {
      return setActiveStep(activeStep + 1);
    }
  };

  const handleSubmit = (values) => {
    values.startDate = values.startDate.toISOString();
    values.trek = trekData?._id;
    values.endDate = values.endDate.toISOString();

    if (trekData?.trekType === "Normal") {
      addNormalBooking(values);
    } else {
      addVirtualBooking(values);
    }
  };

  return (
    <div className="container py-6 sm:py-12">
      <div className="p-8 sm:p-12 rounded-md shadow-[0_0_4px_0_rgba(0,0,0,0.1)]">
        <div className="mt-8  items-center space-y-8 sm:flex-row sm:space-y-0 sm:space-x-12">
          <div>
            <StepsComp activeStep={activeStep} trekData={trekData} />
          </div>
          <div className="mt-4">
            <div className="max-w-xl mx-auto">
              <Form layout="vertical" form={form} onFinish={handleSubmit}>
                <Form.Item
                  label="Start Date"
                  name="startDate"
                  rules={[
                    { required: true, message: "Please select start  date" },
                  ]}
                  hidden={activeStep !== 3}
                >
                  <DatePicker />
                </Form.Item>

                <Form.Item
                  label="EndDate Date"
                  name="endDate"
                  rules={[
                    { required: true, message: "Please select end date" },
                  ]}
                  hidden={activeStep !== 3}
                >
                  <DatePicker />
                </Form.Item>

                <Form.Item
                  label="Full Name"
                  name="fullName"
                  rules={[{ required: true, message: "Enter Full Name" }]}
                  hidden={activeStep !== 3}
                >
                  <Input size="large" placeholder="Enter full name" />
                </Form.Item>

                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Enter Email" },
                    { type: "email", message: "Please enter a valid email" },
                  ]}
                  hidden={activeStep !== 3}
                >
                  <Input size="large" placeholder="Enter valid email" />
                </Form.Item>

                <Form.Item
                  label="Contact Number"
                  name="contactNumber"
                  rules={[{ required: true, message: "Enter Contact Number" }]}
                  hidden={activeStep !== 3}
                >
                  <Input size="large" placeholder="Enter Contact Number" />
                </Form.Item>
                {trekData?.trekType === "Normal" ? (
                  <Form.Item
                    label="No of Traveller"
                    name="people"
                    rules={[{ required: true, message: "Enter No of People" }]}
                    hidden={activeStep !== 3}
                  >
                    <InputNumber
                      size="large"
                      placeholder="Enter No of People"
                    />
                  </Form.Item>
                ) : null}

                <Form.Item
                  label="Address"
                  name="address"
                  rules={[{ required: true, message: "Enter Address" }]}
                  hidden={activeStep !== 3}
                >
                  <Input size="large" placeholder="Enter Address" />
                </Form.Item>
              </Form>
              <div className="flex space-x-4">
                <Button
                  type="primary"
                  size="large"
                  disabled={activeStep <= 1}
                  onClick={() => handleStepChange("prev")}
                  icon={<ArrowLeftOutlined />}
                >
                  Previous
                </Button>
                {activeStep === 4 || (
                  <Button
                    type="primary"
                    size="large"
                    icon={<ArrowRightOutlined />}
                    onClick={() => handleStepChange("next")}
                  >
                    Next
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
