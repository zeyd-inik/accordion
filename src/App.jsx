import { useState } from 'react';
import data from '../data';

export default function App() {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (id) => {
    setSelected(id === selected ? null : id);
  };

  return (
    <div className="app">
      {/* <button></button> */}
      {data && data.length > 0 ? (
        data.map((dataItem) => {
          const { id, question, answer } = dataItem;
          return (
            <div key={id} className="menu-item">
              <div
                onClick={() => {
                  handleSingleSelection(id);
                }}
                className="top"
              >
                <h3 className="question">{question}</h3>
                <span className="icon">+</span>
              </div>
              {selected === id && <div className="answer">{answer}</div>}
            </div>
          );
        })
      ) : (
        <div>no data found</div>
      )}
    </div>
  );
}
