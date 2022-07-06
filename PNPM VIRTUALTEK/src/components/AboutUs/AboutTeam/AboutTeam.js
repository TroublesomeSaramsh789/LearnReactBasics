
import { Button } from 'antd';
import AboutTeamComponent from "./AboutTeamComponent/AboutTeamComponent"
import './AboutTeam.scss'


import { useOurTeam } from "../../../services/WebsiteApisService"
import LoaderComp from '../../LoaderComp/LoaderComp'




export default function AboutTeam() {



    const { isLoading, data, hasNextPage, isFetchingNextPage, fetchNextPage } = useOurTeam()

    if (isLoading) {
        return <LoaderComp />
    }



    return (
        <div className="aboutTeamWrap">
            {data?.pages.map((page) => {
                return page?.data?.docs?.map((teamMember, index) => {
                    const flipImage = (index + 1) % 2 === 0
                    // return <div>{teamMember.fullName}</div>
                    return <AboutTeamComponent key={index} userImage={teamMember.image} phoneNumber={teamMember.contactNumber} email={teamMember.email} name={teamMember.fullName} post={teamMember.designation} aboutPerson={teamMember.message} flipImage={flipImage} />

                })
            })}
            <div className='loadMoreDiv'>
                <button disabled={!hasNextPage || isFetchingNextPage} >
                    {hasNextPage &&
                        <Button loading={isFetchingNextPage} onClick={fetchNextPage}>Load More</Button>
                    }
                </button>
            </div>

        </div>
    )
}