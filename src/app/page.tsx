"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Github, Linkedin, Mail, Download, ExternalLink, CurlyBraces, Brain, Bot, BugPlay, Cpu, Parentheses, Ellipsis, EarthLock, Nfc, Tent } from "lucide-react"
import { motion } from "framer-motion"; // Import motion from framer-motion
import RotatingThickNeonCube from "@/components/thick-neon-wireframe-cube"


const projects = [
  {
    title: "AlgoSort",
    description: "Built a sorting visualizer using the SFML library, integrated with web development for better visualization.",
    link: "https://github.com/Amitesh-Rana/Algosort",
    image: "/W.jpg"
  },
  {
    title: "Face recognition using Dlib",
    description: " Developed a facial recognition system using the dlib library for accurate face detection.",
    link: "https://github.com/Amitesh-Rana/Facial_recognition_using_dlib",
    image: "/face.jpg"
  },
  {
    title: "SPEECH EMOTION RECOGNITION ",
    description: "Carried out the task of speech emotion recognition from the RAVDESS Dataset using Python.",
    link: "https://github.com/Amitesh-Rana/Speech-Emotion-Recognition",
    image: "/speech.png"
  },
  {
    title: "CNN Models for Energy Disaggregation",
    description: "Trained CNN models during internship, focusing on energy disaggregation (NILM tasks).",
    link: "https://github.com/Amitesh-Rana/Speech-Emotion-Recognition",
    image: "/new-home.jpg"
  },
  {
    title: "Go-Chat",
    description: "A real-time chat app with secure authentication (Supabase Auth) and WebSocket-based messaging, featuring an intuitive user interface.",
    link: "https://github.com/Amitesh-Rana/Go-Chat",
    image: "/download.png"

  },
  {
    title: "Portfolio",
    description: "A personal portfolio showcasing projects, skills, and achievements, built with modern web technologies for a responsive and visually appealing design.",
    link: "https://github.com/Amitesh-Rana/Portfolio",
    image: "/WhatsApp Image 2024-10-13 at 15.17.41_bade9e3e.jpg"

  },
  {
    title: "Advanced Dye Degradation",
    description: "Designed a photocatalytic reactor for dye degradation for Methanol Reforming.",
    link: "https://github.com/Amitesh-Rana/Portfolio",
    image: "/dye.png"

  },
  {
    title: "PID controller optimisation using Machine Learning",
    description: "Leveraged machine learning techniques to optimize PID controller parameters for improved system performance and stability.",
    link: "https://github.com/Amitesh-Rana/Portfolio",
    image: "/pid.jpg"

  }

]

const skills = [
  { name: "Data Structures & Algorithms", percentage: 95, icon: <CurlyBraces size={32} className="text-white" /> },
  { name: "C++", percentage: 95, icon: <Cpu size={32} className="text-white" />  },
  { name: "Python", percentage: 90,icon: <BugPlay size={32} className="text-white" />},
  {name: "Machine Learning", percentage: 90, icon: <Brain size={32} className="text-white" />},
  { name: "Deep Learning", percentage: 80, icon: <Bot size={32} className="text-white" />},
  { name: "HTML", percentage: 80, icon: <Parentheses size={32} className="text-white" /> },
  { name: "CSS", percentage: 75, icon: <Parentheses size={32} className="text-white" /> },
  { name: "Javascript", percentage: 80, icon: <Ellipsis size={32} className="text-white" /> },
  { name: "React", percentage: 65, icon: <EarthLock size={32} className="text-white" /> },
  { name: "SQL", percentage: 80, icon: <Nfc size={32} className="text-white" /> },
  { name: "MATLAB", percentage: 60, icon: <Tent size={32} className="text-white" /> },
]

