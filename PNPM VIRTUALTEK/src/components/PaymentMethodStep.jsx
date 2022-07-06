import { Row, Col, Form, Radio, Button } from "antd";

import OrderSummary from "components/shop/cart/orderSummary/OrderSummary";

const PAYMENT_METHODS = [
  {
    label: "eSewa",
    value: "esewa",
    image: "/payment-methods/esewa.png",
  },
  {
    label: "Khalti",
    value: "khalti",
    image: "/payment-methods/khalti.png",
  },
  {
    label: "Cash on Delivery",
    value: "cod",
    image: "/payment-methods/cod.png",
  },
];

export default function PaymentMethodStep({ prevStep, nextStep }) {
  const onSubmit = (values) => {
    nextStep(values);
  };

  return (
    <Row gutter={[32, 32]}>
      <Col xs={24} sm={24} md={16}>
        <div className="md:mr-6">
          <h2 className="pb-4 text-2xl font-semibold text-neutral-600">
            Select Payment Method
          </h2>
          <Form onFinish={onSubmit}>
            <Form.Item
              name="payment_method"
              rules={[
                { required: true, message: "Please choose a payment method" },
              ]}
            >
              <Radio.Group>
                {PAYMENT_METHODS.map((method, index) => (
                  <Radio.Button
                    key={index}
                    value={method.value}
                    style={{ height: "auto" }}
                  >
                    <div className="p-3">
                      <img
                        src={method.image}
                        alt={method.label}
                        className="h-[2rem] md:h-[3rem]"
                      />
                    </div>
                  </Radio.Button>
                ))}
              </Radio.Group>
            </Form.Item>
            <div className="mt-10 flex flex-wrap justify-end gap-x-4 gap-y-1">
              <div className="w-[10rem] md:w-[12rem] inline-block">
                <Button type="secondary" size="large" onClick={prevStep}>
                  Back
                </Button>
              </div>
              <div className="w-[10rem] md:w-[12rem] inline-block">
                <Button type="primary" size="large" htmlType="submit">
                  Continue
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </Col>
      <Col xs={24} sm={24} md={8}>
        <div className="w-full max-w-lg mx-auto md:ml-0">
          <OrderSummary />
        </div>
      </Col>
      <style jsx>
        {`
          :global(.ant-radio-group) {
            display: flex;
            flex-flow: row wrap;
            gap: 1rem;
          }

          :global(.ant-radio-button-wrapper) {
            border: 1px solid #d9d9d9 !important;
            border-radius: 0.375rem !important;
          }

          :global(.ant-radio-button-wrapper-checked) {
            border-color: #2274a4 !important;
          }

          :global(.ant-radio-button-wrapper::before) {
            display: none !important;
          }
        `}
      </style>
    </Row>
  );
}
