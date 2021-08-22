import React from 'react';

import { horizontalLayout, justifySpaceBetween } from './index.module.css';

const styles = { justifySpaceBetween };

// Only horizontal on large screens; do not use for small content.
class HorizontalLayout extends React.Component {
  render() {
    const classNames = [horizontalLayout];
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
