'use client';

import {
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  // { name: 'Projects', href: '/dashboard/projects', icon: HomeIcon },

  { name: 'Online Subscription Database', href: '/dashboard/projects/enterprise-report', icon: DocumentDuplicateIcon },
  { name: 'Pet Health Tracking App', href: '/dashboard/projects/petlog', icon: DocumentDuplicateIcon  },
  { name: 'Vet Report Delivery Tool', href: '/dashboard/projects/dataco', icon: DocumentDuplicateIcon  },
  { name: 'Retail Pricing Scenario Tool ', href: '/dashboard/projects/prism', icon: DocumentDuplicateIcon  },

  { name: 'Vintage Rental Website', href: '/dashboard/projects/vcc', icon: DocumentDuplicateIcon  },
  { name: 'Handyman Website', href: '/dashboard/projects/handyman', icon: DocumentDuplicateIcon  },
];

export default function ProjectsNavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
