'use strict';

const e = React.createElement;

class BackButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return e(
      'button',
      { onClick: () => window.open("https://kyle0936.github.io/hcde533/") },
      '< Back'
    );
  }
}

const domContainer = document.querySelector('#back_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(BackButton));