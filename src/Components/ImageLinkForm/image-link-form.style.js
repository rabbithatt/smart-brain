import styled from 'styled-components';


export const ImageLinkForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const InputWrapper = styled.div`
width:60%;
height: 5rem;
display: flex;
align-items: center;
justify-content: center;
background:
radial-gradient(circle farthest-side at 0% 50%,#fb1 23.5%,rgba(240,166,17,0) 0)21px 30px,
radial-gradient(circle farthest-side at 0% 50%,#B71 24%,rgba(240,166,17,0) 0)19px 30px,
linear-gradient(#fb1 14%,rgba(240,166,17,0) 0, rgba(240,166,17,0) 85%,#fb1 0)0 0,
linear-gradient(150deg,#fb1 24%,#B71 0,#B71 26%,rgba(240,166,17,0) 0,rgba(240,166,17,0) 74%,#B71 0,#B71 76%,#fb1 0)0 0,
linear-gradient(30deg,#fb1 24%,#B71 0,#B71 26%,rgba(240,166,17,0) 0,rgba(240,166,17,0) 74%,#B71 0,#B71 76%,#fb1 0)0 0,
linear-gradient(90deg,#B71 2%,#fb1 0,#fb1 98%,#B71 0%)0 0 #fb1;
background-size: 40px 60px;

input {
    width:50%;
    height: 3rem;
    border-radius: 25px 0 0 25px;
    border: none;
}

input:focus {
    outline: none;
    border: solid 2px grey;
}
button {
    border: none;
    display: inline-block;
    width:10%;
    height: 3rem;
    border-radius: 0 25px 25px 0;
    background-color: #04C8DE;
    color: white;
}
`


