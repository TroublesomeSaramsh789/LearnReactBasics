import "./ListingPage.scss"

export default function ListingPage({listDatas}) {
    return (
        <div className="mainListingWrap container py-6">
            <div className="row">
                {listDatas.map((listData, index) => {
                    return (
                        <div key={index} className="col-md-6 col-lg-3">
                            {listData}
                        </div>
                    )
                })}



            </div>

        </div>
    )
}