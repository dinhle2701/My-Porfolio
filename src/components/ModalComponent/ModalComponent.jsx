import React from 'react';

const ModalComponent = ({ isModalOpen, onClose }) => {
  if (!isModalOpen) return null; // Nếu không mở modal thì không render

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div
        className="bg-white p-8 rounded-lg w-[400px] relative"
        onClick={(e) => e.stopPropagation()} // Dừng sự kiện click khi click vào trong modal
      >
        <h2 className="text-2xl mb-4">Modal Form</h2>
        <form>
          {/* Form fields */}
          <div className="mb-4">
            <label className="block">Name</label>
            <input
              type="text"
              className="border p-2 w-full rounded-md"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block">Email</label>
            <input
              type="email"
              className="border p-2 w-full rounded-md"
              placeholder="Enter your email"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md w-full">
            Submit
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 text-red-500 hover:text-red-700 absolute top-0 right-0 p-2"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalComponent;
