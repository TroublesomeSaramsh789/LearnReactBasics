import { Steps } from 'antd'

import TravelInfoComponent from '../TravelInfoComponent/TravelInfoComponent';
import GuideInfoComponent from '../GuideInfoComponent/GuideInfoComponent';
import FinalStep from '../FinalStep/FinalStep';

const { Step } = Steps




export default function StepsComp({ activeStep, trekData }) {
  
  const steps = [
    {
      title: "",
      content: <TravelInfoComponent trekData={trekData} />,
    },
    {
      title: "",
        content: <FinalStep trekData={trekData} />,
    },
    {
        title: "",

        content:
          trekData?.trekCreatedByRole == "Admin" ? (
            <div>Created by Admin</div>
          ) : (
            <GuideInfoComponent trekData={trekData} />
          ),
      },
      {
        title: "",
        content: <h5>Personal Information</h5>,
      },
    ];
    return (
        <div>
            <Steps current={activeStep - 1} >
                <Step title="Travel Info" description="" />
                <Step title="Guide Info" description="" />
                <Step title="Traveller Info" description="" />
                 <Step title="Final Step" description="" />
            </Steps>
            <div className="steps-content" >{steps[activeStep - 1].content}</div>

        </div>
    );
}
