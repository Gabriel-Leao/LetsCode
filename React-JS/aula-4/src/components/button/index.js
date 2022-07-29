import PropTypes from 'prop-types';
import { StyledButton } from "./styles";

export default function Button({children, icon, onClick}) {
    <>
        <StyledButton onClick={onClick}>
            {icon}
            {children}
        </StyledButton>
    </>
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.element
}