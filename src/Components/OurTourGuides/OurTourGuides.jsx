const OurTourGuides = () => {
  return (
    <div>
      <div className='mx-auto container'>
        <div className='flex justify-evenly my-4'>
          <h2 className='text-3xl'>all users</h2>
          <h2 className='text-3xl'>total users {users.length}</h2>
        </div>
        <div className='overflow-x-auto '>
          <table className='table table-zebra w-full mx-auto '>
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <>
                        <button
                          onClick={() => handleMakeAdmin(user)}
                          className='btn bg-amber-400 '
                        >
                          <FaUsers className='text-white text-lg'></FaUsers>
                        </button>
                      </>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteUser(user)}
                      className='btn btn-ghost'
                    >
                      <FaTrash className='text-red-600 text-lg'></FaTrash>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OurTourGuides;
