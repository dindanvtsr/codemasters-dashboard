import { Box, Image } from '@chakra-ui/react';
import useCustomToast from '../utils/useCustomToast';
import { useToast } from '@chakra-ui/react';
import { useEffect } from 'react';
import './UnderConstruction.css';

const UnderConstruction = () => {
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
          src={window.location.origin + '/under_construction.png'}
          alt="Under Maintenance"
          maxHeight="500px"
          maxWidth="500px"
        />
      </Box>

      <div className="text">
        <h1 className="title">Under Maintenance</h1>
        <p>
          The page you're looking for is currently under maintenance and will be
          back soon.
        </p>
      </div>
    </div>
  );
};

export default UnderConstruction;
