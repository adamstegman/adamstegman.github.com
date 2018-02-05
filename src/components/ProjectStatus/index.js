import React from 'react';

import styles from './index.module.css';

class ProjectStatus extends React.Component {
  render() {
    const classNames = [styles.status, styles[this.props.status]].join(" ");
    return (
      <h4 className={classNames}>{this.props.status}</h4>
    );
  }
}
export default ProjectStatus;
