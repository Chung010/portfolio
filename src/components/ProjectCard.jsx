import { GitBranch, ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
  const { name, description, year, tags, github_url, live_url, highlight } =
    project;
  const safeTags = tags ?? [];

  return (
    <div className={`proj-card ${highlight ? "proj-card--highlight" : ""}`}>
      <div className="proj-head">
        <span className="proj-name">{name}</span>
        <span className="proj-year">{year}</span>
      </div>
      <p className="proj-desc">{description}</p>
      <div className="proj-footer">
        <div className="proj-tags">
          {safeTags.map((tag) => (
            <span key={tag} className={`tag ${highlight ? "tag--hi" : ""}`}>
              {tag}
            </span>
          ))}
        </div>
        <div className="proj-links">
          {github_url && (
            <a
              href={github_url}
              target="_blank"
              rel="noreferrer"
              className="proj-gh-link"
            >
              <GitBranch size={14} /> github
            </a>
          )}
          {live_url && (
            <a
              href={live_url}
              target="_blank"
              rel="noreferrer"
              className="proj-live-link"
            >
              <ExternalLink size={14} /> live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
