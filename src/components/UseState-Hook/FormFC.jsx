import { useState } from "react";


const FormFC = () => {

    const[profile, setProfile] = useState({
        fname: "",
        lname: "",
        email: "",
        number: "",
        message: "",
        isMarried: "",
        gender: "male"
    })

    const inputChange = (e) => {
        const {name, value, type, checked} = e.target;

        if(type==="checkbox") {
            setProfile({...profile, [name]:checked})
        }
        if(type==="radio") {
            setProfile({...profile, [name]: value})
        }
        else {
            setProfile({...profile, [name]:value})
        }

        
    }

    return (
       
        <>
        <h1>Form With Functional Components</h1>
        <div className="form-sec">
            {/* <div class="form-control">
                <input type="text" name="fname" value={profile.fname} placeholder="Enter Your First Name" onChange={(e)=>setProfile({...profile, fname: e.target.value})}></input>
            </div>
            <div class="form-control">
                <input type="text" name="lname" value={profile.lname} placeholder="Enter Your Last Name" onChange={(e)=>setProfile({...profile, lname: e.target.value})}></input>
            </div> */}

            <div className="form-control">
                <input type="text" name="fname" value={profile.fname} placeholder="Enter Your First Name" onChange={inputChange}></input>
            </div>
            <div className="form-control">
                <input type="text" name="lname" value={profile.lname} placeholder="Enter Your Last Name" onChange={inputChange}></input>
            </div>
            <div className="form-control">
                <input type="email" name="email" value={profile.email} placeholder="Enter your Email" onChange={inputChange}></input>
            </div>
            <div className="form-control">
                <input type="number" name="number" value={profile.number} placeholder="Enter your Phone Number" onChange={inputChange}></input>
            </div>
            <div className="form-control">
                <input type="textarea" name="message" value={profile.message} placeholder="Enter your Message" onChange={inputChange}></input>
            </div>
            <div className="form-control">
                <label>Are you Married?</label><input type="checkbox" name="isMarried" checked={profile.isMarried} onChange={inputChange}></input>
            </div>
            <div className="form-control">
                <label>Male <input type="radio" name="gender" checked={profile.gender === "male"} onChange={inputChange} value="Male"></input></label>
                <label>Female <input type="radio" name="gender" checked={profile.gender === "female"} onChange={inputChange} value="Female"></input></label>
            </div>


        </div>

        <div className="content">
            <p>Name: {profile.fname} {profile.lname}</p>
            <p>Email: {profile.email}</p>
            <p>Phone: {profile.number}</p>
            <p>Phone: {profile.message}</p>
            <p>Are you Married: {profile.isMarried ? 'yes': 'no'}</p>
            <p>Gender: {profile.gender}</p>
        </div>
        </>
    )
}

export default FormFC;