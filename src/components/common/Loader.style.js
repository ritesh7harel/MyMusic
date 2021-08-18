import styled, {keyframes} from "styled-components";


const spin = keyframes`
   0% { transform: rotate(0deg); }
   100% { transform: rotate(360deg); }
`

export const LoadingWrapper = styled.div`
  display: block;
  width: 100%;
`;

export const Loading = styled.div`
  margin: 0 auto;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid black;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
`;



