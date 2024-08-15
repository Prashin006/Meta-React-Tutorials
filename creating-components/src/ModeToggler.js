function ModeToggler(props) {
  let darkModeOn = true;
  const darkMode = <h1>I am darkMode</h1>;
  const lightMode = <h1>I am lightMode</h1>;

  const handleClick = () => {
    darkModeOn = !darkModeOn;
    if (darkModeOn === true) {
      alert('Dark Mode is on');
    } else {
      alert('Light Mode is on');
    }
  };
  return (
    <>
      <div>{darkModeOn ? darkMode : lightMode}</div>
      <button
        type="button"
        onClick={handleClick}
        style={{ color: 'lightblue', cursor: 'pointer' }}
      >
        Click Me
      </button>
    </>
  );
}

export default ModeToggler;
