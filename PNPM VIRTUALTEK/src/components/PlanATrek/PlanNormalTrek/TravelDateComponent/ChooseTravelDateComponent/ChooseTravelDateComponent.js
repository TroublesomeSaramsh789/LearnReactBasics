import "./ChooseTravelDateComponent.scss"
import { useState } from 'react';
import { DatePicker, Space } from 'antd';
import { Form } from 'antd'


export default function ChooseTravelDateComponent({ travelDateType, dispatch, state }) {
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    function handleChange(e, type) {
        if (type === "startDate") {
            dispatch({ type: "setStartDate", payload: e.format("YYYY-MM-DD") })
        }
        else if (type === "endDate") {
            dispatch({ type: "setEndDate", payload: e.format("YYYY-MM-DD") })
        }
    }
    function DatePickerComp() {
        return (
            <div >
                <Space direction="vertical" size={12}>
                    <Form.Item rules={[{ required: true }]}>
                        <DatePicker className="startDate" onChange={(e) => { handleChange(e, "startDate") }} />
                    </Form.Item>
                    <Form.Item rules={[{ required: true }]}>
                        <DatePicker onChange={(e) => { handleChange(e, "endDate") }} />
                    </Form.Item>
                </Space>,
                <div>{state.startDate}</div>
                <div>{state.endDate}</div>
            </div>
        )
    }

    switch (travelDateType) {
        case "Fixed":
            return <DatePickerComp />;
        case "Approx":
            return <DatePickerComp />
        case "Not Fixed":
            return <></>
    }
}