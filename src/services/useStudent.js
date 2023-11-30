import { services } from '.';

export default () => {
  const studentList = async (page = 1, q) => {
    try {
      const response = await services.get('students', {
        params: {
          page: page,
          search: q,
        },
      });
      return response;
    } catch (e) {
      throw e;
    }
  };

  const addStudent = async body => {
    try {
      const response = await services.post('students', body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response;
    } catch (error) {
      throw error.response?.data?.message;
    }
  };

  const deleteStudent = async id => {
    try {
      const response = await services.delete(`students/${id}`);
      return response;
    } catch (e) {
      throw e;
    }
  };

  const updateStudent = async (id, updatedData) => {
    try {
      const response = await services.put(`students/${id}`, updatedData);
      return response;
    } catch (e) {
      throw e;
    }
  };

  return {
    addStudent,
    studentList,
    deleteStudent,
    updateStudent,
  };
};
