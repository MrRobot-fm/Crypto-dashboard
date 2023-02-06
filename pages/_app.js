import Sidebar from '@/components/Sidebar';
import '@/styles/globals.css';
import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }) {
  const [closeSidebar, setCloseSidebar] = useState(false);
  const handleSidebar = () => {
    setCloseSidebar(prev => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 540) {
        setCloseSidebar(true);
      } else {
        setCloseSidebar(false);
      }
    };
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Sidebar closeSidebar={closeSidebar} setCloseSidebar={setCloseSidebar}>
        <Component
          {...pageProps}
          setCloseSidebar={setCloseSidebar}
          handleSidebar={handleSidebar}
        />
      </Sidebar>
    </>
  );
}
