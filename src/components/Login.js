import React from 'react';

function Login() {
  return (
<div class="min-h-screen bg-gray-100 flex flex-col justify-center">
                <div class="max-w-md w-full mx-auto">
                    <div className="text-center font-bold mt-1 text-red-500 text-3xl">Login | Katchup</div>
                </div>
                <div class="max-w-md w-full  shadow-lg mx-auto mt-4 bg-white rounded-md p-8 border border-gray-300">
                    <form action="" className="space-y-6">
                        <div className="">
                            <label className="font-bold text-sm text-gray-600 block">Email Name: </label>
                            <input type="email" className=" w-full p-2 border border-gray-300 round-lg mt-1" />
                        </div>
                        <div className="">
                            <label className="font-bold text-sm text-gray-600 block">Password: </label>
                            <input type="password" className=" w-full p-2 border border-gray-300 round-lg mt-1" />
                        </div>
                        <div className="flex justify-center">
                            <button type='submit' className="w-full py-2 px-4 bg-red-600 hover:bg-red-800 rounded border border-gray-300 p-2 text-white">Login</button>
                        </div>
                    </form>

                    <div className=" mt-3">
                            <label className="font-bold text-sm text-gray-600 block">Don't have an Account?<a className="ml-1 hover:text-red-300" href="/">Click Here</a> to sign up</label>
                    </div>
                </div>
            </div>
  );
}

export default Login;

