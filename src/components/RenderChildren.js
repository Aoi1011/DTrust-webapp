import React, { useState } from 'react';
import axios from 'axios';

export default function RenderChildren(props) {
  const [collapseData, setCollapseData] = useState({});
  const [collapseState, setCollapseState] = useState({});

  const onClick = (event, id) => {
    // console.log(collapseState)
    event.preventDefault();
    if (collapseState[id] === undefined) {
      axios
        .get('/children/' + id)
        .then(function (response) {
          // handle success
          const temp = response.data.results.map((item) => {
            return { type: item.type, text: item[item.type].text, id: item.id };
          });
          setCollapseData({ ...collapseData, [id]: temp });
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }
    if (collapseState[id]) setCollapseState({ ...collapseState, [id]: false });
    else setCollapseState({ ...collapseState, [id]: true });
  };

  const { data } = props;

  return data.map((item, key1) => {
    if (item.type === 'toggle') {
      return (
        <div key={key1}>
          <a
            href="/"
            onClick={(event) => onClick(event, item.id)}
            className={`link${
              collapseState[item.id] ? ' expand' : ' collpase'
            }`}
          >
            {item.text.map((text, key2) => {
              return (
                <span
                  key={key2}
                  style={{
                    fontWeight: text.annotations.bold ? 'bold' : 'normal',
                  }}
                >
                  {text.plain_text}
                </span>
              );
            })}
          </a>
          {collapseState[item.id] && collapseData[item.id] && (
            <div className="details">
              <RenderChildren data={collapseData[item.id]} />
            </div>
          )}
        </div>
      );
    }
    if (item.type === 'paragraph') {
      return (
        <div className={item.type} key={key1}>
          {item.text.map((text, key2) => {
            return (
              <span
                key={key2}
                style={{
                  fontWeight: text.annotations.bold ? 'bold' : 'normal',
                }}
              >
                {text.plain_text}
              </span>
            );
          })}
        </div>
      );
    }
    return null;
  });
}