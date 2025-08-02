const projects = [
  {
    title: "Meal Planner",
    description: "Django app for weekly meal planning.",
    tech: ["Django", "HTML", "SQLite"],
    github: "https://github.com/yourusername/meal-planner",
    live: null,
  },
  {
    title: "Youth Dashboard",
    description: "Interactive dashboard on youth unemployment.",
    tech: ["React", "Chart.js"],
    github: "https://github.com/yourusername/youth-unemployment-dashboard",
    live: "https://yourdashboard.vercel.app",
  },
];

const container = document.getElementById("projectGrid");

projects.forEach((project) => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <p><strong>Tech:</strong> ${project.tech.join(", ")}</p>
    <div style="margin-top:10px;">
      <a href="${project.github}" target="_blank">GitHub</a>
      ${project.live ? ` | <a href="${project.live}" target="_blank">Live</a>` : ""}
    </div>
  `;
  container.appendChild(card);
});