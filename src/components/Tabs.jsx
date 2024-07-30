export default function Tabs({ Children, buttons, ButtonsContainer = 'menu' }) {
  // const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {Children}
    </>
  );
}
