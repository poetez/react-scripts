import * as React from 'react';
import * as logo from './logo.svg';
import * as styles from './App.pcss';

export default class App extends React.Component {
  public render(): React.ReactNode {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo"/>
          <h1 className={styles.title}>Welcome to React</h1>
        </header>
        <p className={styles.logo}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
