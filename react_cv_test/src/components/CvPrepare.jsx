import '../styles/cvPrepare.css'
import { useState } from 'react'

function FormPersonal(props){
    const [name, setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    return (
        <div className="form-section">
            <h4>Personal details</h4>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" autoComplete='on' maxLength={5} required onChange={(e)=>setName(e.target.value)}/>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" autoComplete='on' required onChange={(e)=>setEmail(e.target.value)}/>
                <label htmlFor="phone">Phone number</label>
                <input type="text" id="phone" name="phone" autoComplete='on' required onChange={(e)=>setPhone(e.target.value)}/>
                <button id="submit-personal" onClick={()=>props.submitPersonal({name:name, email:email, phone:phone})}>Submit</button>
            </form>
            
        </div>
    )
}

function FormEducation(props){
    const [school, setSchool] = useState("");
    const [title, setTitle] = useState("Bachelor");
    const [yearFrom, setYearFrom] = useState("");
    const [yearTo, setYearTo] = useState("");
    return (
        <div className="form-section">
            <h4>Educational experience</h4>
            <form>
                <label htmlFor="school">School name</label>
                <input type="text" id="school" name="school" onChange={(e)=>{setSchool(e.target.value)}}/>
                <label htmlFor="title">Title</label>
                <select name="title" id="title" onChange={(e)=>{setTitle(e.target.value)}}>
                    <option value="Bachelor">Bachelor</option>
                    <option value="Master">Master</option>
                    <option value="Doctor">Doctor</option>
                </select>
                <div className="years">
                    <span>
                        <label htmlFor="from">From:</label>
                        <input type="number" id="year" name="year" min={1950} max={2025} onChange={(e)=>{setYearFrom(e.target.value)}}/>
                    </span>
                    <span>
                        <label htmlFor="to">To:</label>
                        <input type="number" id="year" name="year" min={1950} max={2025} onChange={(e)=>{setYearTo(e.target.value)}}/>
                    </span>
                </div>
            </form>
            <button id="submit-education" onClick={()=>{props.submitEducation({school:school,title:title,yearFrom:yearFrom,yearTo:yearTo})}}>Submit</button>
        </div>
    )
}

function FormWork(props){
    const [company, setCompany] = useState("")
    const [jobTitle, setJobTitle] = useState("")
    const [jobYearFrom, setJobYearFrom] = useState("")
    const [jobYearTo, setJobYearTo] = useState("")
    const [responsibilities, setResponsibilities] = useState("")
    
    return (
        <div className="form-section">
            <h4>Work experience</h4>
            <form>
                <label htmlFor="company">Company name</label>
                <input type="text" id="company" name="company" onChange={(e)=>{setCompany(e.target.value)}}/>
                <label htmlFor="position">Position title</label>
                <input type="text" id="position" name="position" onChange={(e)=>{setJobTitle(e.target.value)}}/>
                <div className="years">
                    <span>
                        <label htmlFor="from">From:</label>
                        <input type="number" id="year" name="year" min={1950} max={2025} onChange={(e)=>{setJobYearFrom(e.target.value)}}/>
                    </span>
                    <span>
                        <label htmlFor="to">To:</label>
                        <input type="number" id="year" name="year" min={1950} max={2025} onChange={(e)=>{setJobYearTo(e.target.value)}}/>
                    </span>
                </div>
                <label htmlFor="responsibilities">Main responsibilities</label>
                <textarea name="responsibilities" id="responsibilities" rows={10} onChange={(e)=>{setResponsibilities(e.target.value)}}></textarea>
            </form>
            <button id="submit-work" onClick={props.submitWork({company:company,jobTitle:jobTitle, jobYearFrom:jobYearFrom, jobYearTo:jobYearTo, responsibilities:responsibilities})}>Submit</button>
        </div>
    )
}

export default function CvPrepare(props){
    return (
        <>
            <FormPersonal submitPersonal={props.submitPersonal}/>
            <FormEducation submitEducation={props.submitEducation}/>
            <FormWork submitWork={props.submitWork}/>
        </>
    )
}