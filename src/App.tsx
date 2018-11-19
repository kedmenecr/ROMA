import * as React from 'react';
import './App.css';

class App extends React.Component {
  public state = {
    theme: '',
  };

  public changeMark: any = () => {
    this.setState({
      theme: 'markdearman',
    });
  };
  public render() {
    return (
      <div className={this.state.theme !== '' ? 'markdearman' : 'App-Header'}>
        <header>
          <h1 className="App-title">Welcome to ROMA</h1>
        </header>

        <button onClick={this.changeMark}>Dean</button>
      </div>
    );
  }
}

export default App;
