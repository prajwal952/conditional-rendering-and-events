import React from 'react'
import img1 from './images/img1.jpg'
import Conditions from './Conditions'

const Events = () => {
    const submitbtn = (e) => {
        <Conditions />
        e.preventDefault();
        console.log("form ")
        // <Conditions />
        console.log("form subbmited")
        // setBackgroundColor('#f0f0f0')

    }

    const inpChange = (e) => {
        console.log(e.target.value)
    }

    return (

        <div style={{ background: '#ADD8E6', height: '100vh' }}>
            <h1 style={{ textAlign: "center", fontFamily: 'fantasy' }}>Prajwal's Trvalling company.co</h1>
            <center>


                <img src={img1} alt="logo" style={{ width: '150px', height: '155px', margin: '20px', borderRadius: '55%' }}></img>
                <h2 style={{ marginBottom: "20px", background: "#98ff98", width: "35%" }}>Contact customer support..!</h2>

                <div className="container " >
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 bg-warning">
                            <form onSubmit={submitbtn} >

                                <div className="row mb-3">
                                    <div className="col">
                                        <label htmlFor="firstName" className="form-label ml-auto text-left" >First Name</label>
                                        <input type="text" className="form-control" placeholder="First Name" onChange={inpChange} />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="lastName" className="form-label ml-auto">Last Name</label>
                                        <input type="text" className="form-control" placeholder="Last Name" onChange={inpChange} />
                                    </div>
                                </div>


                                <label htmlFor="email" className="text-left ml-auto mt-2 " >Email</label>
                                <input type="text" className='mt-1 form-control' placeholder='Enter your email eg: abc@redhat.com ' name='email' onChange={inpChange} />


                                <label htmlFor="mobile" className="form-label ml-auto mt-2" >Mobile Number</label>
                                <input type="text" className='mt-1 form-control' placeholder='Enter your mobile number eg: +91 12345 ' name='mobile' onChange={inpChange} />



                                <div className="input-group mt-2">
                                    <input type="text" className="form-control" placeholder="Choose your reason for contacting us" aria-label="Text input with dropdown button" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Dropdown
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Call back</a></li>
                                            <li><a className="dropdown-item" href="#">Email support</a></li>
                                            <li><a className="dropdown-item" href="#">WhatsApp support</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#">None of the above</a></li>
                                        </ul>
                                    </div>
                                </div>


                                <button type="submit" className="btn btn-success mt-2" onClick={submitbtn}>Submit</button>




                            </form>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>

            </center>

        </div>
    )
}

export default Events