import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentProps, ReactNode } from "react";
import { ExternalLinkContainer } from "./styles";

type ExternalLinksProps = ComponentProps<typeof ExternalLinkContainer> & {
    text: string
    icon?: ReactNode
    variant?: "iconLeft"
}

export function ExternalLink({
    text,
    icon,
    ...rest
}: ExternalLinksProps) {
    return (
        <ExternalLinkContainer {...rest}>
            {text}
            {icon ??  <FontAwesomeIcon icon={faUpRightFromSquare} />}
        </ExternalLinkContainer>
    )
}