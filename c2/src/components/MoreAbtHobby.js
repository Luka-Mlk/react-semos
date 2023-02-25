export const MoreAbtHobby = () => {
  function printInfo() {
    console.log("THIS IS PRINTED ON HOVER");
  }
  function printGoodbye() {
    console.log("GOODBYE :(");
  }
  return (
    <>
      <p>
        I enjoy exercising because it is beneficial for your phisical and mental
        health
      </p>
      <img
        onMouseEnter={printInfo}
        onMouseLeave={printGoodbye}
        onMouseOver={printInfo}
        src="https://media.istockphoto.com/id/1341077450/photo/profile-side-view-of-runner-man-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=DfjSUIn1ba5Slsxd6UrCK8JkHwFz9AMD733rX5d9jnM="
        alt="Person Running"
      ></img>
    </>
  );
};
