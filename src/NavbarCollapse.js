import React, { PropTypes } from 'react';

import Collapse from './Collapse';
import { prefix } from './utils/bootstrapUtils';

const contextTypes = {
  $bs_navbar: PropTypes.shape({
    bsClass: PropTypes.string,
    expanded: PropTypes.bool,
  }),
};

class NavbarCollapse extends React.Component {
  render() {
    const { children, onSelect, ...props } = this.props;
    const navbarProps = this.context.$bs_navbar || { bsClass: 'navbar' };

    const bsClassName = prefix(navbarProps, 'collapse');

    return (
      <Collapse in={navbarProps.expanded} {...props}>
        <div className={bsClassName}>
          { React.Children.map(this.props.children, function (child) {
            return React.cloneElement(child, { onSelect });
          }) }
        </div>
      </Collapse>
    );
  }
}

NavbarCollapse.contextTypes = contextTypes;

export default NavbarCollapse;
