import '../styles/app.scss';
import ContainerFeature from './components/Container';

console.log('Starting kmacoders dev !!!')

const root = document.getElementById('root');

const container = new ContainerFeature();

root.innerHTML = container.containerFeatureString;