import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>

      <Button> hello </Button>
      <Button size={ButtonSize.Small}>小按钮</Button>
      <Button btnType={ButtonType.Danger}>危险</Button>
      <Button btnType={ButtonType.Primary}> 选中 </Button>
      <Button btnType={ButtonType.Link} href='www:baidu.com'>hello word</Button>
      <Button disabled>Disabled</Button>
    </div>
  );
}

export default App;
