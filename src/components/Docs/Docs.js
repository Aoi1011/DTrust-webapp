import React, { useEffect, useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import { createStyles, makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import RenderChildren from '../RenderChildren';
import reducer, { initialState } from '../reducer';

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
  tabPanel: {
    '& .title': {
      fontSize: '36px',
    },
    '& .paragraph': {
      marginTop: '15px',
      lineHeight: '25px',
      minHeight: '25px',
    },

    '& .heading_2': {
      marginTop: '40px',
      lineHeight: '25px',
      fontSize: '28px',
    },

    '& .link': {
      marginTop: '10px',
      lineHeight: '25px',
      fontSize: '28px',
      display: 'block',
      textDecoration: 'none',
      // color: '#000000',
      position: 'relative',
      paddingLeft: '40px',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        left: '0',
        width: '23.1px',
        height: '20px',
        backgroundColor: '#000000',
        clipPath: 'polygon(25% 0, 25% 100%, 100% 50%)',
        transition: 'transform ease .5s',
      },
      '&.expand::before': {
        transform: 'translateY(-50%) rotate(90deg)',
      },
    },

    '& .details': {
      padding: '20px',
    },
  },
}));

function Docs(props) {
  const location = useLocation()
  const { tabIndex } = location.state || {};
  const classes = useDocsStyles();
  const [value, setValue] = useState(tabIndex || 0);

  const [knowledgeBase, dispatchKnowledgeBase] = useReducer(
    reducer,
    initialState
  );
  const [code, dispatchCode] = useReducer(
    reducer,
    initialState
  );
  const [testing, dispatchTesting] = useReducer(
    reducer,
    initialState
  );
  const [audit, dispatchAudit] = useReducer(
    reducer,
    initialState
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const fetchKnowledgeBase = () => {
    axios
      .get('/children/a47dd45e-2a1e-49da-a0e7-d8f028c87b6d')
      .then(function (response) {
        // handle success
        dispatchKnowledgeBase({ type: 'reset', payload: [] });
        console.log('RegionalGuides Success');
        var items = response.data.results;
        items.forEach((item) => {
          dispatchKnowledgeBase({
            type: 'push',
            payload: {
              type: item.type,
              text: item[item.type].text,
              id: item.id,
            },
          });
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  const fetchCode = () => {
    axios
      .get('/children/d83a8f5f-6b8f-4d7e-9e03-772430703846')
      .then(function (response) {
        // handle success
        dispatchCode({ type: 'reset', payload: [] });
        console.log('RegionalGuides Success');
        var items = response.data.results;
        items.forEach((item) => {
          dispatchCode({
            type: 'push',
            payload: {
              type: item.type,
              text: item[item.type].text,
              id: item.id,
            },
          });
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  const fetchTesting = () => {
    axios
      .get('/children/dad9b472-ad07-43e7-b706-8fda1ca4b9b2')
      .then(function (response) {
        // handle success
        dispatchTesting({ type: 'reset', payload: [] });
        console.log('RegionalGuides Success');
        var items = response.data.results;
        items.forEach((item) => {
          dispatchTesting({
            type: 'push',
            payload: {
              type: item.type,
              text: item[item.type].text,
              id: item.id,
            },
          });
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  const fetchAudit = () => {
    axios
      .get('/children/bbf4aca8-598b-4460-a78d-a62cda849eb9')
      .then(function (response) {
        // handle success
        dispatchAudit({ type: 'reset', payload: [] });
        console.log('RegionalGuides Success');
        var items = response.data.results;
        items.forEach((item) => {
          dispatchAudit({
            type: 'push',
            payload: {
              type: item.type,
              text: item[item.type].text,
              id: item.id,
            },
          });
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  useEffect(() => {
    fetchKnowledgeBase();
    fetchCode();
    fetchTesting();
    fetchAudit();
  }, []);

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
      <TabPanel className={classes.tabPanel} value={value} index={0}>
        <div className="title">Introduction</div>
        <div className="paragraph">This documentation is a comprehsive source of DTrust public material.</div>
        <div className="paragraph">“Knowledge Base” provides information to users to answer thier functional questions.</div>
        <div className="paragraph">“Code” shows a substantial portion of the DTrust source code to demonstrate the DApp efficacy and answer potential user questions.</div>
        <div className="paragraph"> “Testing” shows the results of our security testing. “Audit” show the results of the DTrust audit from Hacken.io.</div>
      </TabPanel >
      <TabPanel className={classes.tabPanel} value={value} index={1}>
        <div className="title">Knowledge Base</div>
        <RenderChildren data={knowledgeBase} />
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={2}>
        <div className="title">Code</div>
        <RenderChildren data={code} />
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={3}>
        <div className="title">Testing</div>
        <RenderChildren data={testing} />
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={4}>
        <div className="title">Audit</div>
        <RenderChildren data={audit} />
      </TabPanel>
    </div >
  );
}

export default withWidth()(Docs);