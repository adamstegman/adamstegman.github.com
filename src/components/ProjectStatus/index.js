import React from 'react';

import { contracted, deployed, development, retired, status } from './index.module.css';

const STATUSES = { contracted, deployed, development, retired };
class ProjectStatus extends React.Component {

  render() {
    const classNames = [status, STATUSES[this.props.status]].join(" ");
    return (
      <h4 className={classNames}>{this.props.status}</h4>
    );
  }
}
export default ProjectStatus;
