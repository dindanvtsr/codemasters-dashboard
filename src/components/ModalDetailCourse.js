import { Text, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Modal from '../components/Modal';

const ModalDetailCourse = ({ data, onClose, isOpen, refresh }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={'Course Detail'}
      isButtonLoading={isLoading}
      showFooter={false}
      withCloseIcon
    >
      <Flex justifyContent="space-between" marginY="12px">
        <Text style={{ fontSize: '14px', color: '#667085' }}>Name</Text>
        <Text style={{ fontSize: '14px', color: '#101828' }}>
          {data?.title}
        </Text>
      </Flex>
      <Flex justifyContent="space-between" marginY="12px">
        <Text style={{ fontSize: '14px', color: '#667085' }}>
          Programming Language
        </Text>
        <Text style={{ fontSize: '14px', color: '#101828' }}>Javascript</Text>
      </Flex>
      <Flex justifyContent="space-between" marginY="12px">
        <Text style={{ fontSize: '14px', color: '#667085' }}>
          Course Duration
        </Text>
        <Text style={{ fontSize: '14px', color: '#101828' }}>
          {data?.credits} Months
        </Text>
      </Flex>
      <Flex justifyContent="space-between" marginY="12px">
        <Text style={{ fontSize: '14px', color: '#667085' }}>
          Course Location
        </Text>
        <Text style={{ fontSize: '14px', color: '#101828' }}>
          {data?.location}
        </Text>
      </Flex>
      <Flex justifyContent="space-between" marginY="12px">
        <Text style={{ fontSize: '14px', color: '#667085' }}>
          Bootcamp Mentor
        </Text>
        <Text style={{ fontSize: '14px', color: '#101828' }}>
          {data?.instructor}
        </Text>
      </Flex>
      <Flex justifyContent="space-between" marginY="12px">
        <Text style={{ fontSize: '14px', color: '#667085' }}>Mentor Email</Text>
        <Text style={{ fontSize: '14px', color: '#101828' }}>
          {data?.instructor}@codemasters.id
        </Text>
      </Flex>
    </Modal>
  );
};

export default ModalDetailCourse;
