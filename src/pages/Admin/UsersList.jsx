import React, { useEffect, useState, startTransition } from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Table } from "react-bootstrap";
import { AiOutlineRight } from "react-icons/ai"
import AppLayout from '../../components/Layout/AppLayout'
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const UsersList = () => {
  const navigate = useNavigate();

  const handleClick = (event, name, cnic ) => {
    event.preventDefault();
    startTransition(() => {
      navigate(`/applicant-details?name=${name}&cnic=${cnic}`);
    });
  };

  const [formDataArray, setFormDataArray] = useState([]);

  useEffect(() => {
    const existingFormData = JSON.parse(localStorage.getItem("formData")) || [];
  
    const updatedFormDataArray = existingFormData.map((data) => ({
      ...data["0"],
      id: uuidv4(),
    }));
    setFormDataArray(updatedFormDataArray);
  }, []);


  return (
    <AppLayout isLoggedIn={true}>
      <Container fluid className="px-sm-5 px-3">
        <div className='d-flex justify-content-end mt-sm-5 mt-4 mb-3 mx-sm-0 mx-4 mobileText_align'>
          <Link className='' to="">Welcome Deputy Commissioner, Bahawalpur<AiOutlineRight /></Link>
        </div>

        {formDataArray.length > 0 ? (
          <div className='my-5'>
            <Table responsive striped bordered className='userList'>
              <thead className='bg_primary text-white'>
                <tr>
                  <th className='text-center'>Sr. No.</th>
                  <th>Name</th>
                  <th>Father Name</th>
                  <th>Phone Number</th>
                  <th>CNIC</th>
                </tr>
              </thead>
              <tbody>
                {formDataArray.map((data, index) => (
                  <tr key={data.id}>
                    <td className='text-center'>{index + 1}</td>
                    <td>
                      <Link 
                      onClick={(event) => handleClick(event, data.name, data.cnic)} 
                      className='text-decoration-none'>
                        {data.name}
                      </Link>
                    </td>
                    <td>{data.fatherName}</td>
                    <td>{data.phoneNumber}</td>
                    <td>{data.cnic}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <div className='fs-2 fw-semibold text-center'>No data to display</div>
        )}
      </Container>
    </AppLayout>
  )
}

export default UsersList;
