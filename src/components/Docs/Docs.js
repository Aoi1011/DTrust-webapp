import React from 'react';
import PropTypes from 'prop-types';
import { createStyles, makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import { useLocation } from 'react-router-dom';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} minHeight="60vh">
          {children}
        </Box>
      )}
    </div>
  );
}

const StyledTab = withStyles(theme => createStyles({
  root: {
    '& .MuiTab-wrapper': {
      [theme.breakpoints.up('md')]: {
        alignItems: 'flex-start',
        textAlign: 'left',
      },
    },
    textTransform: 'none',
    fontSize: '22px',
  },
}))((props) => (
  <Tab {...props} />
));

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function allyProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useDocsStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('md')]: {
      flexGrow: 1,
      display: 'flex',
    }
  },
  tabs: {
    backgroundColor: '#f5f5f5',
    [theme.breakpoints.up('md')]: {
      flexBasis: '300px',
      minWidth: '300px',
      paddingTop: '100px',
      paddingBottom: '100px',
    },
    '& .MuiButtonBase-root': {
      maxWidth: '100%',
    },
  },
  title: {
    fontSize: '36px',
  },
  desc: {
    marginTop: '15px',
    lineHeight: '25px',
  },
}));

function Docs(props) {
  const location = useLocation()
  const { tabIndex } = location.state
  const classes = useDocsStyles();
  const [value, setValue] = React.useState(tabIndex);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={isWidthUp("md", props.width) ? "vertical" : "horizontal"}
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <StyledTab label="Introduction" {...allyProps(0)} />
        <StyledTab label="Knowledge Base" {...allyProps(1)} />
        <StyledTab label="Code" {...allyProps(2)} />
        <StyledTab label="Testing" {...allyProps(3)} />
        <StyledTab label="Audit" {...allyProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className={classes.title}>Introduction</div>
        <div className={classes.desc}>This documentation is a comprehsive source of DTrust public material.</div>
        <div className={classes.desc}>“Knowledge Base” provides information to users to answer thier functional questions.</div>
        <div className={classes.desc}>“Code” shows a substantial portion of the DTrust source code to demonstrate the DApp efficacy and answer potential user questions.</div>
        <div className={classes.desc}> “Testing” shows the results of our security testing.</div>
        <div className={classes.desc}> “Audit” show the results of the DTrust audit from Hacken.io.</div>
      </TabPanel >
      <TabPanel value={value} index={1}>
        <div className={classes.title}>Knowledge Base</div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className={classes.title}>Code</div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className={classes.title}>Testing</div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div className={classes.title}>Audit</div>
      </TabPanel>
    </div >
  );
}

export default withWidth()(Docs);
