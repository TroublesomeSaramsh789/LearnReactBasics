import "./GuideInfoComponent.scss"
import { useState } from 'react';

import { Select } from 'antd';
const { Option } = Select;

const guides = ["Guide A", "Guide B", "Guide C"]

export default function GuideInfoComponent({state, dispatch}) {
    const [guideType, setGuardType] = useState("choose");
    const handleGuideTypeChange = (e) => {
      
        
        setGuardType(e.target.value)
    };
    return (
        <div>
            <label>
                <input
                    type="radio"
                    value="choose"
                    checked={guideType === "choose"}
                    onChange={handleGuideTypeChange}
                />
                I want to choose my own guide
            </label>
            <label>
                <input
                    type="radio"
                    value="recommend"
                    checked={guideType === "recommend"}
                    onChange={handleGuideTypeChange}
                />
                Choose a Recommended guide
            </label>
            <div>
                {
                    guideType === "choose" ?
                        <Select defaultValue={guides[0]} style={{ width: 200 }}>
                            {guides.map((guide, index) => {
                                return <Option key={index}>{guide}</Option>
                            })}
                        </Select>
                        :
                        <div> Choose from here</div>
                }

            </div>
        </div>
    )
}