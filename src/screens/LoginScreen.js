import './LoginScreen.css';
import LoginScreenHeader from '../components/LoginScreenHeader/LoginScreenHeader';
import SectionDevices from '../components/SectionDevices/SectionDevices';
import SectionDownload from '../components/SectionDownload/SectionDownload';
import SectionAnywhere from '../components/SectionAnywhere/SectionAnywhere';
import SectionKids from '../components/SectionKids/SectionKids';
import SectionFAQ from '../components/SectionFAQ/SectionFAQ';
import LoginScreenFooter from '../components/LoginScreenFooter/LoginScreenFooter';
import { useState } from 'react';

const LoginScreen = () => {
  const [language, setLanguage] = useState('russian');
  const [signIn, setSignIn] = useState(false);

  const signInHandler = () => {
    setSignIn(true);
  };

  const changeLanguage = lang => {
    setLanguage(lang);
  };

  return (
    <div className='login-screen'>
      <LoginScreenHeader
        language={language}
        onLanguage={changeLanguage}
        onSignIn={signInHandler}
        signedIn={signIn}
      />
      <div className='login-screen__divider' />
      <main className='login-screen__main'>
        <SectionDevices language={language} />
        <div className='login-screen__divider' />
        <SectionDownload language={language} />
        <div className='login-screen__divider' />
        <SectionAnywhere language={language} />
        <div className='login-screen__divider' />
        <SectionKids language={language} />
        <div className='login-screen__divider' />
        <SectionFAQ language={language} onSignIn={signInHandler} />
        <div className='login-screen__divider' />
      </main>
      <LoginScreenFooter language={language} />
    </div>
  );
};

export default LoginScreen;
