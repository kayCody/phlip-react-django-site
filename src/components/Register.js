import React from 'react';

function Register() {
  return (
    <div class="min-h-screen bg-gray-100 flex flex-col justify-center">
            <div class="max-w-md w-full mx-auto">
                <div className="text-center font-bold mt-1 text-red-500 text-3xl">Sign up | Katchup</div>
            </div>
            <div class="max-w-md w-full  shadow-lg mx-auto mt-4 bg-white p-8 rounded-md border border-gray-300">
                <form action="" className="space-y-6">
                    <div className="">
                        <label className="font-bold text-sm text-gray-600 block">First Name: </label>
                        <input type="text" className=" w-full p-2 border border-gray-300 round-lg mt-1" />
                    </div>
                    <div className="">
                        <label className="font-bold text-sm text-gray-600 block">Last Name: </label>
                        <input type="text" className=" w-full p-2 border border-gray-300 round-lg mt-1" />
                    </div>
                    <div className="">
                        <label className="font-bold text-sm text-gray-600 block">Email Name: </label>
                        <input type="email" className=" w-full p-2 border border-gray-300 round-lg mt-1" />
                    </div>
                    <div className="">
                        <label className="font-bold text-sm text-gray-600 block">Select below your Position</label>
                        <select className="w-full p-2 border border-gray-300 round-lg mt-3">
                            <option>select Here</option>
                            <option>Vendor</option>
                            <option>Rider</option>
                            <option>Vendor</option>
                        </select>
                    </div>
                    <div className="">
                        <label className="font-bold text-sm text-gray-600 block">Password: </label>
                        <input type="password" className=" w-full p-2 border border-gray-300 round-lg mt-1" />
                    </div>
                    <div className="">
                        <label className="font-bold text-sm text-gray-600 block">Confirm Password: </label>
                        <input type="password" name="password2" className=" w-full p-2 border border-gray-300 round-lg mt-1" />
                    </div>
                    <div className="flex justify-center">
                        <button type='submit' className="w-full py-2 px-4 bg-red-600 hover:bg-red-800 rounded border border-gray-300 p-2 text-white">Sign Up</button>
                    </div>
                </form>
                <div className="mt-3">
                        <label className="font-bold text-sm text-gray-600 block">Do you Already have an Account?<a className="ml-1 hover:text-red-300" href="/login">Click Here</a> to Login </label>
                    </div>
            </div>
        </div>
  );
}

export default Register;
