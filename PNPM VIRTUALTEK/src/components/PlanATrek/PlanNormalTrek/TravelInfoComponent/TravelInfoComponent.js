import "./TravelInfoComponent.scss"
import { useState, useEffect } from 'react'
import { Input, Select, Form } from 'antd';
const { TextArea } = Input;
const { Option } = Select;

const destinations = [
    "Everest Base Camp",
    "Annapurna Base Camp",
    "Mardi Trip"
]

export default function TravelInfoComponent({ state, dispatch }) {
    const [destination, setDestination] = useState("selectDestination");
    const [loadRecommend, setLoadRecommend] = useState("selectDestination")

    const setPreferredDestination = (e, typeDef) => {
        if (typeDef === "setPreferredDestination") {
            dispatch({ type: "setPreferredDestination", payload: e.target.value })
        }
        else if (typeDef === "setAboutTrip") {
            dispatch({ type: "setAboutTrip", payload: e.target.value })
        }
        else if (typeDef === "setProvidedDestination") {
            dispatch({ type: "setProvidedDestination", payload: e })
        }
    }
    const handleDestinationChange = (e) => {

        dispatch({ type: "changeTripType", payload: e.target.value })
        setDestination(e.target.value)
        setLoadRecommend(e.target.value)

    };
    return (
        <div>
            <label>
                <input
                    type="radio"
                    value="selectDestination"
                    checked={destination === "selectDestination"}
                    onChange={handleDestinationChange}
                />
                I want to set my own live destinations
            </label>
            <br />
            <label>
                <input
                    type="radio"
                    value="recommendDestination"
                    checked={destination === "recommendDestination"}
                    onChange={handleDestinationChange}
                />
                I want to select from recommended live destination
            </label>
            <div className="questionDiv">
                {
                    loadRecommend === "selectDestination"
                        ?
                        <div>
                            <div className="">

                                <Form.Item name="tripDestination" label="Provide Your Prefered Trip Destination" rules={[{ required: true, message: "Please Enter Your Trip" }]}>
                                    <Input onChange={(e) => { setPreferredDestination(e, "setPreferredDestination") }} placeholder="Enter your trip destination" required={true} type="text" />
                                </Form.Item>

                            </div>
                        </div>
                        :
                        <div>
                            <div>
                                <label htmlFor="">Select from Provided Destination</label>
                                <br />
                                <Select onChange={(e) => { setPreferredDestination(e, "setProvidedDestination") }} defaultValue={destinations[0]} style={{ width: 200 }}>
                                    {destinations.map((destination, index) => {
                                        return <Option key={index} value={destination}>{destination}</Option>
                                    })}
                                </Select>
                            </div>
                        </div>
                }
                <div>
                    <label htmlFor="detailLabel">Tell us something about trip</label>
                    <TextArea onChange={(e) => { setPreferredDestination(e, "setAboutTrip") }} name="detailLabel" placeholder="Something something" allowClear />
                </div>


            </div>


            <div>

            </div>
        </div>
    )
}