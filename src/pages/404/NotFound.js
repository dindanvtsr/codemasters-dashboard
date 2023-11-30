import { Box, Image } from '@chakra-ui/react';
import useCustomToast from '../../utils/useCustomToast';
import { useToast } from '@chakra-ui/react';
import { useEffect } from 'react';

const NotFound = () => {
  const { showToastError, showToastSuccess } = useCustomToast();
  const onRender = () => {
    showToastError('Pesan Error');
  };

  useEffect(() => {
    setTimeout(() => {
      onRender();
    }, 3000);
  }, []);

  return (
    <div>
      <Box display="flex" justifyContent="center">
        <Image
          src={window.location.origin + '/404.jpg'}
          alt="Not Found"
          maxHeight="500px"
          maxWidth="500px"
        />
      </Box>

      <div className="text">
        <h1 className="title">Looks Like You're Lost!</h1>
        <p>The page you're looking for doesn't exist or has been moved.</p>
      </div>
    </div>
  );
};

export default NotFound;
