import { Text, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Modal from '../components/Modal';
import dayjs from 'dayjs';

const ModalDetailPayment = ({ data, onClose, isOpen, refresh }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={'Payment Detail'}
      isButtonLoading={isLoading}
      showFooter={false}
      withCloseIcon
    >
      <Flex justifyContent="space-between" marginY="12px">
        <Text style={{ fontSize: '14px', color: '#667085' }}>Name</Text>
        <Text style={{ fontSize: '14px', color: '#101828' }}>
          {data?.student.name}
        </Text>
      </Flex>
      <Flex justifyContent="space-between" marginY="12px">
        <Text style={{ fontSize: '14px', color: '#667085' }}>
          Payment Schedule
        </Text>
        <Text style={{ fontSize: '14px', color: '#101828' }}>
          {data?.schedule}
        </Text>
      </Flex>
      <Flex justifyContent="space-between" marginY="12px">
        <Text style={{ fontSize: '14px', color: '#667085' }}>Bill Number</Text>
        <Text style={{ fontSize: '14px', color: '#101828' }}>
          {data?.number}
        </Text>
      </Flex>
      <Flex justifyContent="space-between" marginY="12px">
        <Text style={{ fontSize: '14px', color: '#667085' }}>Amount Paid</Text>
        <Text style={{ fontSize: '14px', color: '#101828' }}>
          INR {data?.amount}
        </Text>
      </Flex>
      <Flex justifyContent="space-between" marginY="12px">
        <Text style={{ fontSize: '14px', color: '#667085' }}>
          Balance Amount
        </Text>
        <Text style={{ fontSize: '14px', color: '#101828' }}>
          INR {data?.balance}
        </Text>
      </Flex>
      <Flex justifyContent="space-between" marginY="12px">
        <Text style={{ fontSize: '14px', color: '#667085' }}>
          Date of Admission
        </Text>
        <Text style={{ fontSize: '14px', color: '#101828' }}>
          {dayjs(data?.student.admissionDate).format('DD-MM, YYYY')}
        </Text>
      </Flex>
    </Modal>
  );
};

export default ModalDetailPayment;
