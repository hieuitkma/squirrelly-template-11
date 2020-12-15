import * as Sqrl from 'squirrelly';
import { container } from '../../views/container';
import ContentFeatureBottom from './Contents/ContentBottom';
import ContentFeatureTop from './Contents/ContentTop';
import HeaderFeature from './Header/Header';

class ContainerFeature {
    constructor() {
        this.header = new HeaderFeature();
        this.contentTop = new ContentFeatureTop()
        this.contentBottom = new ContentFeatureBottom();
    }

    get containerFeatureString() {
        return Sqrl.render(container, {
            header: this.header.headerFeatureString,
            contentTop: this.contentTop.contentFeatureString,
            contentBottom: this.contentBottom.contentFeatureBottomString
        })
    }
}

export default ContainerFeature;