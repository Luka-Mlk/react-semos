import PropTypes from "prop-types";
export function Student({ props, semester }) {
  console.log(props);
  return (
    <div>
      <table>
        {props.map((prop, i) => {
          return (
            <tr key={i}>
              <td>{prop.name}</td>
              <td>{prop.lastName}</td>
              <td>{prop.index}</td>
            </tr>
          );
        })}
      </table>
      <p>{semester}</p>
    </div>
  );
}

Student.propTypes = {
  props: PropTypes.arrayOf(PropTypes.object).isRequired,
  semester: PropTypes.string,
};

Student.defaultProps = {
  semester: "Zimski",
};
