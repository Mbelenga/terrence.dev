const projects = [
  {
    title: "Meal Planner",
    description: "Django app for weekly meal planning.",
    techtrack: ["Django", "HTML", "SQL"],
    github: "https://github.com/Mbelenga/Meal_Planner",
    live: null,
  },
  {
    title: "Youth Dashboard",
    description: "Book Hub is a web platform where users can explore, read, and rate books.<br> It provides a simple and user-friendly interface for discovering new titles, sharing opinions through reviews, and engaging with other readers.<br> Built to promote a reading culture, Book Hub makes it easy to browse books, track what you've read, and find your next great read.",
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