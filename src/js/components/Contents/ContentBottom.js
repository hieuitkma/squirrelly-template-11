import * as Sqrl from 'squirrelly';
import { contentBottom } from '../../../views/layout_string/contents/contentBottom';

class ContentFeatureBottom {
    get contentFeatureBottomString() {
        return Sqrl.render(contentBottom, {

        })
    }
}

export default ContentFeatureBottom;