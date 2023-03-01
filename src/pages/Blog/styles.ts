import styled from "styled-components";

export const PostsListContainer = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
    gap: 2rem;
    margin-bottom: 14rem;

    @media(max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
        margin-bottom: 4rem;
    }
`