import typesColor from '../utils/typesColor';

import '../assets/styles/TypeBox.css';

export default function TypeBox({ type }) {
  return (
    <div
      className="type-container"
      style={{ backgroundColor: typesColor[type.name] }}
    >
      <span>{type.name}</span>
    </div>
  );
}
