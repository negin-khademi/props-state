import { CORE_CONCEPTS } from './data';
import CoreConcept from './components/CoreConcept';
import { EXAMPLES } from './data';
import Header from './components/Header/Header';
import TabButton from './components/TabButton';
import { useState } from 'react';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }

  let tabContent = <p>Please select a button</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleClick('components')}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleClick('jsx')}>
              JSX
            </TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleClick('props')}>
              Props
            </TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleClick('state')}>
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </>
  );
}

export default App;
