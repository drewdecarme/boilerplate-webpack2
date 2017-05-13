if (module.hot) {
  module.hot.accept()
}

import './style.scss';

const root = document.querySelector('#root')
root.innerHTML = `<p>Hello henry.</p>`