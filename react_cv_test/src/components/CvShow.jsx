import '../styles/cvShow.css'



function BasicInfo(props){
    return(
        <div className='basicInfo'>
            <h1>{props.name}</h1>
            <span>
                <p>{props.email}</p>
                <p>{props.phone}</p>
            </span>
        </div>
    )
}

function EducationInfo(props){
    return(
        <div className='educationInfo'>
            <h3>{props.school}</h3>
            <h4>{props.title}</h4>
            <h4>{props.yearFrom}{props.yearTo}</h4>
        </div>
    )
}

function WorkInfo(props){
    return (
        <div className='workInfo'>
            <h3>{props.company}</h3>
            <h4>{props.jobTitle}</h4>
            <h4>{props.jobYearFrom}{props.jobYearTo}</h4>
            <p>{props.responsibilities}</p>
        </div>
    )
}

export default function CvShow(props){

    return(
        <div className="cv">
            <BasicInfo name={props.name} email={props.email} phone={props.phone}/>
            <div className='experience'>
                <div className='education'>
                    <EducationInfo school={props.school} title={props.title} yearFrom={props.yearFrom} yearTo={props.yearTo}/>
                </div>
                <div className='work'>
                    <WorkInfo company={props.company} jobTitle={props.jobTitle}
                jobYearFrom={props.jobYearFrom} jobYearTo={props.jobYearTo} responsibilities={props.responsibilities}/>
                </div>
            </div>
        </div>
    )
}