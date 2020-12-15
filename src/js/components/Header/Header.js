import * as Sqrl from 'squirrelly';
import { header } from '../../../views/layout_string/header/header';

class HeaderFeature {
    get headerFeatureString() {
        return Sqrl.render(header, {

        })
    }
}

export default HeaderFeature;