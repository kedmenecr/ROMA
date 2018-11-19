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
	}
	
  public changeMark1: any = () => {
    this.setState({
      theme: 'markdearman1',
    });
  }
  public render() {
    return (
      <div className={this.state.theme}>
        <header>
          <h1 className="App-title">Welcome to ROMA</h1>
        </header>

        <button className="inherited" onClick={this.changeMark}>Dean</button>
        <button className="inherited" onClick={this.changeMark1}>Dean</button>
      </div>
    );
  }
}

export default App;
