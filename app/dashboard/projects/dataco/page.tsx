import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
    return (

    <main className="flex min-h-screen flex-col p-0">
    <div className="mt-0 flex grow flex-col gap-4 md:flex-row">
      <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-10">
        <h1 className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}><strong>DataCo</strong></h1>
        <p className={`${lusitana.className} text-xl text-gray-800 md:text-2xl md:leading-normal`}>
          An integration and migration platform that uniformly presents data from any PIMS source.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius corrupti quis voluptatum dicta ab repellendus ullam explicabo, provident excepturi minus vitae ipsam inventore eaque, recusandae placeat autem architecto magni. Dolorem?</p>

      </div>
      <div className="flex flex-col justify-center gap-1 rounded-lg px-6 py-10 md:w-1/20 md:px-10">
        <div className="flex items-center justify-center p-1 md:w-1/20 md:px-0 md:py-12">
            <Image
            src="/dataco2.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
            />
            <Image
            src="/dataco2.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing mobile version"
            />
        </div>
        <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
            <div>
                <p>Software Used:</p>
                <br></br>
                <ul>
                    <li>- </li>
                    <li>- </li>
                    <li>- </li>
                    <li>- </li>
                    <li>- </li>
                    <li>- </li>
                    <li>- </li>
                    <li>- </li>
                </ul>
            </div>
            <div>
                <p>Strategy & Business:</p>
                <br></br>
                <ul>
                    <li>- </li>
                    <li>- </li>
                    <li>- </li>
                    <li>- </li>
                    <li>- </li>
                    <li>- </li>
                    <li>- </li>
                    <li>- </li>
                </ul>
            </div>
            <div>
                <p>Performance Metrics:</p>
                <br></br>
                <ul>
                    <li>- </li>
                    <li>- </li>
                    <li>- </li>
                    <li>- </li>
                    <li>- </li>
                    <li>- </li>
                    <li>- </li>
                    <li>- </li>
                </ul>
            </div>
        </div>       
      </div>    
    </div>
  </main>
);
}