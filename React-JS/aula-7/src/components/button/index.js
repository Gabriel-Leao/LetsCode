import PropTypes from 'prop-types';
import { StyledButton } from "./styles";

export default function Button({children, icon, onClick, selected}) {
    return (
        <>
            <StyledButton onClick={onClick} selected={selected}>
                {icon}
                {children}
            </StyledButton>
        </>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.element
}