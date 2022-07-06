import "./DestinationDetailsTable.scss"

export default function DestinationDetailsTable({ tableData }) {

    if (!tableData || Object.keys(tableData)?.length < 1) {
        return null;
    }

    return (
        <div className="destinationDetailsWrap">

            <table>
                <tr>
                    <td colSpan={2} className="groupTitle">Group</td>
                </tr>
                <tr>
                    <td colSpan={2} className="offerPrice" >We Offer Group Discount<br></br>Save upto <span className="offerPrice">$200 </span>per person</td>
                </tr>

                <tr>
                    <td>No of people</td>
                    <td>Price</td>
                </tr>
                {Object.keys(tableData)?.map((pp, index) => {
                    return (<tr>
                        <td>{pp}</td>
                        <td>{tableData[pp] ? tableData[pp] : ""}</td>
                    </tr>)
                })}





                <tr>
                    <td colSpan={2}>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        </ul>
                    </td>

                </tr>
            </table>
        </div>
    )
}

