import React from 'react';

import { closeText } from './index.module.css';

class ProjectTimeRange extends React.Component {
  render() {
    const project = this.props.project;
    let endedAt = "present";
    if (project.endedAt) {
      endedAt = <time dateTime={project.endedAtTimestamp}>{project.endedAt}</time>;
    }

    return (
      <p className={closeText}>
        <time dateTime={project.createdAtTimestamp}>{project.createdAt}</time>&nbsp;&ndash;&nbsp;{endedAt}
      </p>
    );
  }
}
export default ProjectTimeRange;
