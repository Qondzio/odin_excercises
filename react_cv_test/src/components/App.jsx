import CvShow from './CvShow'
import CvPrepare from './CvPrepare'
import { useState } from 'react'

function App(){
    const [name, setName]=useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");

    const [school, setSchool] = useState("");
    const [title, setTitle] = useState("");
    const [yearFrom, setYearFrom] = useState("");
    const [yearTo, setYearTo] = useState("");

    const [company, setCompany] = useState("")
    const [jobTitle, setJobTitle] = useState("")
    const [jobYearFrom, setJobYearFrom] = useState("")
    const [jobYearTo, setJobYearTo] = useState("")
    const [responsibilities, setResponsibilities] = useState("")

    const submitPersonal=(item)=>{
        setName(item.name)
        setEmail('Email:'+item.email)
        setPhone('Phone'+item.phone)
    }

    const submitEducation=(item)=>{
        setSchool(item.school)
        setTitle(item.title)
        setYearFrom(item.yearFrom+'-')
        setYearTo(item.yearTo)
    }

    const submitWork=(item)=>{
        setCompany(item.company)
        setJobTitle(item.jobTitle)
        setJobYearFrom(item.jobYearFrom)
        setJobYearTo(item.jobYearTo)
        setResponsibilities(item.responsibilities)
    }

    return(
        <>
            <div className="cvPrepare">
                <CvPrepare submitPersonal={submitPersonal} submitEducation={submitEducation} submitWork={submitWork}/>
            </div>
            <div className="cvShow">
                <CvShow name={name} email={email} phone={phone} school={school} title={title} yearFrom={yearFrom} yearTo={yearTo} company={company} jobTitle={jobTitle}
                jobYearFrom={jobYearFrom} jobYearTo={jobYearTo} responsibilities={responsibilities} />
            </div>
        </>
    )
}


export default App