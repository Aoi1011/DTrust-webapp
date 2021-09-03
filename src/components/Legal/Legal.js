import React, { useEffect, useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import { createStyles, makeStyles, withStyles } from '@material-ui/core/styles';
import { Backdrop, Box, CircularProgress, Tab, Tabs } from '@material-ui/core';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
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
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

const StyledTab = withStyles((theme) =>
  createStyles({
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
  })
)((props) => <Tab {...props} />);

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
    },
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
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function Legal(props) {
  const classes = useLegaltyles();

  const [value, setValue] = useState(0);
  const [backdrop, setBackdrop] = useState(false);

  const [assetProtection, dispatchAssetProtection] = useReducer(
    reducer,
    initialState
  );
  const [probateAvoidance, dispatchProbateAvoidance] = useReducer(
    reducer,
    initialState
  );
  const [estateAdministration, dispatchEstateAdministration] = useReducer(
    reducer,
    initialState
  );
  const [taxPlanning, dispatchTaxPlanning] = useReducer(reducer, initialState);
  const [structuredGiving, dispatchStructuredGiving] = useReducer(
    reducer,
    initialState
  );
  const [assetManagement, dispatchAssetManagement] = useReducer(
    reducer,
    initialState
  );
  const [regionalGuides, dispatchRegionalGuides] = useReducer(
    reducer,
    initialState
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const fetchAssetProtection = (cancelToken) => {
    axios
      .get('/children/f7bb47a7e19043629e8ec78179f6014a', {
        cancelToken: cancelToken,
      })
      .then(function (response) {
        // handle success
        dispatchAssetProtection({ type: 'reset', payload: [] });
        console.log('AssetProtection Success');
        var items = response.data.results;
        items.forEach((item) => {
          dispatchAssetProtection({
            type: 'push',
            payload: { type: item.type, text: item[item.type].text },
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

  const fetchProbateAvoidance = (cancelToken) => {
    axios
      .get('/children/8bda4fa70e83415bac0adebdc8365440', {
        cancelToken: cancelToken,
      })
      .then(function (response) {
        // handle success
        dispatchProbateAvoidance({ type: 'reset', payload: [] });
        console.log('ProbateAvoidance Success');
        var items = response.data.results;
        items.forEach((item) => {
          dispatchProbateAvoidance({
            type: 'push',
            payload: { type: item.type, text: item[item.type].text },
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

  const fetchEstateAdministration = (cancelToken) => {
    axios
      .get('/children/616895b2a6734ac0859ff99ecc096c07', {
        cancelToken: cancelToken,
      })
      .then(function (response) {
        // handle success
        dispatchEstateAdministration({ type: 'reset', payload: [] });
        console.log('EstateAdministration Success');
        var items = response.data.results;
        items.forEach((item) => {
          dispatchEstateAdministration({
            type: 'push',
            payload: { type: item.type, text: item[item.type].text },
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

  const fetchTaxPlanning = (cancelToken) => {
    axios
      .get('/children/e0b944bb660641fab0626921847cc762', {
        cancelToken: cancelToken,
      })
      .then(function (response) {
        // handle success
        dispatchTaxPlanning({ type: 'reset', payload: [] });
        console.log('TaxPlanning Success');
        var items = response.data.results;
        items.forEach((item) => {
          dispatchTaxPlanning({
            type: 'push',
            payload: { type: item.type, text: item[item.type].text },
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

  const fetchStructuredGiving = (cancelToken) => {
    axios
      .get('/children/417e32d648ed4dfcaed68b9453fed624', {
        cancelToken: cancelToken,
      })
      .then(function (response) {
        // handle success
        dispatchStructuredGiving({ type: 'reset', payload: [] });
        console.log('StructuredGiving Success');
        var items = response.data.results;
        items.forEach((item) => {
          dispatchStructuredGiving({
            type: 'push',
            payload: { type: item.type, text: item[item.type].text },
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

  const fetchAssetManagement = (cancelToken) => {
    axios
      .get('/children/604e447603cc4628accbbbae85d45cac', {
        cancelToken: cancelToken,
      })
      .then(function (response) {
        // handle success
        dispatchAssetManagement({ type: 'reset', payload: [] });
        console.log('AssetManagement Success');
        var items = response.data.results;
        items.forEach((item) => {
          dispatchAssetManagement({
            type: 'push',
            payload: { type: item.type, text: item[item.type].text },
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

  const fetchRegionalGuides = (cancelToken) => {
    axios
      .get('/children/59b2e3186cf64a0b91c95120eccd7a99', {
        cancelToken: cancelToken,
      })
      .then(function (response) {
        // handle success
        dispatchRegionalGuides({ type: 'reset', payload: [] });
        console.log('RegionalGuides Success');
        var items = response.data.results;
        items.forEach((item) => {
          dispatchRegionalGuides({
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
    let source = axios.CancelToken.source();
    fetchAssetProtection(source.token);
    fetchProbateAvoidance(source.token);
    fetchEstateAdministration(source.token);
    fetchTaxPlanning(source.token);
    fetchStructuredGiving(source.token);
    fetchAssetManagement(source.token);
    fetchRegionalGuides(source.token);
    return () => source.cancel('Legal Component got unmounted');
  }, []);

  return (
    <div className={classes.root}>
      <Tabs
        orientation={isWidthUp('md', props.width) ? 'vertical' : 'horizontal'}
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <StyledTab label="Legal" {...allyProps(0)} />
        <StyledTab label="Asset Protection" {...allyProps(1)} />
        <StyledTab label="Probate Avoidance" {...allyProps(2)} />
        <StyledTab label="Estate Administration" {...allyProps(3)} />
        <StyledTab label="Tax Planning" {...allyProps(4)} />
        <StyledTab label="Structured Giving" {...allyProps(5)} />
        <StyledTab label="Asset Management" {...allyProps(6)} />
        <StyledTab label="Regional Guides" {...allyProps(7)} />
      </Tabs>
      <TabPanel className={classes.tabPanel} value={value} index={0}>
        <div className="title">Legal</div>
        <div className="paragraph">
          DTrust generates customized dtrusts that can effectuate a wide range
          of legal strategies. These pages provide just a basic discussion of
          some common uses of traditional legal trusts applied to the DTrust
          context. These pages are only a basic discussion of an emerging field
          of law.
          
          ### Disclaimer          
          This post is not legal advice. This post also does not encourage any 
          strategies to evade or avoid US taxes, as described here 
          https://www.irs.gov/businesses/small-businesses-self-employed/abusive-trust-tax-evasion-schemes. 
        </div>
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={1}>
        <div className="title">Asset Protection</div>
        <RenderChildren data={assetProtection} setBackdrop={setBackdrop} />
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={2}>
        <div className="title">Probate Avoidance</div>
        <RenderChildren data={probateAvoidance} setBackdrop={setBackdrop} />
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={3}>
        <div className="title">Estate Administration</div>
        <RenderChildren data={estateAdministration} setBackdrop={setBackdrop} />
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={4}>
        <div className="title">Tax Planning</div>
        <RenderChildren data={taxPlanning} setBackdrop={setBackdrop} />
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={5}>
        <div className="title">Structured Giving</div>
        <RenderChildren data={structuredGiving} setBackdrop={setBackdrop} />
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={6}>
        <div className="title">Asset Management</div>
        <RenderChildren data={assetManagement} setBackdrop={setBackdrop} />
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={7}>
        <div className="title">Regional Guides</div>
        <RenderChildren data={regionalGuides} setBackdrop={setBackdrop} />
      </TabPanel>
      <Backdrop className={classes.backdrop} open={backdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
export default withWidth()(Legal);
