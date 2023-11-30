import {
  Box,
  Flex,
  IconButton,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  theme,
  Thead,
  Tr,
  Th,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import dayjs from 'dayjs';
import Pagination from '../../components/Pagination';
import { usePayment } from '../../services';
import { FaRegEye } from 'react-icons/fa';
import ModalDetailPayment from '../../components/ModalDetailPayment';

const Payment = () => {
  const [searchParams] = useSearchParams();
  const { paymentList } = usePayment();

  const [data, setData] = useState([]);
  const [links, setLinks] = useState([]);

  const [selectedData, setSelectedData] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  useEffect(() => {
    getListData(1, searchParams.get('search'));
  }, [searchParams]);

  const getListData = async (page, q) => {
    try {
      const res = await paymentList(page, q);
      setData(res?.data);
      console.log(res?.data);
      setLinks(res?.links);
    } catch (e) {}
  };

  const handleOpenDetailModal = item => {
    setSelectedData(item);
    setShowDetailModal(true);
  };

  const handleCloseDetailModal = item => {
    setSelectedData(null);
    setShowDetailModal(false);
  };

  return (
    <Box>
      <TableContainer>
        <Flex justifyContent="space-between">
          <Text color="gray.900" fontSize="24px" mb="24px">
            Payment Details
          </Text>
        </Flex>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th color="gray.500">Name</Th>
              <Th color="gray.500">Payment Schedule</Th>
              <Th color="gray.500">Bill Number</Th>
              <Th color="gray.500">Amount Paid</Th>
              <Th color="gray.500">Balance Amount</Th>
              <Th color="gray.500">Date of Admission</Th>
              <Th color="gray.500"></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map(item => {
              return (
                <Tr bgColor="gray.50" key={`payment-item-${item.id}`}>
                  <Td fontSize="14px" color="gray.900">
                    {item.student.name}
                  </Td>
                  <Td fontSize="14px" color="gray.900">
                    {item.schedule}
                  </Td>
                  <Td fontSize="14px" color="gray.900">
                    {item.number}
                  </Td>
                  <Td fontSize="14px" color="gray.900">
                    INR {item.amount}
                  </Td>
                  <Td fontSize="14px" color="gray.900">
                    INR {item.balance}
                  </Td>
                  <Td fontSize="14px" color="gray.900">
                    {dayjs(item.student.admissionDate).format('DD-MM, YYYY')}
                  </Td>
                  <Td>
                    <FaRegEye
                      onClick={() => handleOpenDetailModal(item)}
                      style={{ cursor: 'pointer' }}
                    />
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <ModalDetailPayment
        refresh={getListData}
        data={selectedData}
        isOpen={showDetailModal}
        onClose={handleCloseDetailModal}
      />
      <Pagination links={links} onClick={getListData} />
    </Box>
  );
};

export default Payment;
