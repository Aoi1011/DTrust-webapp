import React from "react";

const Code = () => {
    return (
        <article id="604e4476-03cc-4628-accb-bbae85d45cac" className="page sans"><div className="page-body"><p id="27f71cf4-a902-42ef-83f2-158ee9bebedd" <body><body><article id="d83a8f5f-6b8f-4d7e-9e03-772430703846" class="page sans"><header><h1 class="page-title">Code</h1></header><div class="page-body"><h1 id="5edf1483-92fb-4c5a-a465-bc3351f73566" class=""><strong>Software Functions Documentation</strong></h1><p id="bf7c9788-4482-4581-b39c-19d57ad7b7f8" class="">DTrust is a decentralized application on the Ethereum virtual machine that generates smart trust agreements, also known as decentralized trusts (dtrusts). It allows users to manage and separate the control and enjoyment of digital assets across time. Like traditional legal trusts, DTrust enables asset protection, probate avoidance, estate administration, tax planning, structured giving, asset management, and other legal functions.</p><p id="d78b299d-4473-40d6-ac03-9ea28836f208" class="">This documentation explains the behavior of solidity codes behind DTrust. In these docs, you will find the DTrust codes commented to explain various functions and contracts. The code comment have been written based on <a href="https://docs.soliditylang.org/en/v0.5.10/natspec-format.html">NatSpec guidelines</a>. </p><p id="9e9c38e9-320f-4e16-8cc9-697ca68dc5dc" class=""><strong>The Natspec code commenting Standards:</strong></p><div class="indented"><p id="2d350149-dd53-4c50-b0cd-e04c27b64380" class="">1. For a single line: &nbsp;Start with ///</p><p id="c3d8819e-0faf-487e-9828-7d1832296960" class="">2. For multiple lines: Start with /** and end with */</p></div><p></p><p id="10071b40-5aae-44ba-93f3-4922f4fa8708" class="">Reference: <a href="https://docs.soliditylang.org/en/v0.5.10/natspec-format.html">https://docs.soliditylang.org/en/v0.5.10/natspec-format.htm</a></p><h1 id="bc5bc300-b6b1-4588-ae91-232c0fb2725d" class="">Contracts</h1><p id="c24bc2b0-f478-4193-a7e1-0be32e8e4ced" class=""><a href="https://github.com/zwecken/DTrust">https://github.com/zwecken/DTrust</a></p><ul id="ad7d4610-ff6d-4a3f-92cf-16b2d327396f" class="toggle"><li><details open=""><summary>Controlkey.sol</summary><pre id="d887d9be-fe70-41f0-be98-ff5e4731aaae" class="code code-wrap"><code>// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ControlKey {
struct StructControlKey {
string privateKey;
address settlor;
address beneficiary;
address trustee;
bool usable;
bool burnable;
}

uint256 public numControlKey;

mapping(uint256 =&gt; StructControlKey) controlKeys;

event GenerateControlKey(uint256 indexed controlKeyId, string privateKey);

function generateControlKey(
    string memory _privateKey,
    address _settlor,
    address _beneficiary,
    address _trustee
) external returns (uint256 controlKeyId) {
    controlKeyId = numControlKey;
    numControlKey++;
    controlKeys[controlKeyId] = StructControlKey({
        privateKey: _privateKey,
        settlor: _settlor,
        beneficiary: _beneficiary,
        trustee: _trustee,
        usable: false,
        burnable: false
    });

    emit GenerateControlKey(controlKeyId, _privateKey);
}

function getControlKey(uint256 _controlKeyId)
    external
    view
    returns (StructControlKey memory existControlKey)
{
    require(_controlKeyId &lt;= numControlKey, "ControlKey does not exist.");
    return controlKeys[_controlKeyId];
}

function handleUsableControlKey(uint256 _controlKeyId) external {
    require(
        _controlKeyId &lt;= numControlKey,
        "ControlKey must be less than total"
    );
    StructControlKey memory existControlKey = controlKeys[_controlKeyId];
    controlKeys[_controlKeyId] = StructControlKey({
        privateKey: existControlKey.privateKey,
        settlor: existControlKey.settlor,
        beneficiary: existControlKey.beneficiary,
        trustee: existControlKey.trustee,
        usable: !existControlKey.usable,
        burnable: existControlKey.burnable
    });
}

function handleBurnableControlKey(uint256 _controlKeyId) external {
    require(
        _controlKeyId &lt;= numControlKey,
        "ControlKey must be less than total"
    );
    StructControlKey memory existControlKey = controlKeys[_controlKeyId];
    controlKeys[_controlKeyId] = StructControlKey({
        privateKey: existControlKey.privateKey,
        settlor: existControlKey.settlor,
        beneficiary: existControlKey.beneficiary,
        trustee: existControlKey.trustee,
        usable: existControlKey.usable,
        burnable: !existControlKey.burnable
    });
}

function destroyControlKey(uint256 _controlKeyId) external {
    require(
        _controlKeyId &lt;= numControlKey,
        "ControlKey must be less than total"
    );

    StructControlKey memory existControlKey = controlKeys[_controlKeyId];
    require(existControlKey.burnable, "Can not destroy.");

    delete controlKeys[_controlKeyId];
}
</code></pre></details></li></ul><ul id="c12c6e80-7152-4744-b593-224bcf64b077" class="toggle"><li><details open=""><summary>DTrust.sol</summary><pre id="a09b9ef4-d1fb-4026-9cb4-6256a8abee25" class="code code-wrap"><code>// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import "./Governance.sol";
import "./DTtoken.sol";
import "./PRtoken.sol";
import "./interfaces/KeeperCompatibleInterface.sol";
import "./interfaces/IMyERC20.sol";
import "./interfaces/IMyERC721.sol";
import "./libraries/Strings.sol";

contract DTRUST is ERC1155, KeeperCompatibleInterface {
    using Strings for string;

    uint256 private constant PACK_INDEX =
        0x0000000000000000000000000000000000000000000000000000000000007FFF;

    enum TypeOfPayment {
        ERC20,
        ERC721,
        AnnualFee,
        None
    }

    struct ERC20TokenAsset {
        IMyERC20 erc20;
        uint256 erc20TokenId;
        uint256 erc20TokenAmount;
        uint256 erc20PaymentPerFrequency;
        uint256 paymentInterval;
        uint256 lockedUntil;
    }

    struct ERC721TokenAsset {
        IMyERC721 erc721;
        uint256 erc721TokenId;
        uint256 paymentInterval;
        uint256 lockedUntil;
    }

    struct Subscription {
        uint256 start;
        uint256 nextPayment;
        bool isTwoYear;
    }

    TypeOfPayment typeOfPayment;
    uint256 private constant _AnualFeeTotal = 0;
    uint256 public immutable basisPoint; // for 2 year
    uint256 public constant payAnnualFrequency = 730 days;
    uint256[] private erc20assetIds;
    uint256[] private erc721assetIds;
    address public immutable governanceAddress;
    address payable public immutable manager;
    address payable public immutable settlor;
    address payable public immutable trustee;
    address public immutable beneficiary;
    address public immutable promoter;
    string public immutable dTrustUri;
    bool public immutable hasPromoter;
    Subscription private immutable subscription;

    mapping(uint256 =&gt; bool) public existToken;
    mapping(uint256 =&gt; ERC20TokenAsset) public erc20TokenAssets;
    mapping(uint256 =&gt; ERC721TokenAsset) public erc721TokenAssets;

    event OrderBatch(
        address indexed _target,
        uint256[] indexed _ids,
        uint256[] indexed _amounts
    );
    event TransferBatch(
        bool indexed isERC20,
        address indexed from,
        address indexed to,
        uint256[] value
    );
    event Mint(address indexed sender, uint256 tokenId, uint256 amount);
    event AnnualPaymentSent(
        address from,
        uint256[] tokenIds,
        uint256 amount,
        uint256 total,
        uint256 date
    );
    event PaymentERC20Scheduled(
        uint256[] indexed erc20Assets,
        address recipient
    );
    event PaymentERC721Scheduled(
        uint256[] indexed erc721Assets,
        address recipient
    );
    event PaymentExecuted(
        address indexed scheduledTransaction,
        address recipient,
        uint256 value
    );
    event PayToBeneficiary(uint256[] ids, uint256[] amounts);

    modifier onlyManager() {
        require(
            msg.sender == manager ||
                msg.sender == settlor ||
                msg.sender == trustee ||
                msg.sender == address(this),
            "Error: The caller is not any of the defined managers (settlor and trustee)!"
        );
        _;
    }

    constructor(
        string memory _newURI,
        address payable _deployerAddress,
        address payable _settlor,
        address _beneficiary,
        address payable _trustee,
        address _governanceAddress,
        uint256 _basisPoint,
        bool _hasPromoter,
        address _promoter
    ) ERC1155(_newURI) {
        require(address(_deployerAddress) != address(0));
        require(address(_settlor) != address(0));
        require(address(_beneficiary) != address(0));
        require(address(_trustee) != address(0));

        dTrustUri = _newURI;
        manager = _deployerAddress;
        settlor = _settlor;
        beneficiary = _beneficiary;
        trustee = _trustee;

        subscription = Subscription(
            block.timestamp,
            block.timestamp + payAnnualFrequency,
            true
        );

        governanceAddress = _governanceAddress;
        basisPoint = _basisPoint;

        hasPromoter = _hasPromoter;
        promoter = _promoter;
    }

    function setURI(string memory _newURI) external onlyManager {
        _setURI(_newURI);
    }

    function getURI(string memory _uri, uint256 _id)
        public
        pure
        returns (string memory)
    {
        return toFullURI(_uri, _id);
    }

    function toFullURI(string memory _uri, uint256 _id)
        internal
        pure
        returns (string memory)
    {
        return
            string(
                abi.encodePacked(
                    _uri,
                    "/",
                    Strings.uint2str(_id &amp; PACK_INDEX),
                    ".json"
                )
            );
    }

    function mint(
        address _to,
        uint256 _id,
        uint256 _quantity,
        bytes memory _data
    ) external onlyManager {
        existToken[_id] = true;
        _mint(_to, _id, _quantity, _data);
    }

    function mintBatch(
        address _to,
        uint256[] memory _ids,
        uint256[] memory _amounts,
        bytes memory _data
    ) public onlyManager {
        for (uint256 i = 0; i &lt; _ids.length; i++) {
            existToken[_ids[i]] = true;
        }
        _mintBatch(_to, _ids, _amounts, _data);
    }

    function fillOrderERC20Assets(
        IMyERC20[] memory _erc20Tokens,
        uint256[] memory _amounts,
        uint256[] memory _paymentPerFrequency,
        uint256[] memory _paymentIntervals,
        bytes calldata _data
    ) external onlyManager {
        uint256 _lengthOfErc20Token = _erc20Tokens.length;
        for (uint256 i = 0; i &lt; _lengthOfErc20Token; i++) {
            uint256 id = uint256(uint160(address(_erc20Tokens[i])));
            erc20assetIds.push(id);

            ERC20TokenAsset memory newerc20 = ERC20TokenAsset(
                _erc20Tokens[i],
                id,
                _amounts[i],
                _paymentPerFrequency[i],
                _paymentIntervals[i],
                block.timestamp + _paymentIntervals[i]
            );
            erc20TokenAssets[id] = newerc20;
        }
        mintBatch(address(this), erc20assetIds, _amounts, _data);
        transferERC20(true, erc20assetIds, _amounts);
        emit OrderBatch(manager, erc20assetIds, _amounts);
    }

    function _tokenHash(IMyERC721 erc721token)
        internal
        virtual
        returns (uint256)
    {
        return uint256(keccak256(abi.encodePacked(erc721token)));
    }

    function fillOrderERC721Assets(
        IMyERC721[] calldata _erc721Tokens,
        bytes calldata _data,
        uint256[] memory _paymentPerFrequency
    ) external onlyManager {
        uint256 lengthOfErc721Tokens = _erc721Tokens.length;
        uint256[] memory amounts = new uint256[](lengthOfErc721Tokens);
        for (uint256 i = 0; i &lt; lengthOfErc721Tokens; i++) {
            uint256 _erc1155TokenId = _tokenHash(_erc721Tokens[i]);
            erc721assetIds.push(_erc1155TokenId);
            ERC721TokenAsset memory newerc721 = ERC721TokenAsset(
                _erc721Tokens[i],
                _erc1155TokenId,
                _paymentPerFrequency[i],
                block.timestamp + _paymentPerFrequency[i]
            );
            erc721TokenAssets[_erc1155TokenId] = newerc721;
            amounts[i] = 1;
        }

        mintBatch(address(this), erc721assetIds, amounts, _data);
        transferERC721(true, erc721assetIds, amounts);
        emit OrderBatch(manager, erc721assetIds, amounts);
    }

    function getTargetDeposit(bool isERC20Asset, uint256 _tokenid)
        external
        view
        onlyManager
        returns (uint256)
    {
        if (isERC20Asset) {
            return erc20TokenAssets[_tokenid].erc20TokenAmount;
        } else {
            if (erc721TokenAssets[_tokenid].erc721TokenId != 0) {
                return 1;
            } else {
                return 0;
            }
        }
    }

    function schedulePaymentERC20Assets() internal {
        uint256 countOfToken = 0;
        uint256 lengthOfErc20Assets = erc20assetIds.length;
        uint256[] memory erc20TokenIds = new uint256[](lengthOfErc20Assets);
        uint256[] memory amountsOfPayment = new uint256[](lengthOfErc20Assets);

        for (uint256 i = 0; i &lt; lengthOfErc20Assets; i++) {
            ERC20TokenAsset storage currentAsset = erc20TokenAssets[
                erc20assetIds[i]
            ];
            if (
                currentAsset.erc20TokenId == 0 ||
                block.number &gt;= currentAsset.lockedUntil
            ) {
                continue;
            }

            uint256 erc20PaymentPerFrequency = currentAsset
                .erc20PaymentPerFrequency;

            if (erc20PaymentPerFrequency &gt; currentAsset.erc20TokenAmount) {
                erc20TokenIds[countOfToken] = erc20assetIds[i];
                amountsOfPayment[countOfToken] = currentAsset.erc20TokenAmount;

                currentAsset.erc20TokenId = 0;
                currentAsset.erc20TokenAmount = 0;

                countOfToken++;
                continue;
            }

            currentAsset.erc20TokenAmount -= erc20PaymentPerFrequency;
            currentAsset.lockedUntil =
                block.timestamp +
                currentAsset.paymentInterval;

            erc20TokenIds[countOfToken] = erc20assetIds[i];
            amountsOfPayment[countOfToken] = erc20PaymentPerFrequency;

            countOfToken++;
        }
        require(countOfToken &gt; 0, "No assets");

        _burnBatch(msg.sender, erc20TokenIds, amountsOfPayment);
        transferERC20(false, erc20TokenIds, amountsOfPayment);
        emit PayToBeneficiary(erc20TokenIds, amountsOfPayment);
    }

    function schedulePaymentERC721Assets() internal {
        uint256 countOfToken = 0;
        uint256 lengthOfErc721Assets = erc721assetIds.length;
        uint256[] memory erc721tokenIds = new uint256[](lengthOfErc721Assets);
        uint256[] memory amountsOfPayment = new uint256[](lengthOfErc721Assets);

        for (uint256 i = 0; i &lt; lengthOfErc721Assets; i++) {
            ERC721TokenAsset storage currentAsset = erc721TokenAssets[
                erc721assetIds[i]
            ];
            if (
                currentAsset.erc721TokenId == 0 ||
                block.number &gt;= currentAsset.lockedUntil
            ) {
                continue;
            }

            currentAsset.erc721TokenId == 0;

            erc721tokenIds[countOfToken] = erc721assetIds[i];
            amountsOfPayment[countOfToken] = 1;

            countOfToken++;
        }
        require(countOfToken &gt; 0, "No assets");
        _burnBatch(msg.sender, erc721tokenIds, amountsOfPayment);
        transferERC721(false, erc721tokenIds, amountsOfPayment);
        emit PayToBeneficiary(erc721tokenIds, amountsOfPayment);
    }

    function transferERC20(
        bool _isDepositFunction,
        uint256[] memory _erc20TokenIds,
        uint256[] memory _amounts
    ) internal {
        uint256 lengthOfErc20Assets = _erc20TokenIds.length;
        if (_isDepositFunction) {
            for (uint256 i = 0; i &lt; lengthOfErc20Assets; i++) {
                ERC20TokenAsset storage currentAsset = erc20TokenAssets[
                    _erc20TokenIds[i]
                ];
                bool success = currentAsset.erc20.transferFrom(
                    manager,
                    address(this),
                    _amounts[i]
                );
                if (!success) {
                    currentAsset.erc20TokenAmount = _amounts[i];
                }
            }
            emit TransferBatch(true, manager, address(this), _amounts);
        } else {
            // withdraw function
            for (uint256 i = 0; i &lt; lengthOfErc20Assets; i++) {
                ERC20TokenAsset storage currentAsset = erc20TokenAssets[
                    _erc20TokenIds[i]
                ];
                bool success = currentAsset.erc20.transfer(
                    beneficiary,
                    _amounts[i]
                );
                if (!success) {
                    currentAsset.erc20TokenAmount = _amounts[i];
                }
            }
            emit TransferBatch(true, address(this), beneficiary, _amounts);
        }
    }

    function transferERC721(
        bool _isDepositFunction,
        uint256[] memory _erc721assetIds,
        uint256[] memory _amounts
    ) internal {
        uint256 lengthOfErc721Assets = _erc721assetIds.length;
        address from;
        address to;
        if (_isDepositFunction) {
            from = manager;
            to = address(this);
        } else {
            // widthdraw function
            from = address(this);
            to = beneficiary;
        }
        for (uint256 i = 0; i &lt; lengthOfErc721Assets; i++) {
            ERC721TokenAsset storage currentAsset = erc721TokenAssets[
                _erc721assetIds[i]
            ];
            currentAsset.erc721.transferFrom(from, to, _amounts[i]);
        }
        emit TransferBatch(false, from, to, _amounts);
    }

    function paySemiAnnualFee() internal {
        require(subscription.isTwoYear);
        require(block.timestamp &gt;= subscription.nextPayment, "not due yet");
        uint256 semiAnnualFee = 0;
        DTtoken dttoken;
        PRtoken prtoken;
        address target;

        uint256 countOfToken = 0;
        uint256 lengthOfErc20Assets = erc20assetIds.length;
        uint256[] memory tokenAmounts = new uint256[](lengthOfErc20Assets);
        uint256[] memory erc20TokenIds = new uint256[](lengthOfErc20Assets);

        for (uint256 i = 0; i &lt; lengthOfErc20Assets; i++) {
            ERC20TokenAsset memory currentAsset = erc20TokenAssets[
                erc20assetIds[i]
            ];
            if (currentAsset.erc20TokenId == 0) {
                continue;
            }
            uint256 fee = currentAsset.erc20TokenAmount * (basisPoint / 100);

            if (fee &gt; currentAsset.erc20TokenAmount) {
                erc20TokenIds[countOfToken] = erc20assetIds[i];
                tokenAmounts[countOfToken] = currentAsset.erc20TokenAmount;

                currentAsset.erc20TokenId = 0;
                currentAsset.erc20TokenAmount = 0;

                erc20TokenAssets[erc20assetIds[i]] = currentAsset;
                countOfToken++;
                continue;
            }

            tokenAmounts[countOfToken] = fee;
            erc20TokenIds[countOfToken] = erc20assetIds[i];

            currentAsset.erc20TokenAmount -= fee;
            semiAnnualFee += fee;
            erc20TokenAssets[erc20assetIds[i]] = currentAsset;
            countOfToken++;
        }

        if (hasPromoter) {
            target = promoter;
            prtoken.mint(promoter, semiAnnualFee, "");
        } else {
            target = governanceAddress;
            dttoken.mint(governanceAddress, semiAnnualFee);
        }
        _burnBatch(address(this), erc20TokenIds, tokenAmounts);
        transferERC20(false, erc20TokenIds, tokenAmounts);
        
        Governance governance;
        governance.splitAnnualFee(semiAnnualFee);

        emit AnnualPaymentSent(
            target,
            erc20TokenIds,
            semiAnnualFee,
            _AnualFeeTotal,
            block.timestamp
        );

        subscription.nextPayment += payAnnualFrequency;
        subscription.isTwoYear = false;
    }

    function checkUpkeep(bytes calldata checkData)
        external
        override
        returns (bool upkeepNeeded, bytes memory performData)
    {
        uint256 lengthOfErc20Assets = erc20assetIds.length;
        uint256 lengthOfErc721Assets = erc721assetIds.length;
        upkeepNeeded = false;

        if (block.timestamp &lt;= subscription.nextPayment) {
            upkeepNeeded = true;
            typeOfPayment = TypeOfPayment.AnnualFee;
        }

        if (!upkeepNeeded) {
            for (uint256 i = 0; i &lt; lengthOfErc20Assets; i++) {
                ERC20TokenAsset storage currentERC20Asset = erc20TokenAssets[
                    erc20assetIds[i]
                ];

                if (block.timestamp &lt;= currentERC20Asset.lockedUntil) {
                    upkeepNeeded = true;
                    typeOfPayment = TypeOfPayment.ERC20;
                    break;
                }
            }
        }
        if (!upkeepNeeded) {
            for (uint256 i = 0; i &lt; lengthOfErc721Assets; i++) {
                ERC721TokenAsset storage currentERC721Asset = erc721TokenAssets[
                    erc721assetIds[i]
                ];

                if (block.timestamp &lt;= currentERC721Asset.lockedUntil) {
                    upkeepNeeded = true;
                    typeOfPayment = TypeOfPayment.ERC721;
                    break;
                }
            }
        }

        typeOfPayment = TypeOfPayment.None;
    }

    function performUpkeep(bytes calldata performData) external override {
        if (typeOfPayment == TypeOfPayment.ERC20) {
            schedulePaymentERC20Assets();
        } else if (typeOfPayment == TypeOfPayment.ERC721) {
            schedulePaymentERC721Assets();
        } else if (typeOfPayment == TypeOfPayment.AnnualFee) {
            paySemiAnnualFee();
        }
    }
}</code></pre></details></li></ul><ul id="1a135f55-746d-46e8-88fc-6cc3cdca9420" class="toggle"><li><details open=""><summary>DTrustFactory.sol</summary><pre id="488caebe-1217-40c8-a5c2-7ff753704bad" class="code code-wrap"><code>// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./DTRUST.sol";
import "./ControlKey.sol";

contract DTRUSTFactory {
    DTRUST[] public deployedDTRUSTs;
    uint256 public basisPoint;
    address public governanceAddress;
    bytes32[] questions;

    mapping(DTRUST =&gt; bool) isDeployed;

    event CreateDTRUST(DTRUST createdDtrust, string indexed newuri);
    event UpdateBasisPoint(uint256 basispoint);
    event UpdateQuestion(bytes32[] allQuestions);

    constructor(address _governanceAddress) {
        governanceAddress = _governanceAddress;
        basisPoint = 1;
    }

    function getQuestions() external view returns (bytes32[] memory) {
        return questions;
    }

    function createDTRUST(
        string memory _newuri,
        address _settlor,
        address _beneficiary,
        address _trustee,
        bool _hasPromoter,
        address promoter
    ) external {
        DTRUST newDTRUST = new DTRUST(
            _newuri,
            payable(msg.sender),
            payable(_settlor),
            _beneficiary,
            payable(_trustee),
            governanceAddress,
            basisPoint,
            _hasPromoter,
            promoter
        );
        deployedDTRUSTs.push(newDTRUST);
        isDeployed[newDTRUST] = true;

        emit CreateDTRUST(newDTRUST, _newuri);
    }

    function getAllDeployedDTRUSTs() external view returns (DTRUST[] memory) {
        return deployedDTRUSTs;
    }

    function updateBasisPoint(uint256 _basisPoint) external {
        basisPoint = _basisPoint;

        emit UpdateBasisPoint(basisPoint);
    }

    function updateQuestion(bytes32 _content) external {
        questions.push(_content);

        emit UpdateQuestion(questions);
    }
}</code></pre></details></li></ul><ul id="ddea95d5-b3c1-415f-a285-40fb53b9d4f6" class="toggle"><li><details open=""><summary>DTtoken.sol</summary><pre id="016de19a-8cbc-439a-85df-0d0a61737c8a" class="code code-wrap"><code>// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DTtoken is ERC20 {

    uint256 public constant INITIAL_SUPPLY = 1000;

    address public registry;

    constructor(address _manager, address _registry) ERC20("DTtoken", "DT") {
        registry = _registry;
        _mint(_manager, INITIAL_SUPPLY);
    }

    function mint(address _account, uint256 value) external {
        require(
            msg.sender == registry,
            "Only the registry can mint new tokens"
        );
        _mint(_account, value);
    }
}</code></pre></details></li></ul><ul id="64710ebe-54c8-49bf-a082-4004c7cd7c6c" class="toggle"><li><details open=""><summary>Governance.sol</summary><pre id="f854a5d6-5ce1-4521-8b21-00ff3146da10" class="code code-wrap"><code>// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import "./DTRUSTFactory.sol";
import "./DTtoken.sol";

contract Governance {
    IERC20 public dttoken;
    address[] public voters;

    Proposal[] public proposals;

    uint256 public constant votePeriod = 90 days;

    // voter =&gt; deposit
    mapping(address =&gt; uint256) public deposits;

    mapping(address =&gt; uint256) public annualFee;

    mapping(address =&gt; bool) public isVoter;

    mapping(address =&gt; uint256) public voted;

    // Voter =&gt; Withdraw timestamp
    mapping(address =&gt; uint256) public withdrawTimes;

    struct Proposal {
        Result result;
        ProposalType proposalType;
        bytes32 proposalContentOfQuestion;
        uint256 proposalBasisPoint;
        address proposer;
        uint256 startTime;
        uint256 yesCount;
        uint256 noCount;
    }

    enum Result {
        Pending,
        Yes,
        No
    }

    enum ProposalType {
        BasisPoint,
        Question
    }

    event Deposit(address indexed voter, uint256 amount);
    event Withdraw(address indexed voter, uint256 amount);
    event Execute(uint256 indexed proposalId);
    event Propose(uint256 indexed proposalId, address indexed proposer);
    event Terminate(uint256 indexed proposalId, Result result);
    event Vote(
        uint256 indexed proposalId,
        address indexed voter,
        bool approve,
        uint256 weight
    );
    event SplitAnnualFee(uint256 totalOfDTtoken, uint256 lengthOfVoter);

    modifier onlyVoter() {
        require(isVoter[msg.sender], "Error: The caller is not voter!");
        _;
    }

    function registerDTtoken(IERC20 _DTtoken) external {
        dttoken = _DTtoken;
    }

    function deposit(uint256 _amount) external {
        require(_amount &gt; 0);
        address sender = msg.sender;
        if (!isVoter[sender]) {
            voters.push(sender);
            isVoter[sender] = true;
        }
        deposits[sender] += _amount;
        dttoken.transferFrom(sender, address(this), _amount);
        emit Deposit(sender, _amount);
    }

    function withdraw(uint256 _amount) external onlyVoter {
        address sender = msg.sender;
        uint256 _deposit = deposits[sender];
        require(_deposit &gt; _amount, "Cannot withdraw!");
        deposits[sender] -= _amount;
        dttoken.transfer(msg.sender, _amount);
        emit Withdraw(sender, _amount);
    }

    function splitAnnualFee(uint256 _annualAmount) external {
        uint256 totalOfDTtoken = dttoken.totalSupply();
        uint256 lengthOfVoter = voters.length;
        for (uint256 i = 0; i &lt; lengthOfVoter; i++) {
            uint256 fee = _annualAmount *
                (dttoken.balanceOf(voters[i]) / totalOfDTtoken);
            annualFee[voters[i]] = fee;
        }
        transferAnnualFee();
        emit SplitAnnualFee(totalOfDTtoken, lengthOfVoter);
    }

    function transferAnnualFee() internal {
        uint256 lengthOfVoter = voters.length;
        for (uint256 i = 0; i &lt; lengthOfVoter; i++) {
            uint256 _amount = annualFee[voters[i]];
            annualFee[voters[i]] = 0;
            bool success = dttoken.transfer(voters[i], _amount);
            if (!success) {
                annualFee[voters[i]] = _amount;
            }   
            
        }
    }

    function proposeForDtrustBasisPoint(uint256 _basisPoint)
        external
        onlyVoter
        returns (uint256)
    {
        uint256 proposalId = proposals.length;

        Proposal memory proposal;
        proposal.proposalType = ProposalType.BasisPoint;
        proposal.proposalBasisPoint = _basisPoint;
        proposal.proposer = msg.sender;
        proposal.startTime = block.timestamp;

        proposals.push(proposal);

        emit Propose(proposalId, msg.sender);

        return proposalId;
    }

    function proposeForDTrustQuestionOfContent(bytes32 _content)
        external
        onlyVoter
        returns (uint256)
    {
        uint256 proposalId = proposals.length;

        Proposal memory proposal;
        proposal.proposalType = ProposalType.Question;
        proposal.proposalContentOfQuestion = _content;
        proposal.proposer = msg.sender;
        proposal.startTime = block.timestamp;

        proposals.push(proposal);

        emit Propose(proposalId, msg.sender);

        return proposalId;
    }

    function voteYes(uint256 _proposalId) external onlyVoter {
        address sender = msg.sender;
        require(voted[sender] == _proposalId, "Already voted");
        Proposal storage proposal = proposals[_proposalId];

        uint256 _deposit = deposits[sender];
        uint256 fee = (_deposit * 3) / 4;
        require(_deposit &gt; fee, "Not enough amount in your balance");
        deposits[sender] -= fee;
        voted[sender] = _proposalId;
        proposal.yesCount += 1;

        emit Vote(_proposalId, sender, true, fee);
    }

    function voteNo(uint256 _proposalId) external onlyVoter {
        address sender = msg.sender;
        require(voted[sender] == _proposalId, "Already voted");
        Proposal storage proposal = proposals[_proposalId];
        require(
            proposal.result == Result.Pending,
            "Proposal is already finalized"
        );

        uint256 _deposit = deposits[sender];
        uint256 fee = (_deposit * 3) / 4;
        deposits[sender] -= fee;
        voted[sender] = _proposalId;
        proposal.noCount += 1;

        emit Vote(_proposalId, sender, false, fee);
    }

    function finalize(uint256 _proposalId) external {
        Proposal storage proposal = proposals[_proposalId];
        DTRUSTFactory dtrustFactory;
        require(
            proposal.result == Result.Pending,
            "Proposal is already finalized"
        );
        if (proposal.yesCount &gt; proposal.noCount) {
            require(
                block.timestamp &gt; proposal.startTime + votePeriod,
                "Proposal cannot be executed until end of vote period"
            );
            ProposalType _type = proposal.proposalType;
            if (_type == ProposalType.BasisPoint) {
                dtrustFactory.updateBasisPoint(proposal.proposalBasisPoint);
            } else if (_type == ProposalType.Question) {
                dtrustFactory.updateQuestion(
                    proposal.proposalContentOfQuestion
                );
            }
            proposal.result = Result.Yes;

            emit Execute(_proposalId);
        } else {
            require(
                block.timestamp &gt; proposal.startTime + votePeriod,
                "Proposal cannot be terminated until end of yes vote period"
            );

            proposal.result = Result.No;

            emit Terminate(_proposalId, proposal.result);
        }
    }

    function getProposal(uint256 _proposalId)
        external
        view
        onlyVoter
        returns (Proposal memory)
    {
        return proposals[_proposalId];
    }

    function getProposalsCount() external view onlyVoter returns (uint256) {
        return proposals.length;
    }
}</code></pre></details></li></ul><ul id="a36ea6b5-9440-4643-88e9-f209f109b234" class="toggle"><li><details open=""><summary>Migration.sol</summary><pre id="5fcf2102-ee91-4e88-8e6b-0a7339afc117" class="code code-wrap"><code>// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Migrations {
  address public owner;
  uint public last_completed_migration;

  constructor() {
    owner = msg.sender;
  }

  modifier restricted() {
    if (msg.sender == owner) _;
  }

  function setCompleted(uint completed) public restricted {
    last_completed_migration = completed;
  }

  function upgrade(address new_address) public restricted {
    Migrations upgraded = Migrations(new_address);
    upgraded.setCompleted(last_completed_migration);
  }
}</code></pre></details></li></ul><ul id="130ad3b3-05b3-4016-8a82-9bb8afa46619" class="toggle"><li><details open=""><summary>PRtoken.sol</summary><pre id="803a5009-516e-4460-9ba6-51722766ef2c" class="code code-wrap"><code>// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract PRtoken is ERC20 {
    address public registry;
    uint256 private tokenId = 0;

    struct Token {
        uint256 tokenId;
        string tokenKey;
    }

    uint256 public constant INITIAL_SUPPLY = 0;

    mapping(string =&gt; Token) tokens;
    mapping(string =&gt; bool) tokenExist;

    constructor(address _registry) ERC20("PRtoken", "PR") {
        registry = _registry;
        _mint(msg.sender, INITIAL_SUPPLY);
    }

    function mint(
        address _account,
        uint256 value,
        string memory _tokenKey
    ) external {
        require(
            msg.sender == registry,
            "Only the registry can mint new tokens"
        );
        Token memory newToken;
        newToken.tokenId = tokenId;
        newToken.tokenKey = _tokenKey;

        tokens[_tokenKey] = newToken;
        tokenExist[_tokenKey] = true;

        tokenId++;

        _mint(_account, value);
    }

    function usePRtoken(string memory _tokenKey) view external returns (bool) {
        return tokenExist[_tokenKey];
    } 
}</code></pre></details></li></ul></div></article></body>    )
}

export default Code;
