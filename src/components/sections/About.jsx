import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = ["React","HTML","CSS","JavaScript","Tailwindcss","TypeScripts"];
    const backendSkills = ["Node.js","MongoDB","Python","SQL"];
    const AISkills = ["Deep Learning","Machine Learning",'Feature Engineering']
    return (
        <section id="About" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll> 
        <div className="max-w-3xl mx-auto px-4 ">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                About Me
            </h2>

        <div className=" rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
            Passionate developer with expertise in building scalable web
            applications creating AI models and creating innovative solutions. And now pursuing the path of using Tech and Culture simultaneously to preserve culture.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-2 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                        {frontendSkills.map((tech,key) => (
                            <span
                                key={key} 
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                              hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                {tech}
                              </span>
                        ))}
                    </div>
                </div>
                <div className="rounded-xl p-2 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                        {backendSkills.map((tech,key) => (
                            <span
                                key={key} 
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                              hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                {tech}
                              </span>
                        ))}
                    </div>
                </div>
                <div className="rounded-xl p-2 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Artificial Intelligence</h3>
                    <div className="flex flex-wrap gap-2">
                        {AISkills.map((tech,key) => (
                            <span
                                key={key} 
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                              hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                {tech}
                              </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 ">
            <div className=" p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 ">Education</h3>
                <ul className="text-left list-disc list-inside text-gray-300 space-y-8">
                    <li>
                        <strong>B.Tech in Electronic and Communication Engineering</strong> - NEHU (2021-2024)
                    </li>
                    <li>
                        Relevant Coursework: Machine Learning, Deeplearning, IoT, Web Development...
                    </li>
                </ul>

            </div>
            <div className=" p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h2 className="text-xl font-bold mb-4 ">Work Experience</h2>
                <div className="text-left space-y-10 text-gray-300">
                    <h2 className="mb-2">
                         <strong>IoT&Automatin Engineer at Sonicbolt Technologies (August 2024 - Present)</strong> </h2>
                    <p>Building python code to connect physical devices in WTC to Web Application </p> 
                
                    <h3 className="mb-2"><strong>CMRG Researcher Arts & Culture,Govt of Meghalaya (October 2024 - Present)</strong> </h3>
                    <p>Researching on the use of AI to preserve Khasi Musical Instruments </p> 

                </div>

            </div>

        </div>

        </div>
        </RevealOnScroll>   
        </section>
    );

}