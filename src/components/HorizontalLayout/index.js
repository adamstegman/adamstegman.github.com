import React from 'react';

import styles from './index.module.css';

class HorizontalLayout extends React.Component {
  render() {
    const classNames = [styles['horizontal-layout']];
    if (this.props.justifyContent) {
      classNames.push(styles[`justify-${this.props.justifyContent}`]);
    }
    return (
      <div className={classNames.join(" ")}>
        {this.props.children}
      </div>
    );
  }
}

export default HorizontalLayout;
