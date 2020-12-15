import * as Sqrl from 'squirrelly';
import { contentTop } from '../../../views/layout_string/contents/contentTop';

class ContentFeatureTop {
    get contentFeatureString() {
        return Sqrl.render(contentTop, {
            class: `feature feature--greyy`
        });
    }
}

export default ContentFeatureTop;