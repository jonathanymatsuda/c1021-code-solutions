import React from 'react';

const menuItems = [
  { navItem: 'About' },
  { navItem: 'Get Started' },
  { navItem: 'Sign In' }
];

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    const overlay = this.state.isClicked ? 'overlay' : '';
    const unhideMenu = this.state.isClicked ? '' : 'hidden';
    const menu = menuItems.map(item =>
      <li key={item.navItem}> {item.navItem}</li>
    );
    return (
      <div className="menu-column">
        <i className="fas fa-bars fa-2x" onClick={this.handleClick}></i>
        <div className={overlay} onClick={this.handleClick}>
          <nav className={unhideMenu} onClick={this.handleClick}>
            <h2>Menu</h2>
            <ul>{menu}</ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default AppDrawer;
