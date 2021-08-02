import React from 'react';
import { ImageLinkForm, InputWrapper} from './image-link-form.style';

const ImageLink = () => {
    return (
        <ImageLinkForm>
            <p>{'This magic Brain will detect Faces in your pictures Give it a try..'}</p>
            <InputWrapper>
                <input type="text" />
                <button>Detect</button>
            </InputWrapper>
        </ImageLinkForm>
    );
}

export default ImageLink;