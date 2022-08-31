import React from "react";

class FormCC extends React.Component {

    state = {
        fname: "",
        lname: "",
        email: "",
        phone: "",
        isMarried: false,
        isCitizen: "",
        message: "",
        gender: "male"
    }

    handleOnInputChange = (e) => {
        const{name, type, value, checked} = e.target
        console.log("LN:14", name, value, type, checked)
        

        if(type==="checkbox") {
            this.setState ({
             [name]: checked   
            })
        }
        if (type==="radio") {
            this.setState ({
                [name]: value
            })
        }
        else {
            this.setState ({
                [name]: value
            })
        }
    }


    render() {
        const {fname, lname, email, phone, isMarried, isCitizen, message, gender} = this.state
        return (
            <>
                <h1>Form With Class Component</h1>
                <div className="form-sec">
                    <div className="form-control">
                        <input type="text" placeholder="Enter Your First Name" value={fname} name="fname" onChange={this.handleOnInputChange}></input>
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Enter Your Last Name" value={lname} name="lname" onChange={this.handleOnInputChange}></input>
                    </div>
                    <div className="form-control">
                        <input type="email" placeholder="Enter Your Last Email" value={email} name="email" onChange={this.handleOnInputChange}></input>
                    </div>
                    <div className="form-control">
                        <input type="number" placeholder="Enter Your Phone Number" value={phone} name="phone" onChange={this.handleOnInputChange}></input>
                    </div>
                    <div className="form-control">
                        <label>Are you Married?</label><input type="checkbox" checked={isMarried} name="isMarried" onChange={this.handleOnInputChange}></input>
                    </div>
                    <div className="form-control">
                        <label>Are you Indian Citizen?</label><input type="checkbox" checked={isCitizen} name="isCitizen" onChange={this.handleOnInputChange}></input>
                    </div>
                    <div className="form-control">
                        <input type="textarea" name="message" value={message} onChange={this.handleOnInputChange}></input>
                    </div>
                    <div className="form-control">
                        <label>Male <input type="radio" name="gender" value="male" checked={gender === "male"} onChange={this.handleOnInputChange}></input></label>
                        <label>Female <input type="radio" name="gender" value="Female" checked={gender === "female"} onChange={this.handleOnInputChange}></input></label>
                    </div>
                </div>

                <div className="output">
                    <p>Name: {fname} {lname}</p>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                    <p>Are you Married : {isMarried ? 'Yes' : 'No'}</p>
                    <p>I am : {isCitizen ? 'an Indian' : 'Not an Indian'}</p>
                    <p>Message: {message}</p>
                    <p>Gender: {gender}</p>
                </div>
            </>
        )
    }
}

export default FormCC;