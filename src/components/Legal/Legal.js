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
        <div className={classes.desc}>DTrust generates customized dtrusts that can effectuate a wide range of legal strategies. A dtrust can be used as a legal trust, not as a legal trust, within other trust structures, without other trusts, with a trustee, or without a trustee. These pages provide just a basic discussion of some common uses of traditional legal trusts applied to the DTrust context. These pages are only a basic discussion of an emerging field of law.</div>
        <div className={classes.desc}>Compared to traditional legal trusts executed by courts and financial institutions, dtrusts can perform the same functions more cheaply, without minimum funding requirements, and with the option of not using a trustee.</div>
        <div className={classes.desc}>Better Traditional Functions. Trustees and settlors who would otherwise form a traditional trust might prefer to use a dtrust for several reasons. Court independence, easy application to digital assets, and a more direct settlor-trustee relationship are some dtrust advantages over traditional legal trusts even to execute traditional trust strategies. A dtrust cuts out the intermediaries.</div>
        <div className={classes.desc}>Cheaper. DTrust takes 0.5% of assets held in dtrusts each year in semiannual charges. Otherwise, the only costs are gas fees on the ethereum network. Corporate trustees often take higher fees and impose minimum funding requirements on new trusts. DTrust does not impose minimum requirements. DTrust enables middle or low income people to benefit from the structured financial system of trusts, which has been historically reserved for the wealthiest.</div>
        <div className={classes.desc}>Trusteeless Option. Unlike traditional legal trusts, a dtrust can function without a trustee. A trusteeless dtrust is really an "automated distribution machine". This structure may or may not create a legal trust, depending on the jurisdiction, but the structure could enable the benefits of a traditional trust. For example, under the Uniform Trust Act in the United States, a trusteeless dtrust would not be a legal trust, because a legal trust requires a trustee. An individual could still set a distribution schedule with other specifications for children. The trusteeless dtrust would execute the distribution schedule even though there is no trustee or other intermediary. Depending on the situation, this could be a useful tax planning tool. It could also be useful to Settlors who want to work around local forced heirship rules.</div>
     </TabPanel >
      <TabPanel value={value} index={1}>
        <div className={classes.title}>Asset Protection</div>
        <div className={classes.desc}>People all over the world use trusts for asset protection. New claimants on a person's assets might not be able to reach assets held in a trust. Thanks to sturdy case law and reliable courts to uphold trust agreements against claimants, certain jurisdictions such as the Cook Islands, South Dakota, and Wyoming have earned reputations as attractive asset protection trust jurisdictions. A dtrust runs on the ethereum network, which provides certain advantages over even these most secure trust jurisdictions.</div> 
        <div className={classes.desc}>How do asset protection trusts protect assets? At the most basic level, courts cannot compel settlors to revoke irrevocable trusts. If the terms of a trust do not allow a person to access the assets in the trust, then a court cannot compel the person to access the assets in violation of the terms of the trust. Settlors cannot revoke irrevocable trusts, so a court cannot compel a settlor to use the assets in a trust to pay claimants. Similarly, spendthrift trusts do not allow beneficiary rights to be transferred, so a court cannot compel a beneficiary to use the assets in a trust to pay a claimant. </div>
        <div className={classes.desc}>Often, multiple trusts are used jointly to create stronger asset protection. For example, a domestic revocable trust might be held by a foreign irrevocable trust under terms which transfer the assets to the foreign trust if some event occurs. If some such event occurs, then the assets become unreachable by the settlor's creditors, because the settlor himself can no longer revoke the trust to recover the assets. These trust structures are governed by lengthy terms written in verbal languages. </div>
        <div className={classes.desc}>DTrust translates those terms into solidity to create seamless, direct, and easy-to-use dtrusts. For example, a settlor can form a revocable dtrust to hold his assets for the benefit of his children, a charity, or someone else. The settlor retains the control keys specified at the time of the creation of the dtrust. There may or may not be a trustee who also holds control keys. The beneficiaries hold ERC20 tokens to receive the future distributions. If the settlor wants that assets, then the settlor can simply use the revocation key to recover the assets. If the settlor ever wants to transform the revocable dtrust into an irrevocable dtrust in order to protect the dtrust assets from future claimants against the settlor, then the settlor can destroy the settlor's control keys. </div>
        <div className={classes.desc}> There are many other potential strategies to do with dtrusts, because dtrusts are customizable. DTrust can generate more than 512 different dtrust permutations with different control structures to create a variety of asset protection strategies. </div>
        <div className={classes.desc}>As with traditional legal trusts, the key to asset protection is to be prepared—hold your assets in dtrust now so that you can protect them later. </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className={classes.title}>Probate Aviodance</div>
        <div className={classes.desc}>When a person dies in common law jurisdictions, a probate court will either decide the validity of a will or distribute the estate according to rules of intestacy if there is no will. Other systems have similar structures. The probate process can be expensive in both time and money. One benefit of traditional legal trusts is that assets held in a trust do not go through the probate process. The assets are already in the trust; the trust continues to function through the death. A dtrust can also avoid the expensive probate process. </div>
        <div className={classes.desc}>How costly is probate? Court fees, attorney fees, appraisal fees, executor fees, bond fees, etc. all diminish the value that is ultimately passed on from a decedent's estate. 3% to 7% of total estate assets is a common estimate of the total cost of probate. </div>
        <div className={classes.desc}>How long does probate take? This will vary with the complexity of the estate, but one to two years is not uncommon. </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className={classes.title}>Estate Administration</div>
        <div className={classes.desc}>DTrust enables automated distributions and testamentary freedom for estate administration. Settlors can ensure that their assets are distributed as desired no matter what happens long into the future.</div>
        <div className={classes.desc}>Automated Distribution. After a dtrust is deployed it will execute as long as the ethereum network continues to validate transactions. Price movements, political transformations, or natural disasters will not affect the administration of the assets—the code will just run. This difference from traditional trusts can create added strategic benefits to trust structures. A settlor who wants a pure automated distribution machine without giving anyone abilities to interfere could create a trusteeless dtrust without any control keys. Once funded, the beneficiary wallet addresses would receive their scheduled payments without any possible disruption. Alternatively, a settlor could use a trustee and control keys to retain some human control over the future distributions. In either case, the ability of other parties—banks, courts, regulators—to interfere is lesser in a dtrust compared to traditional legal trusts. A bank can unwind a payment, but a bank cannot fork ethereum. </div>
        <div className={classes.desc}>Testamentary Freedom. DTrust creates novel opportunities for settlors who might want to administer an estate differently than local rules would ordinarily prescribe. Forced heirship rules in many countries mandate certain divisions of decedent estates. Similarly, many jurisdictions do not have trusts or similar legal structures. Settlors under these circumstances might use a dtrust within the local rules to craft an appropriate solution. See the "Regional Guides" for regional descriptions of forced heirship rules. </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div className={classes.title}>Tax Planning</div>
        <div className={classes.desc}>Settlor Death. Whether an estate tax is taken against an estate or an inheritance tax is taken against the inheritor, many governments around the world take portions of a decedents assets. Trusts have been used to reduce these taxes, because the assets are already held in the trust at the time of the decedent's death and the trust continues to exist after the decedent's death. In other words, there is no transfer upon the decedent's death, so estate and inheritance taxes are not triggered. A dtrust can be used as a trust to minimize tax burdens triggered by death. See the Regional Guides for regional descriptions of estate, gift, and inheritance tax schemes.</div>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <div className={classes.title}>Structured Giving</div>
        <div className={classes.desc}>When a donor gives assets to a friend, family member, charity, business partner, or some other organization, the donor might want to structure the distribution across time. For example, the donor might want to ensure a steady stream of support, rather than one lump sum. Similarly, a donor might want to make a gift subject to some conditions. A dtrust with control keys can manage the ultimate enjoyment of a gift. A dtrust enables the donor to structure both the timelines and ultimate control of gifts.</div>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <div className={classes.title}>Asset Management</div>
        <div className={classes.desc}>The basic concepts in the law of trusts are the same fiduciary relationships in asset management. A settlor can allow the trustee to transact with dtrust assets, which would enable a dtrust to function within a traditional asset management legal structure or as a stand-alone asset management infrastructure. The dtrust would replace the legal and financial institution infrastructure that asset managers already rely on. As long as good faith fiduciary relationships are maintained by other legal requirements or something else, a dtrust could provide the technological infrastructure for an asset management relationship. </div>
      </TabPanel>
      <TabPanel value={value} index={7}>
        <div className={classes.title}>Regional Guides</div>
        <div className={classes.desc}>...Coming Soon...</div>
      </TabPanel>
    </div >
  );
}
export default withWidth()(Legal);
