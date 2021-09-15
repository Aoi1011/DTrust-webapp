import React, { useState } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import './AddYourFunds.css'

function AddYourFunds() {
  const [inputList, setInputList] = useState([
    {
      text: '',
      amount: '',
      select: '',
      dateStart: '',
      dateEnd: '',
      frequancy: '',
      token: false,
    },
  ])
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    const list = inputList.filter((i) => i.text.trim() && i.amount.trim())
    console.log(inputList)
    if (list.length) {
      return history.push({
        pathname: '/giveyourfunds',
        state: { list: inputList },
      })
    } else {
      return
    }
  }

  const handleInputChange = (e, index) => {
    if (e.target.value === 'NTF token') {
      inputList[index].token = true
      setInputList([...inputList])
    } else {
      inputList[index].token = false
      setInputList([...inputList])
    }
    const { name, value } = e.target
    const list = [...inputList]
    list[index][name] = value
    setInputList(list)
  }

  const handleAddClick = () => {
    setInputList([...inputList, { text: '', amount: '' }])
  }

  return (
    <form className="form_container">
      <h2 className="form-container_title">
        What digital assets will go into the dtrust?
      </h2>
      {inputList.map((x, i) => {
        return (
          <div className="box">
            <p className="form-container_label">Digital asset {i + 1}</p>
            <div className="form-container_inputs selectParent">
              <select
                className="form-container_input_item"
                name="text"
                placeholder="Enter First Name"
                value={x.text}
                required
                onChange={(e) => handleInputChange(e, i)}
              >
                <option>{'Digital asset'}</option>
                <option>ETH</option>
                <option>USDT</option>
                <option>wBTC</option>
                <option>wXMR</option>
                <option>USDC</option>
                <option>DAI</option>
                <option>UNI</option>
                <option>SUSHI</option>
                <option>renDOGE</option>
                <option>ENJ</option>
                <option>SAND</option>
                <option>ANT</option>
                <option>CLV</option>
                <option>NWC</option>
                <option>CHR</option>
                <option>LIT</option>
                <option>CFG</option>
                <option>DVI</option>
                <option>NTF token</option>
              </select>
              <input
                className="form-container_input_item"
                name="amount"
                placeholder="Amount"
                value={x.amount}
                required
                onChange={(e) => handleInputChange(e, i)}
              />
            </div>
            {x.token && (
              <p className={x.token ? 'active_ntf' : 'ntf-blcok'}>
                <input
                className="form-container_input_item"
                name="nft_unique_ID_code"
                placeholder="NFT Unique Identification Code"
                value={x.amount}
                required
                onChange={(e) => handleInputChange(e, i)}
              </p>
            <div className="btn-box form-container_add">
              {inputList.length - 1 === i && (
                <button
                  className="form-container_add_btn"
                  onClick={handleAddClick}
                >
                  Add new
                </button>
              )}
            </div>
          </div>
        )
      })}
      <div className="save_block">
        <button className="save_block_btn" onClick={handleSubmit} type="submit">
          Save
        </button>
      </div>
    </form>
  )
}

export default AddYourFunds
