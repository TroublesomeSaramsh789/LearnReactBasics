
import { getImageAbsoluteURL } from "../../../utils/string"
import { useGetGuideById } from "../../../services/WebsiteApisService"
import LoaderComp from '../../LoaderComp/LoaderComp'
import GuideDetailCard from "../../GuideDetails/GuideDetailCard/GuideDetailCard"

export default function GuideInfoComponent({ trekData }) {
    const { isLoading, data } = useGetGuideById(trekData?.trekCreatedBy)
    if (isLoading) {
        return <LoaderComp />
    }

    return (
        <div className="guideDetailCardBox">
            <div className="row">
                <div className="col-lg-1">

                </div>
                <div className="col-lg-10">
                    <GuideDetailCard data={data?.data} />
                </div>
                <div className="col-lg-1">
                     
                </div>
            </div>

        </div>
    )
}