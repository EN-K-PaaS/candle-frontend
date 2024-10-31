import { useNavigate } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';
import './SignUp.modules.css';

const SignUp = () => {
  const {
    id,
    setId,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    handleSubmit,
  } = useSignup();

  const navigate = useNavigate();

  return (
    <div className="signup-container">
      <h2 className="mb-4 text-2xl font-bold">Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="mb-4">
          <label
            htmlFor="id"
            className="block text-sm font-medium text-gray-700">
            Id
          </label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-buttonBlue focus:border-buttonBlue sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-buttonBlue focus:border-buttonBlue sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirm-password"
            className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-buttonBlue focus:border-buttonBlue sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-buttonBlue hover:bg-white hover:text-buttonBlue hover:border-buttonBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-buttonBlue">
          회원가입
        </button>
      </form>
      <button
        onClick={() => navigate('/')}
        className="flex justify-center w-full px-4 py-2 mt-4 text-sm font-medium bg-white border rounded-md shadow-sm text-buttonBlue border-buttonBlue hover:bg-buttonBlue hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-buttonBlue">
        메인화면으로 돌아가기
      </button>
    </div>
  );
};

export default SignUp;
