import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Types from './modules/Types';
import type { PKMN_TYPE } from './modules/types/core';

console.log(Types);

interface TypeBadgeProps {
  type: PKMN_TYPE;
}

const TypeBadge = ({ type }) => <div className="type-badge">{type.name}</div>;

function App() {
  return (
    <div>
      <p>Pokemon Types:</p>
      <ul>
        {Object.entries(Types).map(([typeRef, type]) => {
          return (
            <li key={type.index}>
              Type: {type.name} /{' '}
              <span
                style={{
                  color: 'white',
                  background: type.color,
                  padding: 4,
                  borderRadius: 4,
                  fontSize: 12,
                  fontWeight: 700,
                  fontFamily: 'nixa, monospace',
                }}
              >
                {typeRef}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

render(<App />, document.getElementById('root'));
