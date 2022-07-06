import KnowAboutUs from "../KnowAboutUs/KnowAboutUs";
import WhyVirtualTrek from "../WhyVirtualTrek/WhyVirtualTrek";
import AboutTeam from "../AboutTeam/AboutTeam";
import LegalDocument from "../LegalDocument/LegalDocument";
import TermsAndCondition from "../TermsAndCondition/TermsAndCondition";
import TravellerReview from "../TravellerReviews/TravellerReviews";
import HowToMakePayment from "../HowToMakePayment/HowToMakePayment";
export default function ChooseComponent({ title }) {

    switch (title) {
        case "Know About Us":
            return <KnowAboutUs title={title} />

        case "Why Virtual Trek":
            return <WhyVirtualTrek title={title} />

        case "Meet Our Team":
            return <AboutTeam title={title} />

        case "Legal Documents":
            return <LegalDocument />

        case "Terms and Conditions":
            return <TermsAndCondition />

        case "Traveller Reviews":
            return <TravellerReview />

        case "How to make Payment":
            return <HowToMakePayment />
        default:
            return <h1>Hello</h1>
    }

}