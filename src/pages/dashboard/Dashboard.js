import { SimpleGrid, Card, CardHeader, CardFooter } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import './Dashboard.css';
import { FiUser, FiDollarSign } from 'react-icons/fi';
import { RiBook2Line } from 'react-icons/ri';
import { FiUsers } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { useDashboard } from '../../services';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { statisticsList } = useDashboard();
  const [data, setData] = useState([]);

  useEffect(() => {
    getStatistics();
  }, []);

  const getStatistics = async body => {
    try {
      const res = await statisticsList();
      setData(res);
      console.log(res);
    } catch (e) {}
  };

  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(295px, 100px))"
    >
      <Link to="/admin/students">
        <Card bg="blue.50">
          <CardHeader>
            <FiUsers size={40} color="#2E90FA" />
            <Text className="bodyText bodyText1">Students</Text>
          </CardHeader>
          <CardFooter>
            <Text className="footer" ml="auto">
              {data?.students}
            </Text>
          </CardFooter>
        </Card>
      </Link>
      <Link to="/admin/course">
        <Card bg="pink.50">
          <CardHeader>
            <RiBook2Line size={40} color="#EE46BC" />
            <Text className="bodyText bodyText2">Course</Text>
          </CardHeader>
          <CardFooter>
            <Text className="footer" ml="auto">
              {data?.courses}
            </Text>
          </CardFooter>
        </Card>
      </Link>
      <Link to="/admin/payment">
        <Card bg="yellow.50">
          <CardHeader>
            <FiDollarSign size={40} color="#F79009" />
            <Text className="bodyText bodyText3">Payments</Text>
          </CardHeader>
          <CardFooter>
            <Text className="footer" ml="auto">
              <a className="INR">INR </a>
              {data?.payments}
            </Text>
          </CardFooter>
        </Card>
      </Link>
      <Link to="/admin/users">
        <Card bg="linear-gradient(to right, #F94449 37.55%, #A62D31 184.78%)">
          <CardHeader>
            <FiUser size={40} color="#fff" />
            <Text className="bodyText bodyText4">Users</Text>
          </CardHeader>
          <CardFooter>
            <Text className="footer footer1" ml="auto">
              {data?.users}
            </Text>
          </CardFooter>
        </Card>
      </Link>
    </SimpleGrid>
  );
};

export default Dashboard;
