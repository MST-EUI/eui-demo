import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './style/index.scss';

export default class EuiDemo extends React.Component {
  static displayName = 'eui-demo';

  static propTypes = {
    children: PropTypes.any,
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
  };

  static defaultProps = {
    children: '',
    prefixCls: 'eui-demo',
    style: {},
    className: '',
  };

  render() {
    const {
      prefixCls,
      children,
      style,
      className,
    } = this.props;

    return (
      <div
        className={classnames({ [`${prefixCls}`]: true }, { [className]: !!className })}
        style={style}
      >
        <div className={`${prefixCls}-content`}>
          {children}
        </div>
      </div>
    );
  }
}
