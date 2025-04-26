import { RevealOnScroll } from "../RevealOnScroll"
export const Projects = () => {
    return(
        <section id="Projects" className="min-h-screen flex items justify-center py-20">
          <RevealOnScroll>

            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    {""}Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">Finance Dashboard</h3>
                    <p className="text-gray-400 mb-4">Creating a Dashboard using Python to keep track of the finance. The Web app is build with Python libraries and GSheet is use as a database. It is then deployed to Streamlit Cloud</p>
                    <div>
                        {["HTML","CSS","JavaScript","Python"].map((tech,key)=>(
                            <span
                            key={key} 
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                          hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            {tech}
                          </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://ycc-finance.streamlit.app/" className="text-blue-600 hover:text-blue-300 transition-colors my-4">View Project</a>
                    </div>

                    </div>
                    <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">YCC Website</h3>
                    <p className="text-gray-400 mb-4">It is a a simple website build using HTML, CSS and JavaScript and this project hasn't been deployed yet </p>
                    <div>
                        {["HTML","CSS","JavaScript"].map((tech,key)=>(
                            <span
                            key={key} 
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                          hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            {tech}
                          </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center ">
                        <a href="https://meban27.github.io/YCC-website/" className="text-blue-600 hover:text-blue-300 transition-colors my-14">View Project</a>
                    </div>

                    </div>
                    <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">Classifying Khasi Musical Instruments Sounds</h3>
                    <p className="text-gray-400 mb-4"> It is a project for the Final Year of My B.Tech course. An ML model is use to classify the different sounds produce by different Khasi musical instruments. </p>
                    <div>
                        {["Python","HTML","CSS"].map((tech,key)=>(
                            <span
                            key={key} 
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                          hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            {tech}
                          </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-600 hover:text-blue-300 transition-colors my-6">View Project</a>
                    </div>

                    </div>
                    <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">Speech to Text</h3>
                    <p className="text-gray-400 mb-4">Creating Model to convert speech to Text using Whisper. But the model is too Big and Streamlit Cloud free server cannot host it and it keeps on crashing.</p>
                    <div>
                        {["Python","HTML","CSS"].map((tech,key)=>(
                            <span
                            key={key} 
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                          hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            {tech}
                          </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://trascription.streamlit.app/" className="text-blue-600 hover:text-blue-300 transition-colors my-6">View Project</a>
                    </div>

                    </div>
                    

                </div>

            </div>
        </RevealOnScroll>

        </section>
    )

}
