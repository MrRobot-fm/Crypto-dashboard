import Head from 'next/head';
import Header from '@/components/Header';
import TopCards from '@/components/TopCards';
import BarChart from '@/components/BarChart';
import TopCrypto from '@/components/TopCrypto';

export default function Home({ handleSidebar }) {
  return (
    <>
      <Head>
        <title>Crypto Dashboard</title>
      </Head>
      <main className="bg-gray-100 min-h-screen ">
        <Header handleSidebar={handleSidebar} />
        <TopCards />
        <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
          <BarChart />
          <TopCrypto />
        </div>
      </main>
    </>
  );
}
