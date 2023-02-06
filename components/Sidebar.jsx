import Link from 'next/link';
import { RxSketchLogo, RxDashboard } from 'react-icons/rx';
import { GrSearch } from 'react-icons/gr';
import { BiNews } from 'react-icons/bi';

const Sidebar = ({ children, closeSidebar }) => {
  return (
    <div
      className={
        closeSidebar
          ? 'flex w-[calc(100%+5rem)] -translate-x-[5rem] ease-out duration-500'
          : 'flex w-full translate-x-0 ease-in duration-500'
      }
    >
      <div
        className={
          'fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'
        }
      >
        <div className="flex flex-col items-center">
          <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
            <RxSketchLogo size={20} />
          </div>

          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
          <Link href="/">
            <div className="bg-gray-100 hover:bg-gray-200 my-4 p-3 rounded-lg inline-block ">
              <RxDashboard size={20} />
            </div>
          </Link>
          <Link href="/search-crypto">
            <div className="bg-gray-100 hover:bg-gray-200 my-4 p-3 rounded-lg inline-block ">
              <GrSearch size={20} />
            </div>
          </Link>
          <Link href="/news">
            <div className="bg-gray-100 hover:bg-gray-200 my-4 p-3 rounded-lg inline-block ">
              <BiNews size={20} />
            </div>
          </Link>
        </div>
      </div>

      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
