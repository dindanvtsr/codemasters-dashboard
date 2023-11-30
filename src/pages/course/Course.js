import {
  Box,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
  Th,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../../components/Pagination';
import { useCourses } from '../../services';
import { FaRegEye } from 'react-icons/fa';
import ModalDetailCourse from '../../components/ModalDetailCourse';

const Course = () => {
  const [searchParams] = useSearchParams();
  const { coursesList } = useCourses();

  const [data, setData] = useState([]);
  const [links, setLinks] = useState([]);

  const [selectedData, setSelectedData] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  useEffect(() => {
    getListCourse(1, searchParams.get('search'));
  }, [searchParams]);

  const getListCourse = async (page, q) => {
    try {
      const res = await coursesList(page, q);
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
            Course Details
          </Text>
        </Flex>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th color="gray.500">Name</Th>
              <Th color="gray.500">Language</Th>
              <Th color="gray.500">Course Duration</Th>
              <Th color="gray.500">Location</Th>
              <Th color="gray.500">Bootcamp Mentor</Th>
              <Th color="gray.500">Mentor Email</Th>
              <Th color="gray.500"></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map(item => {
              return (
                <Tr bgColor="gray.50" key={`payment-item-${item.id}`}>
                  <Td fontSize="14px" color="gray.900">
                    {item.title}
                  </Td>
                  <Td fontSize="14px" color="gray.900">
                    JavaScript
                  </Td>
                  <Td fontSize="14px" color="gray.900">
                    {item.credits} Months
                  </Td>
                  <Td fontSize="14px" color="gray.900">
                    {item.location}
                  </Td>
                  <Td fontSize="14px" color="gray.900">
                    {item.instructor}
                  </Td>
                  <Td fontSize="14px" color="gray.900">
                    {item.instructor}@codemasters.id
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
      <ModalDetailCourse
        refresh={getListCourse}
        data={selectedData}
        isOpen={showDetailModal}
        onClose={handleCloseDetailModal}
      />
      <Pagination links={links} onClick={getListCourse} />
    </Box>
  );
};

export default Course;
