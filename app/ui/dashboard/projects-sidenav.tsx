import Link from 'next/link';
import ProjectsNavLinks from '@/app/ui/dashboard/projects-nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function ProjectsSideNav() {
  return (
    <div className="flex h-full flex-col px-0 py-0 md:px-0">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-black p-4 md:h-20"
        href="/dashboard/projects"
      >
        <div className="w-32 text-white md:w-40">
          <h2>Projects</h2>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <ProjectsNavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      </div>
    </div>
  );
}
