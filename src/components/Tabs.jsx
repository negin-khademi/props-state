export default function Tabs({ Children, buttons, ButtonsContainer }) {
  // const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {Children}
    </>
  );
}
