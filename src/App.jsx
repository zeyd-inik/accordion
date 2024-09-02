import { useState } from 'react';
import data from '../data';
import './App.css';

export default function App() {
  const [selected, setSelected] = useState(null);
  const [isMultiSelectionActive, setIsMultiSelectionActive] = useState(false);
  const [multiSelections, setMultiSelections] = useState([]);

  const handleSingleSelection = (id) => {
    setSelected(id === selected ? null : id);
  };
  const handleMultiSelection = (id) => {
    const copyMultiSelections = [...multiSelections];
    const idx = copyMultiSelections.indexOf(id);
    idx === -1
      ? copyMultiSelections.push(id)
      : copyMultiSelections.splice(idx, 1);
    setMultiSelections(copyMultiSelections);
  };

  const toggleSelection = () => {
    setIsMultiSelectionActive(!isMultiSelectionActive);
  };

  return (
    <div className="app">
      <div className="wrapper">
        <button onClick={toggleSelection} className="btn">
          Enable Multi Selection
        </button>
        {data && data.length > 0 ? (
          data.map((dataItem) => {
            const { id, question, answer } = dataItem;
            return (
              <div key={id} className="menu-item">
                <div
                  onClick={() => {
                    isMultiSelectionActive
                      ? handleMultiSelection(id)
                      : handleSingleSelection(id);
                  }}
                  className="top"
                >
                  <h3 className="question">{question}</h3>
                  <span className="icon">+</span>
                </div>
                {isMultiSelectionActive
                  ? multiSelections.map(
                      (item) =>
                        item === id && <div className="answer">{answer}</div>
                    )
                  : selected === id && <div className="answer">{answer}</div>}
              </div>
            );
          })
        ) : (
          <div>no data found</div>
        )}
      </div>
    </div>
  );
}
