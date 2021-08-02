import React from 'react';
import Logotype from '../Logo/logo.component';
import Navigation from '../Navigation/navigation.component';
import Ranking from '../Rank/rank.component';
import ImageLink from '../ImageLinkForm/image-link-form.component';

const Content = () => {
    return (
        <div>
           <Navigation/>
           <Logotype/>
           <Ranking/>
           <ImageLink/>
        </div>
    )
}

export default Content;
