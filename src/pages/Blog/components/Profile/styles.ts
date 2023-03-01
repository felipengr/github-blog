import styled from 'styled-components';

export const ProfileContainer = styled.section`
    width: 100%;
    min-height: 13.25rem;
    margin-top: -5.5rem;
    background: ${({theme}) => theme.colors['base-profile']};
    box-shadow: 0 2px 28px rgba(0,0,0,0.2);
    padding: 2rem 2.5rem;
    display: flex;
    gap: 2rem;

    @media(max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const ProfilePicture = styled.img`
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
    object-fit: cover;
`

export const ProfileDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.5rem;

        h1 {
            font-size: ${({theme}) => theme.textSizes['title-title-l']};
            color: ${({theme}) => theme.colors['base-title']};
            line-height: 130%;
        }
    }

    ul {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            flex-wrap: wrap;
            margin-top: auto;

            @media(max-width: 768px) {
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                gap: 0.75rem;
                margin-top: 1rem;
            }

            li {
                display: flex;
                align-items: center;
                gap: 0.5rem;

                svg {
                   width: 1.25rem;
                   height: 1.125rem;
                   color: ${({theme}) => theme.colors['base-label']};   
                }
            }
        }
`