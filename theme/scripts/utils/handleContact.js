import DOMAIN from '../../constants/contact.yml'

export default (name, key) => {
  if (DOMAIN[name]) {
    return DOMAIN[name][key];
  }
}