export default function AmiteshRanaPortfolio() {
  const [activeTab, setActiveTab] = useState("home")
  const [showResume, setShowResume] = useState(false)
  const [showContact, setShowContact] = useState(false)
  const [selectedResume, setSelectedResume] = useState('');


  // Define variants for heading and description animations
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.2, // Delay for child animations
        staggerChildren: 0.05 // Staggered effect for each letter
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

    // Array of resumes located in the public directory
    const resumes = [
      { name: 'SDE Resume', file: '/AR_SDE_resume (1).pdf' }, // Adjust the filenames based on your actual PDF files
      { name: 'ML Resume', file: '/AR_Machine_learning_resume (1).pdf' },
      { name: 'Core Chemical Resume', file: '/AR_core_resume.pdf' },
    ];




  return (
    <div
      className={`min-h-screen flex flex-col relative ${activeTab === "home"
          ? "gradient-background"
          : activeTab === "project"
            ? "gradient-background-projec"
            : activeTab === "skills"
              ? "gradient-skills"
              : ""
        }`}
    >
      <header className="bg-transparent backdrop-blur-md shadow-lg sticky top-0 z-10 transition-all duration-300">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-4 md:mb-0">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white  to-purple-500 inline-block text-transparent bg-clip-text">Amitesh Rana</h1>
            <nav className="max-md:hidden">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full min-w-[300px]">
                <TabsList className="w-full bg-purple-400 dark:bg-gray-700 grid grid-cols-3 md:grid-cols-3">
                  <TabsTrigger value="home" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 text-white data-[state=active]:text-black">Home</TabsTrigger>
                  <TabsTrigger value="projects" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 text-white data-[state=active]:text-black">Projects</TabsTrigger>
                  <TabsTrigger value="skills" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 text-white data-[state=active]:text-black">Skills</TabsTrigger>
                </TabsList>
              </Tabs>
            </nav>
            <div className="flex space-x-2">
              <Button variant="default" onClick={() => setShowResume(true)}>Resume</Button>
              <Button variant="outline" onClick={() => setShowContact(true)}>Contact</Button>
            </div>
          </div>
          <nav className="pt-4 md:hidden">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-2/3 mx-auto">
              <TabsList className="w-full bg-gray-100 dark:bg-gray-700 grid grid-cols-3 md:grid-cols-3">
                <TabsTrigger value="home" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800">Home</TabsTrigger>
                <TabsTrigger value="projects" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800">Projects</TabsTrigger>
                <TabsTrigger value="skills" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800">Skills</TabsTrigger>
              </TabsList>
            </Tabs>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 ">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-12">

          <TabsContent value="home" className="flex items-center justify-center h-full ">
            <motion.div
              className="grid md:grid-cols-2 gap-12 items-center z-40 md:mt-20"
              initial={{ opacity: 0, y: 20 }} // Initial state for animation
              animate={{ opacity: 1, y: 0 }}   // Animation to this state
              exit={{ opacity: 0, y: -20 }}     // Exit animation state
              transition={{ duration: 0.5 }}     // Animation duration
            >
              <div className="mt-0 space-y-6"> {/* Set top margin to zero */}

                <motion.h2
                  className="text-4xl font-bold tracking-tight  bg-gradient-to-r from-white  to-purple-400 inline-block text-transparent bg-clip-text"
                  variants={headingVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {Array.from("Hello, I'm Amitesh Rana").map((letter, index) => (
                    <motion.span key={index} variants={letterVariants}>
                      {letter}
                    </motion.span>
                  ))}
                </motion.h2>

                {/* Line by line animation for the description */}
                <div className="flex">
                  {/* Text Animation */}
                  <div className="flex-1">
                    {[
                      "I am a final-year BTech student at IIT Jodhpur,",
                      "pursuing a major in Chemical Engineering with a Minor in Management.",
                      "I have a deep passion for Data Structures & Algorithms,",
                      "as well as Machine Learning and Deep Learning."
                    ].map((line, index) => (
                      <motion.p
                        key={index}
                        className="text-xl text-neutral-100 leading-relaxed"
                        style={{ fontFamily: "'Times New Roman', Times, serif" }} // Apply Times New Roman
                        variants={{
                          hidden: { opacity: 0, x: -100 }, // Start off-screen (to the left)
                          visible: { opacity: 1, x: 0 } // Animate to normal position
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{
                          duration: 0.5, // Animation duration
                          delay: index * 0.1 // Stagger each line with 0.1s delay
                        }}
                      >
                        {line}
                      </motion.p>
                    ))}
                  </div>

                  {/* Rotating Cube */}

                </div>



                <div className="flex space-x-4">
                  <Button onClick={() => setActiveTab("projects")}>View Projects</Button>
                  <Button variant="outline" onClick={() => setShowContact(true)}>Contact Me</Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0"></div>
                <div className="flex-none">
                    <RotatingThickNeonCube />
                  </div>
              </div>
            </motion.div>
          </TabsContent>
          <TabsContent value="projects">
  <h2 className="text-3xl font-bold tracking-tight mb-8 text-white text-center hover:scale-105">My Projects</h2>
  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-md:pb-20 pb-10">
    {projects.map((project, index) => (
      <Card key={index} className="overflow-hidden transition-all hover:shadow-lg border-0 bg-white dark:bg-gray-800 hover:scale-105 duration-200 ease-in max-w-xs h-42">
 {/* Adjusted width */}
        <Image
          src={project.image}
          alt={project.title}
          width={200} // Reduced width
          height={150} // Reduced height
          className="w-full h-44 object-cover" // Adjusted height for the image
        />
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-200">{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-600 dark:text-gray-300">{project.description}</CardDescription>
          {project.link && (
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              <Button variant="link" className="mt-4 p-0">
                View on GitHub <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          )}
        </CardContent>
      </Card>
    ))}
  </div>
</TabsContent>

          <TabsContent value="skills">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-white dark:text-white">My Skills</h2>

            <div className="grid gap-6 pb-20">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}  // Start hidden and from the left
                  animate={{ opacity: 1, x: 0 }}  // Animate to visible and in place
                  transition={{ duration: 0.5, delay: index * 0.2 }}  // Add a delay for each element
                  className="flex items-center space-x-2"
                >
                  {skill.icon}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-white font-semibold">{skill.name}</span>
                      <span className="text-white">{skill.percentage}%</span>

                    </div>
                    <Progress value={skill.percentage} className="h-2 bg-gray-200 dark:bg-gray-700 w-[400px]" />
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {showResume && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gradient-to-r from-white to-purple-500 p-8 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">My Resume</h2>
              <Button variant="ghost" onClick={() => setShowResume(false)}>Close</Button>
            </div>

            <div className="space-y-6">
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
  View my resume below. If you&apos;d like to download it, click the <span className="font-bold text-purple-900 dark:text-purple-600">&quot;Download Resume&quot;</span> button.
</p>


              {/* Resume viewer */}
              {selectedResume ? (
                <iframe
                  src={selectedResume}
                  title="Resume Viewer"
                  className="w-full h-80 border-2 border-gray-300 rounded"
                  frameBorder="0"
                ></iframe>
              ) : (
                <p className="text-center text-black-600 dark:text-gray-300">Please select a resume to view.</p>
              )}

              {/* Buttons for selecting resumes and downloading */}
              {resumes.map((resume) => (
                <div key={resume.name} className="flex justify-between">
                  <Button
                    size="lg"
                    className="w-full mb-4"
                    onClick={() => setSelectedResume(resume.file)} // Show the selected resume
                  >
                    View {resume.name}
                  </Button>
                  <Button
                    size="lg"
                    className="ml-4 mb-4"
                    onClick={() => window.open(resume.file, '_blank')} // Download the selected resume
                  >
                    <Download className="mr-2 h-5 w-5" /> Download
                  </Button>
                </div>
              ))}

              <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Achievements</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Successfully completed internship focusing on <span className="font-bold text-purple-900 dark:text-purple-600">CNN models</span> for energy disaggregation</li>
                <li>Ranked <span className="font-bold text-purple-900 dark:text-purple-600">14th</span> out of 4000+ users on <span className="font-bold text-purple-900 dark:text-purple-600">GeeksforGeeks</span> from college, based on overall coding score.</li>
                
                <li>Successfully reached  <span className="font-bold text-purple-900 dark:text-purple-600">Flipkart Grid 5.0 and 6.0 Round 2</span> consecutively</li>
                  <li>Achieved <span className="font-bold text-purple-900 dark:text-purple-600">Master Badge</span> in <span className="font-bold text-purple-900 dark:text-purple-600">Recursion, Dynamic Programming </span>on Coding Ninjas, awarded to only the Top 0.01 percent
                  of users</li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {showContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Get in Touch</h2>
              <Button variant="ghost" onClick={() => setShowContact(false)}>Close</Button>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <form className="space-y-6">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Textarea placeholder="Your Message" />
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
            <div className="flex justify-center space-x-4 mt-8">
  {/* LinkedIn */}
  <a href="https://www.linkedin.com/in/amitesh-rana11" target="_blank" rel="noopener noreferrer">
    <Button variant="outline" size="icon">
      <Linkedin className="h-5 w-5" />
      <span className="sr-only">LinkedIn</span>
    </Button>
  </a>

  {/* GitHub */}
  <a href="https://github.com/Amitesh-Rana" target="_blank" rel="noopener noreferrer">
    <Button variant="outline" size="icon">
      <Github className="h-5 w-5" />
      <span className="sr-only">GitHub</span>
    </Button>
  </a>

  {/* Email */}
  <a href="mailto:rana.3@iitj.ac.in">
    <Button variant="outline" size="icon">
      <Mail className="h-5 w-5" />
      <span className="sr-only">Email</span>
    </Button>
  </a>
</div>

          </div>
        </div>
      )}
      <footer className="bg-transparent backdrop-blur-md shadow-lg mt-12 fixed bottom-0 w-full z-50">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-white mb-4 sm:mb-0">© 2024 Amitesh Rana. All rights reserved.</p>
          <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/amitesh-rana11" target="_blank" rel="noopener noreferrer">
    <Button variant="outline" size="icon">
      <Linkedin className="h-5 w-5" />
      <span className="sr-only">LinkedIn</span>
    </Button>
  </a>

  {/* GitHub */}
  <a href="https://github.com/Amitesh-Rana" target="_blank" rel="noopener noreferrer">
    <Button variant="outline" size="icon">
      <Github className="h-5 w-5" />
      <span className="sr-only">GitHub</span>
    </Button>
  </a>

  {/* Email */}
  <a href="mailto:rana.3@iitj.ac.in">
    <Button variant="outline" size="icon">
      <Mail className="h-5 w-5" />
      <span className="sr-only">Email</span>
    </Button>
  </a>
          </div>
        </div>
      </footer>
    </div>
  )
}