import React, { useEffect, useState } from 'react';
import AppointmentDataTable from '../AppointmentDataTable/AppointmentDataTable';
import Sitebar from '../Sitebar/Sitebar';

const AllPatients = () => {
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        fetch('https://morning-ravine-21847.herokuapp.com/appointments')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAppointments(data)})
    }, [])
    return (
        <div className="container-fluid row " >
        <Sitebar></Sitebar>
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">All Patients</h5>
            <AppointmentDataTable appointments={appointments} />
        </div>
    </div>
    );
};

export default AllPatients;