"use client";

import { useState } from "react";
import { PhotoPlaceholder, projectPlaceholders } from "../components";

const categories = ["All draft projects", ...new Set(projectPlaceholders.map((project) => project[1]))];

export default function ProjectsFilter() {
  const [filter, setFilter] = useState(categories[0]);
  const visible = filter === categories[0]
    ? projectPlaceholders
    : projectPlaceholders.filter((project) => project[1] === filter);

  return (
    <div>
      <div className="filter-bar" aria-label="Filter draft project placeholders">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            className={filter === category ? "active" : ""}
            aria-pressed={filter === category}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <p className="editor-note">Draft filter set—publish only categories the owner confirms.</p>
      <div className="project-grid">
        {visible.map(([title, category, upload]) => (
          <article className="project-card" key={title}>
            <PhotoPlaceholder label={upload} />
            <div className="card-body">
              <span className="status-tag">Project details and owner approval pending</span>
              <p className="kicker">{category}</p>
              <h2>{title}</h2>
              <dl className="project-meta">
                <div><dt>General location</dt><dd>[OWNER TO SUPPLY]</dd></div>
                <div><dt>Completion year</dt><dd>[OWNER TO SUPPLY]</dd></div>
                <div><dt>Customer permission</dt><dd>[NOT YET CONFIRMED]</dd></div>
              </dl>
              <a className="text-link" href="#case-study-template">Review the case-study fields below</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
