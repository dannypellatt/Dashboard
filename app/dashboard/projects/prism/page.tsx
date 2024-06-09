import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
    return (

    <main className="flex min-h-screen flex-col p-0">
    <div className="mt-0 flex grow flex-col gap-4 md:flex-row">
      <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-10">
        <h1 className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}><strong>Prism</strong></h1>
        <p className={`${lusitana.className} text-xl text-gray-800 md:text-2xl md:leading-normal`}>
          A pricing scenario tool that allows retailers to predict revenue before adjusting stock prices.
        </p>
        <p>I was part of a small team within a software company creating a tool on behalf of large retail group, with a collection of outlets around the US. </p>

      </div>
      <div className="flex flex-col justify-center gap-1 rounded-lg px-6 py-10 md:w-1/20 md:px-10">
        <div className="flex items-center justify-center p-1 md:w-1/20 md:px-0 md:py-12">
            <Image
            src="/prism.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
            />
            <Image
            src="/prism.png"
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
                    <li>- Blazor (framework)</li>
                    <li>- MudBlazor (UX/UI)</li>
                    <li>- C#, HTML, CSS (languages)</li>
                    <li>- MySQL (database)</li>
                    <li>- .NET Core (backend)</li>
                    <li>- Entity Framework (data fetching)</li>
                    <li>- Notion (team workspace)</li>
                    <li>- Azure (cloud computing)</li>
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