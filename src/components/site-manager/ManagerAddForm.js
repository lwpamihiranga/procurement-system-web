import React, { useState } from 'react';

function ManagerAddForm(){

    const [SiteMngId, setSiteMngId] = useState(null);
    const [FName, setFName] = useState(null);
    const [LName, setLName] = useState(null);
    const [WorkNO, setWorkNO] = useState(null);
    const [HomeNO, setHomeNO] = useState(null);
    const [MNO, setMNO] = useState(null);


    const handleManager  = () => {
        if(SiteMngId === null || FName === null || LName === null || WorkNO === null || HomeNO === null || MNO === null
            || SiteMngId === '' || FName === '' || LName === '' || WorkNO === '' || HomeNO === '' || MNO === ''){
            alert("Error! All the filds should be filled");
        }else if(WorkNO.length != 10 || HomeNO.length != 10 || MNO.length  != 10){
            alert("Numbers should be 10 digits");
        }else if(!(/^\d{10}$/).test(WorkNO) || !(/^\d{10}$/).test(HomeNO) || !(/^\d{10}$/).test(MNO)){
            alert("All input should be numbers");
        }else{
            //add managers
            // const managers = {
                
            // }
            // axios.post("", managers)
            // .then(response => {
            //     console.log(response);
            // })

        }
    }

    return(
        <div className="container jumbotron login-form">
        <h3 className="form-group text-center">Site Manager Form</h3>
    <form>
        <div className="form-group">
            <label>Staff ID</label>
            <input type="text" className="form-control" onChange={(e) => setSiteMngId(e.target.value)}></input>
        </div>
        <div className="form-group">
            <label>First Name</label>
            <input type="text" className="form-control" onChange={(e) => setFName(e.target.value)}></input>
        </div>
        <div className="form-group">
            <label>Last Name</label>
            <input type="text" className="form-control" onChange={(e) => setLName(e.target.value)}></input>
        </div>
        <div className="form-group">
            <label>Work NO</label>
            <input type="text" className="form-control" onChange={(e) => setWorkNO(e.target.value)}></input>
        </div>
        <div className="form-group">
            <label>Home NO</label>
            <input type="text" className="form-control" onChange={(e) => setHomeNO(e.target.value)}></input>
        </div>
        <div className="form-group">
            <label>Mobile NO</label>
            <input type="text" className="form-control" onChange={(e) => setMNO(e.target.value)}></input>
        </div>
    </form>
    <button className="btn btn-success" onClick={handleManager}>Add Manager</button>
</div>
    )
}
export default ManagerAddForm;