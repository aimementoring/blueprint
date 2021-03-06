import React from 'react';
import classNames from 'classnames';
import SectionRow from './sectionRow.ignore';
import SectionStack from './sectionStack.ignore';
import Separator from './separator.ignore';
import getFlexStylesFromProps from './sectionUtils.ignore';
import styles from './section.module.scss';

const Section = ({ children, className = '', ...props }) => (
  <div
    className={classNames(className, styles.section)}
    style={getFlexStylesFromProps(props)}
  >
    {children}
  </div>
);

Section.Row = SectionRow;
Section.Stack = SectionStack;
Section.Separator = Separator;

export default Section;
