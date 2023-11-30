import { Button as CButton } from '@chakra-ui/react';

const Button = ({
  text,
  bgColor = '#F94449',
  onClick,
  isBggradient,
  variant = 'solid',
  textColor = 'white',
  isLoading,
}) => {
  return (
    <CButton
      _hover={{ bg: bgColor }}
      isLoading={isLoading}
      bgGradient={
        isBggradient ? 'linear(to-r, #F94449 37.55%, #A62D31 184.78%)' : ''
      }
      variant={variant}
      onClick={onClick}
      size="md"
      backgroundColor={bgColor}
      color={textColor}
    >
      {text}
    </CButton>
  );
};

export default Button;
