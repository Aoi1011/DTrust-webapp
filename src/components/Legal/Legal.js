import React from 'react';
import PropTypes from 'prop-types';
import { createStyles, makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

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
        <Box p={3}>
          { children}
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

const useLegaltyles = makeStyles((theme) => ({
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

function Legal(props) {
  const classes = useLegaltyles();
  const [value, setValue] = React.useState(0);

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
        <StyledTab label="Legal" {...allyProps(0)} />
        <StyledTab label="Asset Protection" {...allyProps(1)} />
        <StyledTab label="Probate Aviodance" {...allyProps(2)} />
        <StyledTab label="Estate Administration" {...allyProps(3)} />
        <StyledTab label="Tax Planning" {...allyProps(4)} />
        <StyledTab label="Structured Giving" {...allyProps(5)} />
        <StyledTab label="Asset Management" {...allyProps(6)} />
        <StyledTab label="Regional Guides" {...allyProps(7)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className={classes.title}>Legal</div>
        <div className={classes.desc}>DTrust generates customized dtrusts that can effectuate a wide range of legal strategies. These pages provide just a basic discussion of some common uses of traditional legal trusts applied to the DTrust context. These pages are only a basic discussion of an emerging field of law.</div>
      </TabPanel >
      <TabPanel value={value} index={1}>
        <div className={classes.title}>Asset Protection</div>
        <div className={classes.desc}>...Coming Soon...</div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className={classes.title}>Probate Aviodance</div>
        <div className={classes.desc}>...Coming Soon...</div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className={classes.title}>Estate Administration</div>
        <div className={classes.desc}>...Coming Soon...</div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div className={classes.title}>Tax Planning</div>
        <div className={classes.desc}>...Coming Soon...</div>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <div className={classes.title}>Structured Giving</div>
        <div className={classes.desc}>...Coming Soon...</div>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <div className={classes.title}>Asset Management</div>
        <div className={classes.desc}>...Coming Soon...</div>
      </TabPanel>
      <TabPanel value={value} index={7}>
        <div className={classes.title}>Regional Guides</div>
        <div className={classes.desc}>...Coming Soon...</div>
      </TabPanel>
    </div >
  );
}
export default withWidth()(Legal);