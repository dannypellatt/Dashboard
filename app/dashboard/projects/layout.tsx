import ProjectsSideNav from '@/app/ui/dashboard/projects-sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden p-0 m-0">
        <div className="w-full flex-none md:w-64 p-0 m-0">
          <ProjectsSideNav />
        </div>
        <div className="flex-grow p-0 md:overflow-y-auto m-0">{children}</div>
      </div>
    );
  }
  
