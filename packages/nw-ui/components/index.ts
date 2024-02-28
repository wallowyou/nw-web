import { makeInstaller } from '@nw-web/utils';
import installs from './installs';

export * from './components';

export default makeInstaller([...installs]);
