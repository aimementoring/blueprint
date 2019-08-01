const getFlexStylesFromProps = props => {
  const { justifyContent, alignItems, grow } = props;
  const flexGrow = grow && !isNaN(grow) ? grow : grow ? 1 : undefined;

  const styles = { ...props.style };
  if (justifyContent) styles.justifyContent = justifyContent;
  if (alignItems) styles.alignItems = alignItems;
  if (flexGrow) styles.flexGrow = flexGrow;
  return styles;
};

export default getFlexStylesFromProps;
