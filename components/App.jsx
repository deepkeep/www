
var React = require('react');
var classnames = require('classnames');

var P = 'app'; // style class name prefix

class App extends React.Component {
  login(e) {
    e.preventDefault();
    var lock = new Auth0Lock(this.props.auth0ClientID, this.props.auth0Domain);

    lock.show({
        callbackURL: 'http://' + this.props.host + '/auth/callback',
        responseType: 'code',
        authParams: {
          scope: 'openid profile'
        },
        usernameStyle: 'username'
    });
  }
  logout(e) {
    e.preventDefault();
    var lock = new Auth0Lock(this.props.auth0ClientID, this.props.auth0Domain);
    lock.logout({ returnTo: 'http://' + this.props.host + '/' });
  }
  render() {
    var profileSection = null;
    if (this.props.profileName) {
      profileSection = <div>
        <a href={this.props.profileLink}>{this.props.profileName}</a>
        &nbsp;
        <a href="#" onClick={this.logout.bind(this)} className="muted">Logout</a>
      </div>
    } else {
      profileSection = <div>
        <a href="#" onClick={this.login.bind(this)} className="muted">Login in / Sign up</a>
      </div>
    }
    return (<div>
        <div className={`${P}-header`}>
          <div className="container">
            <a href="/" className={classnames({ logo: true, muted: this.props.logoMuted })}>deep<span className="logo-stack">keep</span></a>
            <div className={`${P}-search`}>
              <i className="fa fa-search"></i>
              <form action='/search' method='GET'>
                <input type="text" placeholder="Search" name="q" autoComplete="off"/>
              </form>
            </div>
            <div className={`${P}-profile`}>
              {profileSection}
            </div>
          </div>
        </div>
        {this.props.children}
      </div>);
  }
}
App.classPrefix = P;
App.styles = `
.${P}-header {
  border-bottom: 1px solid rgba(238, 238, 238, 0.09);
  margin-bottom: 20px;
  padding-bottom: 5px;

  form {
    margin-left: 10px;
    margin-bottom: 0;
    width: 176px;
    display: inline-block;
  }

  .logo {
    margin-right: 25px;
  }

  .${P}-search {
    display: inline-block;
    position: relative;
    width: 200px;
    input {
      width: 100%;
      padding: 0px;
      height: auto;
      font-size: 17px;
      background: transparent;
      border: 0px;
      border-radius: 0px;
      color: #fff;
    }
  }
  .${P}-profile {
    display: inline-block;
    position: absolute;
    bottom: 4px;
    right: 0px;
  }
}
`

module.exports = App;
