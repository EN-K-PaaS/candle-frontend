import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-156">
                <div className="flex items-center justify-start mb-6">
                    <img src="/candle.png" alt="Candle Logo" className="h-8 mr-2" />
                    <h1 className="text-2xl font-bold">Candle</h1>
                </div>
                <h2 className="text-2xl font-bold text-center mb-6">반가워요!</h2>

                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="email">
                            ID
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-md">
                            <span className="px-3 text-gray-400">
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 12v.01M12 8v4m-4 0h8m8-6a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </span>
                            <input
                                id="email"
                                type="text"
                                placeholder="아이디를 입력해주세요"
                                className="w-full py-2 px-4 outline-none text-gray-700"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="password">
                            Password
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-md">
                            <span className="px-3 text-gray-400">
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 11v2m0 4h.01M6 6h12m2 0a2 2 0 00-2-2H6a2 2 0 00-2 2m16 0v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6m16 0V4a2 2 0 00-2-2H6a2 2 0 00-2 2v2"
                                    />
                                </svg>
                            </span>
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="비밀번호를 입력해주세요"
                                className="w-full py-2 px-4 outline-none text-gray-700"
                            />
                            <button type="button" className="px-3 text-gray-400" onClick={togglePasswordVisibility}>
                                {showPassword ? (
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 16l4-4m0 0l-4-4m4 4H7"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                        <label className="flex items-center text-sm">
                            <input type="checkbox" className="mr-2" />
                            로그인 상태 유지하기
                        </label>
                        <a href="#" className="text-sm text-blue-500 hover:underline">
                            비밀번호를 잊어버리셨나요?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        로그인
                    </button>

                    <div className="text-center mt-6">
                        <p className="text-sm text-gray-500">
                            아직 회원이 아니신가요?{' '}
                            <Link to="/signup" className="text-blue-500 hover:underline">
                                회원가입하기
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
