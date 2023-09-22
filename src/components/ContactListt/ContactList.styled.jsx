import styled from '@emotion/styled';

export const ContactListStyled = styled.ul`
    padding-left: 0;
`;

export const ButtonDelete = styled.button`
    border-radius: 4px;
    height: 33px;
    padding: 0 4px;
    background: #c274af;
    color: white;
    font-size: 16px;
`;

export const ContactData = styled.p`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 0;
`;

export const ContactItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    border-radius: 5px;
    background: #c274af;
    box-shadow: 1px 1px 5px #c0c0c0;
    padding: 10px 20px;
    margin-bottom: 15px;
    border: 1px solid #c0c0c0;
`;