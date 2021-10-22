import styled from 'styled-components';

import { COLORS } from './constants';

const SIZES = {
  small: {
    '--borderRadius': 2 + 'px',
    '--fontSize': 16 / 16 + 'rem',
    '--padding': '4px 12px'
  },
  medium: {
    '--borderRadius': 2 + 'px',
    '--fontSize': 18 / 16 + 'rem',
    '--padding': '12px 20px'
  },
  large: {
    '--borderRadius': 2 + 'px',
    '--fontSize': 20 / 16 + 'rem',
    '--padding': '16px 32px'
  }
};

const Button = ({
  variant,
  size,
  children
}: {
  variant: 'fill' | 'outline' | 'ghost';
  size: 'small' | 'medium' | 'large';
  children: any;
}) => {
  const styles = SIZES[size];
  let Component;

  variant === 'fill'
    ? (Component = FillButton)
    : variant === 'outline'
    ? (Component = OutlineButton)
    : (Component = GhostButton);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  return <Component style={styles}>{children}</Component>;
};

const ButtonBase = styled.button`
  font-size: var(--fontSize);
  font-family: 'Roboto', sans-serif;
  padding: var(--padding);
  border-radius: var(--borderRadius);
  border: 2px solid transparent;

  &:focus {
    outline-color: ${COLORS.primary};
    outline-offset: 4px;
  }
`;

const FillButton = styled(ButtonBase)`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};

  &:hover {
    background-color: ${COLORS.primaryLight};
  }
`;

const OutlineButton = styled(ButtonBase)`
  background-color: ${COLORS.white};
  color: ${COLORS.primary};
  border: 2px solid currentColor;

  &:hover {
    background-color: ${COLORS.offwhite};
  }
`;

const GhostButton = styled(ButtonBase)`
  color: ${COLORS.gray};
  background-color: transparent;
  outline-color: ${COLORS.gray};

  &:hover {
    background: ${COLORS.transparentGray15};
    color: ${COLORS.black};
  }
`;

export default Button;
