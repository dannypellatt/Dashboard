import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
    return (

    <main className="flex min-h-screen flex-col p-0">
    <div className="mt-0 flex grow flex-col gap-4 md:flex-row">
      <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-10">
        <h1 className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}><strong>PetLog</strong></h1>
        <p className={`${lusitana.className} text-xl text-gray-800 md:text-2xl md:leading-normal`}>
        A Proof of Concept app designed to track a pet's health through daily reports.
        </p>
        <p>I designed and built the PetLog app for a veterinary practice group interested in exploring its potential use. The app enables users to log various metrics about their pets to detect changes, aid recovery, and preempt illness. I utilized React's Next.js with Tailwind CSS for the front end, connecting to a Postgres database by leveraging React Server Components, achieving fast, dynamic rendering of CRUD operations. It also featured user authentication to support multiple accounts. The app was well received, with positive feedback from the veterinary practice group.</p>

      </div>
      <div className="flex flex-col justify-center gap-1 rounded-lg px-6 py-10 md:w-1/20 md:px-10">
        <div className="flex items-center justify-center p-1 md:w-1/20 md:px-0 md:py-12">
            <Image
            src="/petlog-temp.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
            />
            <Image
            src="/petlog-temp.png"
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
                    <li>- React (framework)</li>
                    <li>- Next.js, Tailwind CSS (UX/UI)</li>
                    <li>- TypeScript, JavaScript, CSS (Languages)</li>
                    <li>- Postgres (Database)</li>
                    <li>- React Server Components (data fetching)</li>
                    <li>- Notion (team workspace)</li>
                    <li>- NextAuth.js (Authentication)</li>
                </ul>
            </div>
            <div>
                <p>Strategy & Business:</p>
                <br></br>
                <ul>
                    <li>- Consumer interviews</li>
                    <li>- Roadmaps</li>
                    <li>- Database management</li>
                    <li>- Team leadership</li>
                    <li>- Coaching</li>
                    <li>- Prioritization</li>
                    <li>- User stories</li>
                    <li>- OKRs</li>
                </ul>
            </div>
            <div>
                <p>Performance Metrics:</p>
                <br></br>
                <ul>
                    <li>- 50,000+ subscribers</li>
                    <li>- 98% user satisfaction</li>
                    <li>- Over 99.9% accuracy</li>
                    <li>- Industry recognition</li>
                    <li>- Over 1200% increase in</li>
                    <li>users since redesign </li>
                    <li>- Premium offering now</li>
                    <li>in planning phase</li>
                </ul>
            </div>
        </div>       
      </div>    
    </div>
  </main>
);
}