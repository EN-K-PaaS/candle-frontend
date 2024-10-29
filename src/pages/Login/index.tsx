import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { postData } from '../../util/api';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    const userInfo = { id: id, password: password };

    try {
      await postData<typeof userInfo, void>('users/login', userInfo);
      navigate('/dailyChecklist');
    } catch (error) {
      console.error('Login failed', error);
      alert('로그인에 실패했습니다. 다시 시도해 주세요.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg w-156">
        <div className="flex items-center justify-start mb-6">
          <img src="/icons/candle-icon.png" className="w-8 mr-2 h-9" />
          <h1 className="text-2xl font-bold">Candle</h1>
        </div>
        <h2 className="mb-6 text-2xl font-bold text-center">반가워요!</h2>

        <form>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-left text-gray-700"
              htmlFor="email">
              ID
            </label>
            <div className="flex items-center border border-gray-300 rounded-md">
              <span className="px-3 text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 0a2 2 0 012-2h14a2 2 0 012 2m-18 0v8a2 2 0 002 2h14a2 2 0 002-2v-8"
                  />
                </svg>
              </span>
              <input
                id="email"
                type="text"
                placeholder="아이디를 입력해주세요"
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="w-full px-4 py-2 text-gray-700 outline-none"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-left text-gray-700"
              htmlFor="password">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-md">
              <span className="px-3 text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              </span>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="비밀번호를 입력해주세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 text-gray-700 outline-none"
              />
              <button
                type="button"
                className="px-3 text-gray-400"
                onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={handleLogin}
            className="w-full py-2 text-white transition duration-300 rounded-md bg-buttonBlue hover:bg-buttonBlue">
            로그인
          </button>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              아직 회원이 아니신가요?{' '}
              <Link to="/signup" className="text-buttonBlue hover:underline">
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
