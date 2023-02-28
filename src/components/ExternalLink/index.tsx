import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentProps } from "react";
import { ExternalLinkContainer } from "./styles";

type ExternalLinksProps = ComponentProps<typeof ExternalLinkContainer> & {
    text: string
}

export function ExternalLink({ text, ...rest }: ExternalLinksProps) {
    return (
        <ExternalLinkContainer {...rest}>
            {text}
            <FontAwesomeIcon icon={faUpRightFromSquare} />
        </ExternalLinkContainer>
    )
}