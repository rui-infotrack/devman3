import globalStyles from 'app/global.scss';

export default (...args) => args.map(x => globalStyles[x]).join(' ');
