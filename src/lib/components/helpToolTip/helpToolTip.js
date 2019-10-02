import React, { PureComponent } from 'react';
import TooltipTrigger from 'react-popper-tooltip';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';
import QuestionMarkIcon from './questionMarkIcon.ignore';
import styles from './helpToolTip.module.scss';

export default class HelpToolTip extends PureComponent {
  static propTypes = {
    ...componentPropTypes,
  };

  static defaultProps = {
    ...defaultComponentPropTypes,
  };

  render() {
    const { theme, hideArrow, children } = this.props;
    const questionMarkTrigger = ({ getTriggerProps, triggerRef }) => (
      <span
        {...getTriggerProps({
          ref: triggerRef,
          className: `trigger ${styles.trigger}`,
        })}
      >
        <QuestionMarkIcon className={styles.questionMarkIcon} />
      </span>
    );

    return (
      <div className={styles[`theme-${theme}`]}>
        <TooltipTrigger
          {...this.props}
          tooltip={({
            arrowRef,
            tooltipRef,
            getArrowProps,
            getTooltipProps,
            placement,
          }) => (
            <div
              {...getTooltipProps({
                ref: tooltipRef,
                className: `tooltip-container ${styles.tooltipContainer}`,
              })}
            >
              {!hideArrow && (
                <div
                  {...getArrowProps({
                    ref: arrowRef,
                    className: `tooltip-arrow ${styles.tooltipArrow}`,
                    'data-placement': placement,
                  })}
                />
              )}
              <div>
                {children}
              </div>
            </div>
          )}
        >{questionMarkTrigger}
        </TooltipTrigger>
      </div>
    );
  }
}
