import React, { useEffect, useState } from 'react'
import { patientDetailAPI } from '../APi/api';

const BookingDetails = () => {

    const [bookingID, setBookingID] = useState("");
    const [patiantDetail,setPatiantDetail] = useState({});

    const inputEnvent = (event) => {
        event.preventDefault();
        console.log(event.target.value)
        setBookingID(event.target.value)

        // setBookingID((event) => {})
    }

    // useEffect(() => {
    //     const patient_detail = fetch(patientDetailAPI,{
    //         method: "POST",
    //         // headers: {
    //         //     'Access-Control-Allow-Origin': '*',
    //         //     'Content-Type': 'application/json',
    //         //     'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
    //         // },
    //         // headers: {
    //         //     'Content-Type': 'application/json'
    //         // },
    //         body: JSON.stringify({"patientID" : id})
    //     }).then(res => {
    //         setPatiantDetail(
    //             {"name" : "Chirag"}
    //         );

    //         console.log("***********************************");
    //         console.log(res);
    //         console.log("***********************************");

    //     });
    // });

    console.log("My response = ");
    console.log(patiantDetail);
    const getPatientData = async (id) => {

        console.log("This is my ID : " + id);

        try {
            const patient_detail = await fetch(patientDetailAPI,{
                method: "POST",
                headers: {
                    // 'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    // 'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
                },
                // headers: {
                //     'Content-Type': 'application/json'
                // },
                body: JSON.stringify({"patientID" : id})
            })

            if (patient_detail.status == 200) {
                console.log("Hello mota bhai")
                const d = await patient_detail.json();
                console.log(d);
                setPatiantDetail(d);
            }else{
                console.log("Something Wrong")
            }
        } catch (error) {
            console.log(error);
        }

        // const patient_detail = await fetch("https://b50cdwmzmi.execute-api.us-east-2.amazonaws.com/development/patient",{
        //     method: "GET",
        //     headers: {
        //         // 'Access-Control-Allow-Origin': '*',
        //         'Content-Type': 'application/json',
        //         // 'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        //     },
        //     // headers: {
        //     //     'Content-Type': 'application/json'
        //     // },
        //     // body: JSON.stringify({"patientID" : id})
        // }).then(res => {
        //     if(res.body != null){
        //         // setPatiantDetail(res.body);
        //         console.log("Hello bro")
        //         console.log(JSON.stringify(res.body));
        //         setPatiantDetail(JSON.stringify(res.body))
        //     }else{
        //         console.log("kem Chhe lala");
        //     }
        // });

        
        // console.log(patient_detail);
        // const d = JSON.stringify(patient_detail.body);
        // const d = patient_detail.body;
        // console.log(d);
    }

    console.log("*********************************************")
    console.log(patiantDetail)
    console.log("*********************************************")
    const getDetails = (event) => {
        event.preventDefault();

        console.log("Hello Chirag " + bookingID);

        getPatientData(bookingID);
        setBookingID("");
    }

    console.log("*********************************************")
    console.log(Object.keys(patiantDetail).length)
    console.log("*********************************************")
  return (
    <div id='booking_details'>
        <div className='text-center mb-4 bg-blue-gradient p-2' style={{fontSize: "1.5rem",}}>
            Booking Details
        </div>

        <div
            className=' flex flex-row w-100 h-40 justify-center'
        >
            <div 
                className='flex flex-col  text-center justify-evenly'
                style={{
                    alignItems:"center"
                }}
            >
                <text>Enter Booking ID</text>
                <input 
                    type='text'
                    name="bookingID"
                    className='w-100'
                    value={bookingID}
                    onChange={inputEnvent}
                    style={{color:"black"}}
                    ></input>
                <button
                    type='submit'
                    className='bg-blue-gradient'
                    onClick={getDetails}
                    style={{
                        transitionDuration: "0.4s", 
                        // color:"black" ,
                        
                        backgroundColor: "white", 
                        width: "10rem",
                        fontSize:'1.1rem',
                        padding:"2px"
                    }}
                    >Get Details</button>
             </div>
        </div>

        <table style={{width:"100%"}}>
            <thead>
                {
                    Object.keys(patiantDetail).length === 0 ?
                        <>
                            <div></div>
                        </> 
                    : 
                        <>
                            <tr>
                                <td>Patient ID</td>
                                <td>Name</td>
                                <td>Age</td>
                                {/* <td>Zip Code</td>
                                <td>Contact No.</td>
                                <td>Disease</td> */}
                            </tr>
                            <tr>
                                <td>{patiantDetail.patientID}</td>
                                <td>{patiantDetail.name}</td>
                                <td>{patiantDetail.age}</td>
                                {/* <td>4</td>
                                <td>5</td>
                                <td>6</td> */}
                            </tr>
                        </>
                }
                
            </thead>
        </table>
    </div>
  )
}

export default BookingDetails