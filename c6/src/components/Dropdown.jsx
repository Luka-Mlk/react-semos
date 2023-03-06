export const Dropdown = ({ options, onChange }) => {
  return (
    <div>
      <select className="select--" onChange={onChange}>
        {options.map((option, i) => {
          return (
            <option value={option} key={i}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};
