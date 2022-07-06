import "./PlanNormalTrek.scss"
import { Steps, Button, message, Form } from 'antd';
import { useState, useReducer } from 'react';
import normalTrekReducer, { initialState } from "./normalTrekReducer";
import GroupSizeComponent from "./GroupSizeComponent/GroupSizeComponent";
import TravelDateComponent from "./TravelDateComponent/TravelDateComponent";
import TravelInfoComponent from "./TravelInfoComponent/TravelInfoComponent";
import GuideInfoComponent from "./GuideInfoComponent/GuideInfoComponent";
import TravellerInfoComponent from "./TravellerInfoComponent/TravellerInfoComponent";
const { Step } = Steps;


export default function PlanNormalTrek() {
    const [form] = Form.useForm();
    const [current, setCurrent] = useState(0);
    const [state, dispatch] = useReducer(normalTrekReducer, initialState);
    const steps = [
        {
            title: 'Group Size',
            content: <GroupSizeComponent state={state} dispatch={dispatch} />,
        },
        {
            title: 'Travel Date',
            content: <TravelDateComponent state={state} dispatch={dispatch} />,
        },
        {
            title: 'Travel Info',
            content: <TravelInfoComponent state={state} dispatch={dispatch} />,
        },
        {
            title: 'Guide Info',
            content: <GuideInfoComponent state={state} dispatch={dispatch} />,
        },
        {
            title: 'Travel Info',
            content: <TravellerInfoComponent state={state} dispatch={dispatch} />,
        },
    ];

    const next = async () => {
        if (current === 1) {
            if(state.startDate === "" || state.endDate === ""){
                
                await form.validateFields()
            }else{
                setCurrent(current+1)
            }
            
        } else {
            try {
                await form.validateFields().then(
                    () => { setCurrent(current + 1); }
                )
            }
            catch {
                console.log("Form not validated")
            }

        }

      


    };

    const prev = () => {
        setCurrent(current - 1);
    };

    return (

        <div className="container">
            <Form form={form} >
                <Steps current={current}>
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} />
                    ))}
                </Steps>
                <div className="steps-content">{steps[current].content}</div>
                <div className="steps-action">
                    {current < steps.length - 1 && (
                        <Form.Item>
                            <Button type="primary" onClick={() => next()}>
                                Next
                            </Button>
                        </Form.Item>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                            Done
                        </Button>
                    )}
                    {current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                            Previous
                        </Button>
                    )}
                </div>
            </Form>

        </div>
    )
}