import React from 'react';
import LineIcon from 'react-lineicons';

function Socialicons(props) {
  return (
    <ul
      className={
        props.bordered
          ? 'mi-socialicons mi-socialicons-bordered'
          : 'mi-socialicons'
      }
    >
      <li>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/Indravathimamidi"
        >
          <LineIcon name="github" />
        </a>
      </li>
      <li>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/indravathi-mamidi"
        >
          <LineIcon name="linkedin" />
        </a>
      </li>
    </ul>
  );
}

export default Socialicons;
