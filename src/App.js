import './App.js';
import Particles from 'react-particles-js';
import GlobalStyle from './Styles/globalStyle';
import Content  from './Components/Content/content.component';


const Application = () => {
  return (
    <>
     <GlobalStyle/>
      <Particles 
        className='particles'
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 200
              }
            }
          }
        }}
      />
     
      <Content/>
      {/* 
      <Logo/>
      <ImageLinkForm/>
      <FaceRecognization/> */}
    </>
  );
}

export default Application;
