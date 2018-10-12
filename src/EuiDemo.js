import React from 'react';
import classnames from 'classnames';

import i18n from './i18n';
import './style/index.scss';

const { PropTypes } = React;
const i18nDefault = 'zh-cn';

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
