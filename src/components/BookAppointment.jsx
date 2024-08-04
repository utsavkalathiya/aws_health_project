import React, { useState } from 'react'
import { healthAPI } from '../APi/api';

const BookAppointment = () => {

    const [bookingID, setBookingID] = useState("");

    const [bookAppointment, setBookAppointment] = useState({
        patientID:"",
        name : "",
        age:""
        // address:"",
        // contactNo: null,
        // disease:""
    });

    // const [submit, setSubmit] = useState();

    const bookAppointmentEvent = (event) => {
        event.preventDefault();
        const value = event.target.value;
        const name = event.target.name;

        setBookAppointment((preVal) => {
            switch (name) {
                case "fullName":
                    return {
                        ...preVal,
                        name:value,
                    };
                case "age":
                    return {
                        ...preVal,
                        age:value,
                    };
                    
                case "address":
                    return {
                        ...preVal,
                        address:value,
                    };
                case "contactNo":
                    return {
                        ...preVal,
                        contactNo:value,
                    };
                case "disease":
                    return {
                        ...preVal,
                        disease:value,
                    };
            
                default:
                    return{...preVal};
            }
        })
    }

    const insertPatientData = async (id) => {

        console.log("*****************name*************************")
        console.log(bookAppointment.name)
        console.log("*****************name*************************")
        try {
            const res = await fetch(healthAPI,{
                method: "POST",
                // headers: {
                //     "Content-Type" : "application/json"
                // },
                // headers: {
                //     // 'Access-Control-Allow-Origin': '*', // Allow any origin
                //     // 'Access-Control-Allow-Headers': 'Content-Type',
                //     'Access-Control-Allow-Headers': 'application/json',
                //     // 'Access-Control-Allow-Methods': 'POST' // Allow specific methods
                // },
                body: JSON.stringify({
                    "patientID" : id,
                    "name": bookAppointment.name,
                    "age" : bookAppointment.age
                })
                // body: JSON.stringify({"patientID" : id})
            })
            // .then((res)=>{
            //     if(res.status == 200){
            //         const d = JSON.parse(res.body);
            //         console.log("*******************************************")
            //         console.log(d);
            //         console.log("*******************************************")
            //     }
            // });

           
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
              }
        
              // Parsing the response as JSON
            const result = await res.json();
            console.log('Patient data inserted successfully:', result);

            if(res.status == 200){
                setBookingID(id + "");
            }
            
            // else{
            //     console.log("*******************************************")
            //     console.log("Data contain error")
            //     console.log("*******************************************")
            // }
        } catch (error) {
            console.log("******************Error*************************")
            console.log(error);
            console.log("******************Error************************")            
        }
    }

    const sumbitEvent = (event) => {
        event.preventDefault();

        const dd = new Date();

        const d = dd.getDate().toString();
        const month = dd.getMonth().toString();
        const y = dd.getFullYear().toString();
        
        const millisecond = dd.getMilliseconds().toString();
        const h = dd.getHours().toString();
        const minutes = dd.getMinutes().toString();
        const s = dd.getSeconds().toString();

        const patientID = h + minutes + s + millisecond + d + month + y;

        insertPatientData(patientID);
        

        setBookAppointment((preVal) => {
            return {
                ...preVal,
                patientID:"",
                name : "",
                age:"",
                // address:"",
                // contactNo:"",
                // disease:""
            }
        })
    }

  return (
    <div id='book_appointment' className=''>
        <form onSubmit={sumbitEvent}>
        <table className='w-full'>
            <thead className='text-center bg-blue-gradient p-2' style={{fontSize:"1.5rem"}}>
                Book Appointment
            </thead>
            <tbody className=''>
                <div className='w-full flex justify-between mt-5'>
                    <td> Full Name :</td>
                    <td>
                        <input 
                            type='text'  
                            name="fullName"
                            style={{color:"black"}}
                            value={bookAppointment.name}
                            onChange={bookAppointmentEvent}
                            required={true}
                        />
                    </td>
                </div><div className='w-full flex justify-between mt-5'>
                    <td> Age :</td>
                    <td>
                    <input 
                        type='number'  
                        name="age"
                        style={{color:"black"}}
                        value={bookAppointment.age}
                        onChange={bookAppointmentEvent}
                        required={true}
                    />
                    </td> </div>
                {/* <div className='w-full flex justify-between mt-5'>
                    <td> Address :</td>
                    <td>
                    <input
                        type='text'  
                        name="address"
                        style={{color:"black"}}
                        value={bookAppointment.address}
                        onChange={bookAppointmentEvent}
                    />
                    </td> </div>
                <div className='w-full flex justify-between mt-5'>
                    <td> Contact No :</td>
                    <td>
                    <input
                        type='number'  
                        name="contactNo"
                        maxLength={10}
                        max={10}
                        style={{color:"black"}}
                        value={bookAppointment.contactNo}
                        onChange={bookAppointmentEvent}
                    />
                    </td> 
                </div>
                <div className='w-full flex justify-between mt-5'>
                    <td> Disease :</td>
                    <td> 
                    <input
                        type='text'  
                        name="disease"
                        style={{color:"black"}}
                        value={bookAppointment.disease}
                        onChange={bookAppointmentEvent}
                    /> </td> 
                </div> */}
                <div className='text-center'>
                    <button 
                        type='submit'
                        className='bg-blue-gradient'
                        // onClick={sumbitEvent} 
                        style={{
                            transitionDuration: "0.4s", 
                            // color:"black" ,
                            backgroundColor: "white", 
                            width: "10rem",
                            fontSize:'1.2rem'
                        }}>Book</button>
                </div>
            </tbody>
            <tfoot></tfoot>
        </table>
        </form>

        {
            bookingID !== ""
            ?
                <>
                    <text>Save your appointment ID := {bookingID}</text>
                </>
            : <></>
        }
    </div>
    )
}

export default BookAppointment