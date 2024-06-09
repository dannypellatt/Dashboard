// page.tsx
import React from 'react';
import CarouselItem from '@/app/components/CarouselItem';
import ThumbnailLink from '@/app/components/ThumbnailLink';

const Page: React.FC = () => {
  const carouselItems = [
    {
      id: 'item1',
      title: 'Full Stack Software Engineer',
      subtitle: 'TrueCoders | 2021',
      imgSrc: '/certifications/truecoders-certificate.png',
    },
    {
      id: 'item2',
      title: 'C#',
      subtitle: 'Sololearn | 2022',
      imgSrc: '/certifications/cSharp-cert.png',
    },
    {
      id: 'item3',
      title: 'HTML',
      subtitle: 'Sololearn | 2022',
      imgSrc: '/certifications/HTMLSololearnCertification.jpeg',
    },
    {
      id: 'item4',
      title: 'SQL',
      subtitle: 'Sololearn | 2022',
      imgSrc: '/certifications/sql-cert.png',
    },
    {
      id: 'item5',
      title: 'Python',
      subtitle: 'Sololearn | 2022',
      imgSrc: '/certifications/PythonCertification.png',
    },
    {
      id: 'item6',
      title: 'C#',
      subtitle: 'LinkedIn | 2022',
      imgSrc: '/certifications/LinkedInCSS.png',
    },
    {
      id: 'item7',
      title: 'OOP',
      subtitle: 'LinkedIn | 2022',
      imgSrc: '/certifications/LinkedInOOP.png',
    },
  ];

  return (
    <main className="">
      <div className="flex flex-col h-screen">
        <div className="carousel flex-grow bg-gray-100">
          {carouselItems.map(item => (
            <CarouselItem
              key={item.id}
              id={item.id}
              title={item.title}
              subtitle={item.subtitle}
              imgSrc={item.imgSrc}
            />
          ))}
        </div>
        <h1 className='flex justify-center items-center text-3xl font-semibold pt-8'>Take a look through some completed courses.</h1>
        <div className="flex justify-center items-center h-1/3 pb-2 gap-2">
          {carouselItems.map(item => (
            <ThumbnailLink
              key={item.id}
              href={`#${item.id}`}
              imgSrc={item.imgSrc}
              label={item.title}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
