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
        <div className={classes.desc}>“Testing” shows the results of our security testing.</div>
        <div className={classes.desc}>“Audit” show the results of the DTrust audit from Hacken.io.</div>
      </TabPanel >
      <TabPanel value={value} index={1}>
        <div className={classes.title}>Knowledge Base</div>
        <div className={classes.desc}>What is a dtrust? A decentralized trust (dtrust) is a smart trust agreement. DTrusts bring the law of trusts onto the ethereum blockchain. These customizable smart contracts administer digital assets and manage rights with respect to the assets. A dtrust can implement a wide range of legal, estate planning, and tax strategies in different jurisdictions. </div>
        <div className={classes.desc}>Is a dtrust a legal trust? It depends. Depending on your jurisdiction, you could structure your dtrust to be a legal trust in its own right, to exist as a layer within another existing trust, or to exist entirely independent of any traditional legal structures. When a settlor forms a dtrust, the settlor must specify whether the settlor intends for the dtrust to be a legal trust. That intention will interact with trust formation rules. Consult the trust formation rules in your jurisdiction to find out whether you want the dtrust to be a legal trust and how to make it a legal trust.</div>
        <div className={classes.desc}>What are some uses of dtrusts? A dtrust can be a part of any trust strategies. The principle goals are asset protection, probate avoidance, estate administration, tax planing, structured giving, and asset management. The possible uses vary greatly by jurisdiction. See "Legal" for more information.</div>
        <div className={classes.desc}>Are dtrusts free? No. DTrusts cost 0.5% be year. Buy DT tokens if you would like to earn fees.</div>
        <div className={classes.desc}>Are dtrusts customizable? Yes. DTrust can create 512 different possible dtrusts. Link to a page with the customization questions.</div>
        <div className={classes.desc}>Can I make money with DTrusts? Yes. Anyone can earn fees as a dtrust promoter.</div>
        
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className={classes.title}>Code</div>
        <div className={classes.desc}>DTrust is a decentralized application on the Ethereum virtual machine that generates smart trust agreements, also known as decentralized trusts (dtrusts). It allows users to manage and separate the control and enjoyment of digital assets across time. Like traditional legal trusts, DTrust enables asset protection, probate avoidance, estate administration, tax planning, structured giving, asset management, and other crucial legal functions.</div>
        <div className={classes.desc}>This documentation explains the behavior of solidity codes behind DTrust. In these docs, you will find the DTrust codes commented to explain various functions and contracts. The code comment have been written based on NatSpec guidelines. These comments have been added to help developers and end-users to understand the code.</div>
        <div className={classes.desc}>A concise, accurate comment can save hours for developers. Code context exists only in the developers head, but comments can share that context with new developers.</div>
         <div className={classes.desc}>This comprehensive code comment documentation was created to ensure that the code is readable, can be easily understood, and maintained by anyone, even if the provider changes. These comments will trace DTrust’s front-end functionalities to its backend functions.</div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className={classes.title}>Testing</div>
        <div className={classes.desc}>...Coming Soon...</div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div className={classes.title}>Audit</div>
        <div className={classes.desc}>...Coming Soon...</div>
      </TabPanel>
    </div >
  );
}

export default withWidth()(Docs);
