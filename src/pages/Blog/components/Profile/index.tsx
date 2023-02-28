import { ExternalLink } from "../../../../components/ExternalLink";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";

export function Profile() {
    return (
        <ProfileContainer>
            <ProfilePicture src="https://github.com/felipengr.png" />
            <ProfileDetails>
                <header>
                    <h1>Felipe Nogueira</h1>
                    <ExternalLink
                        text="github"
                        href="https://github.com/felipengr"
                    />
                </header>
                <p>
                    Tristique volutpat pulvinar vel massa, pellentesque egestas. 
                    Eu viverra massa quam dignissim aenean malesuada suscipit. 
                    Nunc, volutpat pulvinar vel mass.
                </p>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faGithub} />
                        felipengr
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faBuilding} />
                        Piracaia
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faUserGroup} />
                        13M seguidores
                    </li>
                </ul>
            </ProfileDetails>
        </ProfileContainer>
    )
}