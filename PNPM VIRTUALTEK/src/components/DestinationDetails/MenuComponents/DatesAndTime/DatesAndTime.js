import "./DatesAndTime.scss"

import { Collapse } from "antd"
const { Panel } = Collapse;

export default function FAQ({ data }) {
    const faq = []
    
    data?.faqs?.map((f) => {
        faq.push({
            key: f._id,
            question: f.title,
            answer: f.content
        })
    })
    return (
        <div className="faqSection">
            <h5>Frequenty Asked Question</h5>
            <Collapse defaultActiveKey={['1']} expandIconPosition={"right"}>
                {faq.map((faq, index) => {
                    return (
                        <Panel header={faq.question} key={faq?.key}>
                            <p>{faq.answer}</p>
                        </Panel>
                    )
                })}
            </Collapse>
        </div>
    )
}