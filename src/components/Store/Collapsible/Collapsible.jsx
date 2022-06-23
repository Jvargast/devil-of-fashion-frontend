import * as React from 'react';
import PropTypes from 'prop-types';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem, { useTreeItem } from '@mui/lab/TreeItem';
import clsx from 'clsx';
import Typography from '@mui/material/Typography';


const CustomContent = React.forwardRef(function CustomContent(props, ref) {
  const {
    classes,
    className,
    label,
    nodeId,
    icon: iconProp,
    expansionIcon,
    displayIcon,
  } = props;

  const {
    disabled,
    expanded,
    selected,
    focused,
    handleExpansion,
    handleSelection,
    preventSelection,
  } = useTreeItem(nodeId);

  const icon = iconProp || expansionIcon || displayIcon;

  const handleMouseDown = (event) => {
    preventSelection(event);
  };

  const handleExpansionClick = (event) => {
    handleExpansion(event);
  };

  const handleSelectionClick = (event) => {
    handleSelection(event);
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={clsx(className, classes.root, {
        [classes.expanded]: expanded,
        [classes.selected]: selected,
        [classes.focused]: focused,
        [classes.disabled]: disabled,
      })}
      onMouseDown={handleMouseDown}
      ref={ref}
     
    >
    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div onClick={handleExpansionClick} className={classes.iconContainer} >
        {icon}
      </div>
      <Typography
        onClick={handleSelectionClick}
        component="div"
        className={classes.label}
      >
        {label}
      </Typography>
    </div>
  );
});

CustomContent.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object.isRequired,
  /**
   * className applied to the root element.
   */
  className: PropTypes.string,
  /**
   * The icon to display next to the tree node's label. Either a parent or end icon.
   */
  displayIcon: PropTypes.node,
  /**
   * The icon to display next to the tree node's label. Either an expansion or collapse icon.
   */
  expansionIcon: PropTypes.node,
  /**
   * The icon to display next to the tree node's label.
   */
  icon: PropTypes.node,
  /**
   * The tree node label.
   */
  label: PropTypes.node,
  /**
   * The id of the node.
   */
  nodeId: PropTypes.string.isRequired,
};

const CustomTreeItem = (props) => (
  <TreeItem ContentComponent={CustomContent} {...props}  />
);


export default function IconExpansionTreeView() {
  return (
    <TreeView
      aria-label="icon expansion"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon sx={{fontSize:"50px"}}/>}
      sx={{ height: 650, flexGrow: 1, maxWidth: 400, overflowY: 'auto'}}
    >
      
      <CustomTreeItem nodeId="1" label="POLERAS">
        <CustomTreeItem nodeId="2" label="ANIME">
          <CustomTreeItem nodeId="3" label="Tokyo Revengers"/>
          <CustomTreeItem nodeId="4" label="Tokyo Revengers"/>
          <CustomTreeItem nodeId="5" label="Tokyo Revengers"/>
          <CustomTreeItem nodeId="6" label="Tokyo Revengers"/>
          <CustomTreeItem nodeId="7" label="Tokyo Revengers"/>
          <CustomTreeItem nodeId="8" label="Tokyo Revengers"/>
          <CustomTreeItem nodeId="9" label="Tokyo Revengers"/>
          <CustomTreeItem nodeId="10" label="Tokyo Revengers"/>
          <CustomTreeItem nodeId="11" label="Tokyo Revengers"/>
          <CustomTreeItem nodeId="12" label="Tokyo Revengers"/>
        </CustomTreeItem>
        
      </CustomTreeItem>
      <CustomTreeItem nodeId="13" label="POLERONES">
        <CustomTreeItem nodeId="14" label="CATEGORIA POLERON 1" />
        <CustomTreeItem nodeId="15" label="CATEGORIA POLERON 2" />
        <CustomTreeItem nodeId="16" label="CATEGORIA POLERON 3" />
      </CustomTreeItem>
      <CustomTreeItem nodeId="17" label="TOTEBAGS">
        <CustomTreeItem nodeId="18" label="CATEGORIA TOTEBAGS 1" />
        <CustomTreeItem nodeId="19" label="CATEGORIA TOTEBAGS 2" />
        <CustomTreeItem nodeId="20" label="CATEGORIA TOTEBAGS 3" />
      </CustomTreeItem>
      <CustomTreeItem nodeId="21" label="A PEDIDO">
        <CustomTreeItem nodeId="23" label="CATEGORIA A PEDIDO 1" />
        <CustomTreeItem nodeId="23" label="CATEGORIA A PEDIDO 2" />
        <CustomTreeItem nodeId="24" label="CATEGORIA A PEDIDO 3" />
      </CustomTreeItem>
    </TreeView>
  );
}
