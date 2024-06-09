import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
    return (

    <main className="flex min-h-screen flex-col p-0">
    <div className="mt-0 flex grow flex-col gap-4 md:flex-row">
      <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-10">
        <h1 className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}><strong>Veterinary Enterprise Practice Report</strong></h1>
        <p className={`${lusitana.className} text-xl text-gray-800 md:text-2xl md:leading-normal`}>
          A subscription-based online database of major players in the pet health industry.
        </p>
        <p>I played a key role in the transforation of the Report. It began as a PDF, riddled with incorrect data. Through a comprehensive restructuring that included moving to new software, implementing data guidelines, redesigning the look, creating company documentation, and use of advanced tools such as web-scraping and AI, it was transformed into a profitable online database, available to over 50,000 subscribers.</p>

      </div>
      <div className="flex flex-col justify-center gap-1 rounded-lg px-6 py-10 md:w-1/20 md:px-10">
        <div className="flex items-center justify-center p-1 md:w-1/20 md:px-0 md:py-12">
            <Image
            src="/epr-screenshots.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
            />
            <Image
            src="/epr-screenshots.png"
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
                    <li>- Airtable (database)</li>
                    <li>- Softr (UX/UI)</li>
                    <li>- CodeChimp (analytics)</li>
                    <li>- Canva (graphic design)</li>
                    <li>- ChatGPT (AI Chatbot)</li>
                    <li>- Clay (web scraping)</li>
                    <li>- Notion (team workspace)</li>
                    <li>- Zoom (video chat)</li>
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