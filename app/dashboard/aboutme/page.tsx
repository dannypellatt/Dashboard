import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (

    <main className="flex min-h-screen flex-col p-0">
      <div className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2">
        <div className="mx-auto">
          <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
            My Software Journey
          </h1>
          <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-white rounded-box border-solid border-2 border-black-600">
            <div className="carousel-item">
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure><img src="/gradphoto.jpeg" alt="Graduation photo" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">From Rocks to Rock 'n' Roll</h2>
                    <p>Growing up in the south of England, I was the first in my family to attend college. While studying, I discovered a love for software through analyzing geophysical data. Although I graduated in 2014 with a BS in Geology, my path took an unexpected turn shortly after when I was signed as a singer-songwriter, allowing me to play music around the world.</p>
                  </div>
                </div>
            </div> 
          <div className="carousel-item">
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="/MeMusic.jpg" alt="Playing music" /></figure>
                <div className="card-body">
                  <h2 className="card-title">The Accidental Developer</h2>
                  <p>After a few years, I returned to England and started my own music business, which led me to learn <i>just enough </i>HTML, CSS, and JavaScript to build my own website. This hands-on experience sparked a new passion for web development, and I began helping friends and family with their web projects.</p>
                </div>
              </div>
          </div> 
          <div className="carousel-item">
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="/movingToAmerica.jpeg" alt="Moving to America" /></figure>
                <div className="card-body">
                  <h2 className="card-title">Stars, Stripes, and Syntax</h2>
                  <p>In 2021, I got my green card and moved to the US, ready for a new career. I realized that the creativity, perseverance, and continuous learning that fueled my love of music were the same qualities needed in software development. This insight motivated me to dive deeper into coding.</p>
                </div>
              </div>
          </div> 
          <div className="carousel-item">
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="/gandalf.jpeg" alt="Gandalf" /></figure>
                <div className="card-body">
                  <h2 className="card-title">A Coding Makeover</h2>
                  <p>Determined to transition into tech, I immersed myself in online courses and attended a bootcamp. Here, I mastered ASP.NET Core, C#, SQL, Git, OOP, TDD, debugging, and web development. It was a challenging but rewarding journey, building a solid foundation for my new career.</p>
                </div>
              </div>
          </div> 
          <div className="carousel-item">
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="/MeComputer.JPG" alt="Me at a Ccomputer" /></figure>
                <div className="card-body">
                  <h2 className="card-title">It's Official Mum, I'm a Developer!</h2>
                  <p>After bootcamp, I quickly landed a job as a .NET full-stack developer. My education didn't stop there — I pursued certifications in React, Python, JavaScript, TypeScript, and more. This commitment to continuous learning keeps me adaptable and ready for new challenges.</p>
                </div>
              </div>
          </div> 
          <div className="carousel-item">
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="/banjoAndMeCoding.JPG" alt="Coding with my dog" /></figure>
                <div className="card-body">
                  <h2 className="card-title">Latest Adventures in Coding</h2>
                  <p>In recent years, I’ve been lucky enough to work with some amazing people (and one very cute dog) on diverse projects. From developer to product manager, I’ve used my business and coding expertise to help companies create successful solutions. These experiences have honed my abilities and allowed me to develop impactful software.</p>
                </div>
              </div>
          </div> 
        
        </div>

        </div>

        <div>
          <div className="join join-vertical w-full border border-base-300">
            <p>Full stack Software Developer & Product Manager. While working as a developer, I have used many different tools and techniques, some of the most memorable include:</p>
            <br></br>
            <div className="collapse collapse-arrow join-item">
              <input type="radio" name="my-accordion-4" id="item-1" defaultChecked />
              <label htmlFor="item-1" className="collapse-title text-xl font-medium">
                Various Development Tools
              </label>
              <div className="collapse-content">
                <br></br>
                <ul>
                  <li><strong>Languages: </strong>HTML5, CSS3, JavaScript, TypeScript, C#, Python</li>
                  <br></br>
                  <li><strong>Frameworks: </strong>React, Angular, Vue, Bootstrap/Tailwind CSS, Blazor/MudBlazor</li>
                  <br></br>
                  <li><strong>Database Management: </strong>SQL (MySQL, PostgreSQL), NoSQL (MongoDB, AirTable), ORMs (Entity Framework)</li>
                  <br></br>
                  <li><strong>Technologies: </strong>ASP.NET, .NET Core, Node.js, Express.js</li>
                  <br></br>
                  <li><strong>Practices & Tools: </strong>Restful APIs, authentication and authorization (OAuth, JWT), continuous integration/continuous deployment (CI/CD), debugging (Chrome DevTools, Visual Studio Debugger), unit testing (nUnit, Postman)</li>
                  <br></br>
                  <li><strong>Architecture: </strong> Microservices, Cloud services (AWS, Azure), Containerization (Docker, Kubernetes)</li>
                </ul>
                <br></br>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" id="item-2" />
              <label htmlFor="item-2" className="collapse-title text-xl font-medium">
                Development Techniques & Practices
              </label>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" id="item-3" />
              <label htmlFor="item-3" className="collapse-title text-xl font-medium">
                
              </label>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <br></br>
            <p>On a more personal note, my passions include:</p>
            <br></br>
            <ul>
              <li>- Music - I play 7 instruments and love to write my own songs, I released an original EP in 2019.</li>
              <li></li>
            </ul>
          </div>
        </div>

        
        {/* <div className="">
          <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
            About Me
          </h1>
          <div className="p-4 space-x-4 bg-white rounded-box border-solid border-2 border-black-600">
          <div role="tablist" className="tabs tabs-lifted">
            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="devTools" tab-active/>
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
              <h1>Tools:</h1>
              <br></br>
              <ul>
                <li><strong>Languages: </strong>HTML5, CSS3, JavaScript, TypeScript, C#, Python</li>
                <br></br>
                <li><strong>Frameworks: </strong>React, Angular, Vue, Bootstrap/Tailwind CSS, Blazor/MudBlazor</li>
                <br></br>
                <li><strong>Database Management: </strong>SQL (MySQL, PostgreSQL), NoSQL (MongoDB, AirTable), ORMs (Entity Framework)</li>
                <br></br>
                <li><strong>Technologies: </strong>ASP.NET, .NET Core, Node.js, Express.js</li>
                <br></br>
                <li><strong>Practices & Tools: </strong>Restful APIs, authentication and authorization (OAuth, JWT), continuous integration/continuous deployment (CI/CD), debugging (Chrome DevTools, Visual Studio Debugger), unit testing (nUnit, Postman)</li>
                <br></br>
                <li><strong>Architecture: </strong> Microservices, Cloud services (AWS, Azure), Containerization (Docker, Kubernetes)</li>
              </ul>
            </div>

            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Management"/>
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
              Tab content 2

            </div>
          </div>
        </div>
        </div> */}

        

      </div>      
    </main>
  );
}