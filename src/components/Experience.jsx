import React from "react";

const experiences = [
  {
    period: "May 2024 - Present",
    title: "Flutter Developer",
    company: "Haddis Art Technology PLC",
    location: "Addis Ababa, Ethiopia",
    description:
      "Working on mobile app projects that have a focus on user experience and performance. Collaborating with cross-functional teams to deliver high-quality solutions.",
    technologies: [
      "Flutter",
      "Dart",
      "REST APIs",
      "Google APIs",
      "Firebase",
      "One Signal",
      "Jira",
      "Chapa",
      "Synheart SDK",
    ],
  },
  {
    period: "Mar 2024 - April 2024",
    title: "Flutter Developer",
    company: "Bhattacharjee solution PVT LTD",
    location: "India(Remote)",
    description: "Worked on multiple mobile app projects and enhancements.",
    technologies: ["Flutter", "Dart", "REST APIs"],
  },
  {
    period: "Sep 2023 - Mar 2024",
    title: "Mobile App Developer",
    company: "Jaktech Engineering and Trading(Yeabrak)",
    location: "Addis Ababa, Ethiopia",
    description:
      "Debugging and ensuring that a code works as expected and meets the defined requirements. This involves identifying bugs, conducting testing, and ensuring overall quality assurance.",
    technologies: [
      "Flutter",
      "Dart",
      "REST APIs",
      "GitHub",
      "Firebase",
      "Google APIs",
      "Postman",
    ],
  },
  {
    period: "2021 - Present",
    title: "Flutter Developer",
    company: "Freelance",
    location: "Remote",
    description:
      "Developing modern mobile applications using Flutter, Firebase, REST APIs, Google APIs, version control softwares and various technologies. Working with clients to deliver high-quality solutions.",
    technologies: [
      "Flutter",
      "Dart",
      "REST APIs",
      "GitHub",
      "Firebase",
      "Google APIs",
    ],
  },
  {
    period: "2020 - 2021",
    title: "Mobile Application Tester",
    company: "Prime Maven Engineering PLC",
    location: "Addis Ababa",
    description:
      "Bug testing or analysing the mobile application for any defects or errors that may cause the app to malfunction such as performance testing, usability testing, and acceptaince testing.",
    technologies: ["Jira", "CodeMagic"],
  },
];

export default function Experience() {
  return (
    <section
      className="py-20"
      id="experience"
      style={{ backgroundColor: "var(--clr-bg)" }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: "var(--clr-fg-alt)" }}
          >
            Experience
          </h2>
          <p className="text-lg" style={{ color: "var(--clr-fg)" }}>
            My professional journey and work experience
          </p>
        </div>

        <div className="space-y-6" data-aos="fade-up" data-aos-delay="200">
          {experiences.map((exp, index) => (
            <div
              className="rounded-2xl p-8 transition-shadow duration-300 hover:shadow-lg"
              key={exp.period + exp.company}
              style={{
                backgroundColor: "var(--clr-bg-alt)",
                boxShadow: "var(--shadow)",
              }}
              data-aos="fade-up"
              data-aos-delay={100 + index * 50}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: "var(--clr-fg-alt)" }}
                  >
                    {exp.title}
                  </h3>
                  <p
                    className="font-medium mb-1"
                    style={{ color: "var(--clr-primary)" }}
                  >
                    {exp.company}
                  </p>
                  <p
                    className="text-sm mb-4"
                    style={{ color: "var(--clr-fg)" }}
                  >
                    {exp.location}
                  </p>
                  <p
                    className="mb-4 leading-relaxed"
                    style={{ color: "var(--clr-fg)" }}
                  >
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: "var(--clr-bg)",
                          color: "var(--clr-primary)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <span
                    className="inline-block px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap"
                    style={{
                      backgroundColor: "var(--clr-primary)",
                      color: "var(--clr-fg-alt)",
                    }}
                  >
                    {exp.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
