import Sidebar from '@/components/Sidebar';
import '@/styles/globals.css';
import { useState } from 'react';

export default function App({ Component, pageProps }) {
  const [closeSidebar, setCloseSidebar] = useState(false);
  const handleSidebar = () => {
    setCloseSidebar(prev => !prev);
  };
  return (
    <>
      <Sidebar closeSidebar={closeSidebar}>
        <Component
          {...pageProps}
          setCloseSidebar={setCloseSidebar}
          handleSidebar={handleSidebar}
        />
      </Sidebar>
    </>
  );
}
