import React, { useState } from 'react';

interface minhaProps {
  title: string;
  description: string;
}

function HomeProps(props: minhaProps) {
  return (
    <>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </>
  );
}

function Home(props: minhaProps) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
        <h1>Ao clicar nesse botão você verá um exemplo de props</h1>
      {isClicked ? (
        <div>
          <HomeProps title={props.title} description={props.description} />
        </div>
      ) : (
        <button onClick={() => setIsClicked(true)}>Exemplo de Hooks</button>
      )}
    </div>
  );
}

export default Home;