import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useChildrentyles = makeStyles((theme) => ({
  heading_1: {
    marginTop: '40px',
    lineHeight: '30px',
    fontSize: '32px',
  },
  heading_2: {
    marginTop: '30px',
    lineHeight: '25px',
    fontSize: '28px',
  },
  heading_3: {
    marginTop: '25px',
    lineHeight: '20px',
    fontSize: '20px',
  },
  paragraph: {
    marginTop: '15px',
    lineHeight: '25px',
    minHeight: '25px',
  },
  toggle: {
    '& > .link': {
      marginTop: '10px',
      lineHeight: '25px',
      fontSize: '28px',
      display: 'block',
      textDecoration: 'none',
      color: '#000000',
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

export default function RenderChildren(props) {
  const [collapseData, setCollapseData] = useState({});
  const [collapseState, setCollapseState] = useState({});

  const classes = useChildrentyles();

  const onClick = (event, id) => {
    event.preventDefault();
    if (collapseState[id] === undefined) {
      props.setBackdrop(true);
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
          props.setBackdrop(false);
        });
    }
    if (collapseState[id]) setCollapseState({ ...collapseState, [id]: false });
    else setCollapseState({ ...collapseState, [id]: true });
  };

  const { data } = props;

  return data.map((item, key1) => {
    if (item.type === 'toggle') {
      return (
        <div key={key1} className={classes[item.type]}>
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
              <RenderChildren
                data={collapseData[item.id]}
                setBackdrop={props.setBackdrop}
              />
            </div>
          )}
        </div>
      );
    }
    if (
      ['heading_1', 'heading_2', 'heading_3', 'paragraph'].includes(item.type)
    ) {
      return (
        <div className={classes[item.type]} key={key1}>
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
