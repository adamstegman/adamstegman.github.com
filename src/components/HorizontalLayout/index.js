import React from 'react';

import styles from './index.module.css';

// Only horizontal on large screens; do not use for small content.
class HorizontalLayout extends React.Component {
  render() {
    const classNames = [styles.horizontalLayout];
    if (this.props.justifyContent) {
      classNames.push(styles[`justify${this.props.justifyContent}`]);
    }
    return (
      <div className={classNames.join(" ")}>
        {this.props.children}
      </div>
    );
  }
}

export default HorizontalLayout;
