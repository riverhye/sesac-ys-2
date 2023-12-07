import useToggle from '../hooks/useToggle';

export default function CustomHookEx() {
  const [isPopUp, togglePopUp] = useToggle(false);

  return (
    <>
      <h3>custom hook 공부</h3>
      {isPopUp && <div>show</div>}
      <button onClick={togglePopUp}>toggle</button>
    </>
  );
}
