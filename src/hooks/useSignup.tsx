import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postData } from '../util/api';

const useSignup = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const userInfo = { id: id, password: password };

    try {
      await postData<typeof userInfo, void>('users/sign-up', userInfo);
      alert('회원가입되었습니다.');
    } catch (error) {
      console.error('Login failed', error);
      alert('회원가입에 실패했습니다. 다시 시도해 주세요.');
    }

    setId('');
    setPassword('');
    setConfirmPassword('');

    navigate('/');
  };

  return {
    id,
    setId,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    handleSubmit,
  };
};

export default useSignup;
