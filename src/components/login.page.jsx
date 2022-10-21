import { useState } from 'react'
import axios from 'axios'
import { Link, Routes, Route, useNavigate } from 'react-router-dom';

function LoginPage() {
    const [value, setValue] = useState('');
    const navigate = useNavigate();


    function handleChange(e) {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.length != 10) {
            console.log("Enter correct phone number");
            return
        }
        axios.post('https://staging.fastor.in/v1/pwa/user/register', {
            phone: value,
            dial_code: "+91"
        })
            .then(function (response) {
                navigate(`/otpverify/${value}`, { replace: true })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="top-2/4 left-1/4 fixed flex flex-col">
            <div>
                <span className="font-bold text-2xl">
                    Enter Your Mobile Number
                </span>
                <br />
                <span className="text-gray-500 text-xl">
                    We will send you the 6 digit code
                </span>
                <br />
                <br />
                <br />
            </div>
            <form onSubmit={handleSubmit} method='post' className="flex flex-col items-center gap-4 justify-center pb-10">
                <input type="text" name="phonenumber" id="phonenumber" placeholder='     Enter your Number' onChange={(e) => { handleChange(e) }} value={value} className="p-2 w-[330px] h-[56px] bg-gray-200 rounded text-gray-500 border border-solid border-gray" />
                {/* <button type='submit' className='w-[330px] h-[56px] focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>Send Code</button> */}
                <input type="submit" className='w-[330px] h-[56px] focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900' value="Send Code" />
            </form>
        </div>
    );
}

export default LoginPage;


// function LoginPage() {
//     const [inputs, setInputs] = useState({});

//     const handleChange = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setInputs(values => ({ ...values, [name]: value }))
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         console.log(inputs);
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>Enter your name:
//                 <input
//                     type="text"
//                     name="username"
//                     value={inputs.username || ""}
//                     onChange={handleChange}
//                 />
//             </label>
//             <label>Enter your age:
//                 <input
//                     type="number"
//                     name="age"
//                     value={inputs.age || ""}
//                     onChange={handleChange}
//                 />
//             </label>
//             <input type="submit" />
//         </form>
//     )
// }

// export default LoginPage;