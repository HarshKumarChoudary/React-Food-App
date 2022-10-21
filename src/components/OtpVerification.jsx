import axios from 'axios';
import React, { Component } from 'react';
import OtpInput from 'react-otp-input';
import { useNavigate, useParams } from 'react-router-dom';
import './style.css';

class OtpVerification extends Component {
    constructor(props) {

        super(props);

        this.state = {
            otp: '',
            numInputs: 6,
            phno: this.props.params.phno,
            hasErrored: false,
            isInputNum: false,
            isInputSecure: false,
            placeholder: '',
        };
    }

    handleOtpChange = (otp) => {
        this.setState({ otp });
    };

    handleOtpClear = () => {
        this.setState({ otp: '' });
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleNumInputsChange = (e) => {
        let numInputs = e.target.value;
        const { minLength, maxLength } = this.state;

        if (numInputs < minLength || numInputs > maxLength) {
            numInputs = 4;

            console.error(`Please enter a value between ${minLength} and ${maxLength}`);
        }

        this.setState({ [e.target.name]: parseInt(numInputs, 10) });
    };


    handleCheck = (e) => {
        const { name } = e.target;
        this.setState((prevState) => ({ [name]: !prevState[name] }));
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // if (this.state.otp.length < 6) {
        //     alert("enter correct OTP");
        // } else {
        // axios.post('https://staging.fastor.in/v1/pwa/user/login', {
        //     phone: this.state.phno,
        //     dial_code: "+91",
        //     otp: this.state.otp
        // }).then(function (response) {
        //     if (response.data.status != "Success") {
        //         alert("enter correct OTP");
        //     } else {
        console.log("Success");
        const navigate = this.props.navigate;
        navigate(`/home`, { replace: true });
        //     }
        // })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }


    render() {
        const {
            otp,
            numInputs,
            hasErrored,
            isInputNum,
            isInputSecure,
            placeholder,
        } = this.state;

        return (
            <div className="top-2/4 left-1/4 fixed flex flex-col">
                <div className="">
                    <div className="">
                        <form onSubmit={this.handleSubmit}>
                            <span className="font-bold text-2xl">
                                OTP Verification
                            </span>
                            <br />
                            <span className="text-gray-500 text-xl">
                                Enter the otp sent to your phone number
                            </span>
                            {/* <div className="margin-top--small gap-4">
                            <OtpInput
                                inputStyle="inputStyle"
                                numInputs={numInputs}
                                hasErrored={hasErrored}
                                errorStyle="error"
                                onChange={this.handleOtpChange}
                                isInputNum={isInputNum}
                                isInputSecure={isInputSecure}
                                shouldAutoFocus
                                value={otp}
                                placeholder={placeholder}
                            />
                        </div> */}
                            <div className="flex flex-col gap-4">
                                <button
                                    className="w-[330px] h-[56px] mt-4 focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                    type="submit"
                                >
                                    Verify
                                </button>
                                <span className='font-bold '>
                                    Don't Received code? <u>Resend</u>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

function WithParams() {
    return <OtpVerification params={useParams()} navigate={useNavigate()} />;
}

export default WithParams;