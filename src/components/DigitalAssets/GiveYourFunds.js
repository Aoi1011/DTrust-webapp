import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import './GiveYourFunds.css'
import vector from '../../img/Vector.svg'

function GiveYourFunds(props) {
  const lists = props.location.state.list
  const [inputList, setInputList] = useState(lists)

  const handleSubmit = (e) => {
    e.preventDefault()
    const list = inputList.filter((i) => i.text.trim() && i.amount.trim())
    if (list.length) {
      return console.log(inputList)
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
  const hideItem = (i) => {
    if (i === 0) {
      return 'open'
    } else {
      return
    }
  }
  return (
    <form className="form_container">
      <h2 className="form-container_title">
        When will the dtrust distribute each digital asset?
      </h2>
      {inputList.map((x, i) => {
        return (
          <details className="box give-yourFunds" open>
            <summary className="arrow_container">
              <p className="form-container_label">Digital asset {i + 1}</p>
              <img className="arrow_img" src={vector} />
            </summary>
            <div className="form-container_inputs selectParent">
              <select
                className="form-container_input_item form-control"
                name="text"
                placeholder=""
                value={x.text}
                required
                onChange={(e) => handleInputChange(e, i)}
              >
                <option>{'Digital asset'}</option>
                <option>1</option>
                <option>2</option>
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
            <div className="give_funds-block selectParent">
              <select
                className="form-container_input_item give_funds-select"
                name="select"
                placeholder="Choose wallet"
                value={x.select}
                required
                onChange={(e) => handleInputChange(e, i)}
              >
                <option>{'Choose wallet'}</option>
                <option>1</option>
                <option>2</option>
              </select>
              <div>
                <p className="give-founds-title">Start date *</p>
                <input
                  className="form-container_input_item"
                  type="date"
                  name="dateStart"
                  placeholder="text"
                  value={x.dateStart}
                  required
                  onChange={(e) => handleInputChange(e, i)}
                />
              </div>
              <div>
                <p className="give-founds-title">End date</p>
                <input
                  className="form-container_input_item"
                  name="dateEnd"
                  type="date"
                  placeholder="__/__/___"
                  value={x.dateEnd}
                  required
                  onChange={(e) => handleInputChange(e, i)}
                />
              </div>
            </div>
            <div className="Frequency selectParent">
              <p className="give-founds-title">Frequency</p>
              <select
                className="form-container_input_item Frequency-block"
                name="frequancy"
                placeholder="Enter First Name"
                value={x.frequancy}
                required
                onChange={(e) => handleInputChange(e, i)}
              >
                <option>{'One time payment'}</option>
                <option>1</option>
                <option>2</option>
              </select>
            </div>
          </details>
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

export default withRouter(GiveYourFunds)
