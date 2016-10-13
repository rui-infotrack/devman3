import log from 'features/log';

const sagas = [].concat(log.sagas);

export default function* root() {
  yield sagas;
}
