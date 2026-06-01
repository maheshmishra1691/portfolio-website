import "./styles/TechStackNew.css";

interface TechItem {
  name: string;
  icon: string;
  url: string;
}

const techStack: TechItem[][] = [
  [
    { name: "Zoho CRM", icon: "https://cdn.simpleicons.org/zoho/E42527", url: "https://www.zoho.com/crm/" },
    { name: "Zoho Desk", icon: "https://cdn.simpleicons.org/zoho/E42527", url: "https://www.zoho.com/desk/" },
    { name: "Zoho Creator", icon: "https://cdn.simpleicons.org/zoho/E42527", url: "https://www.zoho.com/creator/" },
    { name: "Zoho Analytics", icon: "https://cdn.simpleicons.org/zoho/E42527", url: "https://www.zoho.com/analytics/" },
    { name: "Zoho Survey", icon: "https://cdn.simpleicons.org/zoho/E42527", url: "https://www.zoho.com/survey/" },
    { name: "Deluge", icon: "https://cdn.simpleicons.org/zoho/E42527", url: "https://www.zoho.com/deluge/" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", url: "https://python.org" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", url: "https://www.java.com/" },
  ],
  [
    { name: "REST APIs", icon: "https://cdn.simpleicons.org/fastapi/009688", url: "https://restfulapi.net/" },
    { name: "Webhooks", icon: "https://cdn.simpleicons.org/webhooks/1A73E8", url: "https://webhooks.fyi/" },
    { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37", url: "https://postman.com" },
    { name: "JSON", icon: "https://cdn.simpleicons.org/json/000000", url: "https://www.json.org/" },
    { name: "XML", icon: "https://cdn.simpleicons.org/xml/005FAD", url: "https://www.w3.org/XML/" },
    { name: "Middleware", icon: "https://img.icons8.com/color/48/api-settings.png", url: "https://en.wikipedia.org/wiki/Middleware" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", url: "https://mysql.com" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", url: "https://postgresql.org" },
  ],
  [
    { name: "SQL Server", icon: "https://img.icons8.com/color/48/microsoft-sql-server.png", url: "https://www.microsoft.com/sql-server" },
    { name: "Oracle 12c", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg", url: "https://www.oracle.com/database/" },
    { name: "ETL", icon: "https://img.icons8.com/color/48/data-configuration.png", url: "https://en.wikipedia.org/wiki/Extract,_transform,_load" },
    { name: "Data Warehouse", icon: "https://img.icons8.com/color/48/database.png", url: "https://en.wikipedia.org/wiki/Data_warehouse" },
    { name: "BI Dashboards", icon: "https://img.icons8.com/color/48/combo-chart--v1.png", url: "https://en.wikipedia.org/wiki/Business_intelligence" },
    { name: "Databricks", icon: "https://cdn.simpleicons.org/databricks/FF3621", url: "https://www.databricks.com/" },
  ],
  [
    { name: "JIRA", icon: "https://cdn.simpleicons.org/jira/0052CC", url: "https://www.atlassian.com/software/jira" },
    { name: "Confluence", icon: "https://cdn.simpleicons.org/confluence/172B4D", url: "https://www.atlassian.com/software/confluence" },
    { name: "Agile", icon: "https://img.icons8.com/color/48/sprint-iteration.png", url: "https://www.atlassian.com/agile" },
    { name: "RBAC", icon: "https://img.icons8.com/color/48/security-configuration.png", url: "https://en.wikipedia.org/wiki/Role-based_access_control" },
  ],
  [
    { name: "SEBI", icon: "https://img.icons8.com/color/48/checked-identification-documents.png", url: "https://www.sebi.gov.in/" },
    { name: "TRAI", icon: "https://img.icons8.com/color/48/compliance.png", url: "https://www.trai.gov.in/" },
  ],
];

const TechStackNew = () => {
  return (
    <div className="techstack-new">
      {/* Video Background */}
      <div className="techstack-video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="techstack-video"
        >
          <source src="/video/video.webm" type="video/webm" />
        </video>
        {/* Dark Overlay */}
        <div className="techstack-overlay"></div>
      </div>

      {/* Content */}
      <div className="techstack-content">
        <h2>Tech Stack</h2>
        
        <div className="techstack-pyramid">
          {techStack.map((row, rowIndex) => (
            <div key={rowIndex} className="techstack-row">
              {row.map((tech, techIndex) => (
                <a
                  key={techIndex}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="techstack-item"
                  title={tech.name}
                  data-cursor="disable"
                >
                  <img src={tech.icon} alt={tech.name} />
                  <span>{tech.name}</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackNew;
