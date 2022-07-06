import GuideBg from "../../assets/guides.webp"
import HeaderImageComponent from "../AboutUs/HeaderImage/HeaderImage"
import AboutTeamComponent from "../AboutUs/AboutTeam/AboutTeamComponent/AboutTeamComponent"
import Footer from "../Footer/Footer"
import "./Guides.scss"

import UserImage from "../../assets/super_guide_1.jpg"

const ourGuides = [
    {
        userImage: UserImage,
        name: "Mr.Sushil Pandey",
        post: "Tour Planner",
        aboutPerson: "Los, wheny of type and scrambled it to make a type specimen book.Los, wheny of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently  Ipsum.Los, wheny of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently  Ipsum.Los, wheny of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently  Ipsum.Los, wheny of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently  Ipsum.",
        phoneNumber: "9849354809",
        email: "pradeep.dahal@gmail.com",
        flipImage: false
    },
    {
        userImage: UserImage,
        name: "Mr.Sushil Pandey",
        post: "Tour Planner",
        aboutPerson: "Los, wheny of type and scrambled it to make a type specimen book.Los, wheny of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently  Ipsum.Los, wheny of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently  Ipsum.Los, wheny of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently  Ipsum.Los, wheny of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently  Ipsum.",
        phoneNumber: "9849354809",
        email: "pradeep.dahal@gmail.com",
        flipImage: false
    },
    {
        userImage: UserImage,
        name: "Mr.Sushil Pandey",
        post: "Tour Planner",
        aboutPerson: "Los, wheny of type and scrambled it to make a type specimen book.Los, wheny of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently  Ipsum.Los, wheny of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently  Ipsum.Los, wheny of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently  Ipsum.Los, wheny of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently  Ipsum.",
        phoneNumber: "9849354809",
        email: "pradeep.dahal@gmail.com",
        flipImage: false
    },
    {
        userImage: UserImage,
        name: "Mr.Sushil Pandey",
        post: "Tour Planner",
        aboutPerson: "Los, wheny of type and scrambled it to make a type specimen book.Los, wheny of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently  Ipsum.Los, wheny of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently  Ipsum.Los, wheny of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently  Ipsum.Los, wheny of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently  Ipsum.",
        phoneNumber: "9849354809",
        email: "pradeep.dahal@gmail.com",
        flipImage: false
    }

]

export default function Guides() {
    return (
        <>
            <div className="mainGuideWrap">
                <HeaderImageComponent image={GuideBg} title={"Guides"} />
            </div>
            <div className="container">
                <h3 className="guideTitle">Our Guides</h3>
                {ourGuides.map((teamMember, index) => {
                    return (
                        <>
                            <AboutTeamComponent key={index} className={"aboutGuideClass"} userImage={teamMember.userImage} phoneNumber={teamMember.phoneNumber} email={teamMember.email} name={teamMember.name} post={teamMember.post} aboutPerson={teamMember.aboutPerson} flipImage={teamMember.flipImage} />
                        </>

                    )

                })}
            </div>
            <Footer/>
        </>

    )
}