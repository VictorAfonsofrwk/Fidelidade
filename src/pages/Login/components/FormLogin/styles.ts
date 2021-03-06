import styled from "styled-components";

export const CustomForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
      form {
        width: 90%;
        margin: 0 auto;
      }

      button {
        align-self: center;
      }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.primary};
  font-size: 1.5rem;
`;

export const LoginButton = styled.button`
  width: 50%;
  text-align: center;
  align-self: flex-end;
  background-color: ${({ theme }) => theme.primary};
  border: 0;
  color: #fff;
  padding: 0.5em 0.2em;
  font-weight: 600;
  border-radius: 5px;
`;
