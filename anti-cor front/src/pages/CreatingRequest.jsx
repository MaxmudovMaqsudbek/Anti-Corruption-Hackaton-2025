/* eslint-disable react-hooks/exhaustive-deps */

// import { useState } from "react";

// // import { useAddCategoryMutation } from "../../services/adminApi";
// import { toast } from "react-toastify";

// const CreatingRequest = () => {
//   const [name_en, setName_En] = useState('');
//   const [name_ru, setName_Ru] = useState('');
//   const [lot, setLot] = useState('');
//   const [picture, setPicture] = useState(null);
//   const [email, setEmail] = useState('');

// //   const [addCategory, { isLoading }] = useAddCategoryMutation();

 

 

//   const handleAddNewBrand = async (event) => {
//     event.preventDefault();

//     // Check if a picture has been selected
//     if (!picture) {
//       toast.error("Please select an image file.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("name_en", name_en);
//     formData.append("name_ru", name_ru);
//     formData.append("images", picture); // Use 'image' as per the API requirement
//     formData.append("lot", lot);
//     formData.append("email", email);
//     // try {
//     //   const response = await addCategory(formData).unwrap();
//     //   toast.success(response?.message || "Category added successfully!");
//     //   setAddModal(false);
//     //   setName_En('');
//     //   setName_Ru('');
//     //   setPicture(null);
//     //   updateBrands(); // Update the list of brands
//     // } catch (error) {
//     //   console.error("Failed to add category:", error);
//     //   toast.error(error?.data?.message || "Failed to add category.");
//     // }
//   };

//   return (
//     <div className="bg-white rounded text-black w-[30rem] px-8 py-4 m-auto">
//       <div className="flex items-center justify-between px-4">
//         <h1 className="text-2xl font-medium text-purple-950">Create Request</h1>

//       </div>

//       <form
//         onSubmit={handleAddNewBrand}
//         className="flex flex-col gap-8 mt-6 px-4"
//       >
//         <div>
//           <label htmlFor="en">Name</label>
//           <input
//             id="en"
//             name="en"
//             type="text"
//             value={name_en}
//             onChange={(e) => setName_En(e.target.value)}
//             className=" outline-none w-full py-1 px-4 rounded border-solid border-2 border-gray-200 
//                        hover:border-blue-400 hover:shadow-md hover:shadow-blue-300"
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="ru">Company</label>
//           <input
//             id="ru"
//             name="ru"
//             type="text"
//             value={name_ru}
//             onChange={(e) => setName_Ru(e.target.value)}
//             className=" outline-none w-full py-1 px-4 rounded border-solid border-2 border-gray-200 
//                        hover:border-blue-400 hover:shadow-md hover:shadow-blue-300"
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="en">Lot</label>
//           <input
//             id="lot"
//             name="lot"
//             type="text"
//             value={lot}
//             onChange={(e) => setLot(e.target.value)}
//             className=" outline-none w-full py-1 px-4 rounded border-solid border-2 border-gray-200 
//                        hover:border-blue-400 hover:shadow-md hover:shadow-blue-300"
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="ru">Email</label>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className=" outline-none w-full py-1 px-4 rounded border-solid border-2 border-gray-200 
//                        hover:border-blue-400 hover:shadow-md hover:shadow-blue-300"
//             required
//           />
//         </div>

//         <div className="flex flex-col">
//           <label htmlFor="rasm">Image</label>
//           <input
//             id="rasm"
//             name="rasm"
//             type="file"
//             accept="image/png, image/jpeg, image/jpg"
//             onChange={(e) => setPicture(e.target.files[0])}
//             className="mt-2 outline-none rounded border-solid border-2 border-gray-200 
//                        hover:border-blue-400 hover:shadow-md hover:shadow-blue-300"
//             required
//           />
//         </div>

//        <button className="w-full py-1 px-4 rounded border-solid border-2 border-gray-200 text-blue-700">
//          Submit
//        </button>
//       </form>
//     </div>
//   );
// };

// export default CreatingRequest;







// import React, { useState } from 'react';
// import { lotData } from '../shared/data';
// import { useNavigate } from 'react-router-dom';


// const CreatingRequest = () => {
//   const [lotName, setLotName] = useState('');
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     winningBid: '',
//     estimatedCost: '',
//     singleBidder: false,
//     numberOfBidders: '',
//     subcontracted: false,
//     consortium: false,
//     buyerDiversity: '',
//     productDiversity: '',
//     firmSize: '',
//     sectorCode: '',
//   });

//   const handleLotNameChange = (e) => {
//     const name = e.target.value;
//     setLotName(name);

//     if (lotData[name]) {
//       setForm(lotData[name]);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, type, checked, value } = e.target;
//     setForm(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({ lotName, ...form });
//     navigate('/checkingdata')
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-xl space-y-4">
//       <h2 className="text-xl font-bold">Lot Information</h2>
//       <input
//         type="text"
//         name="lotName"
//         value={lotName}
//         onChange={handleLotNameChange}
//         placeholder="Enter Lot Name (e.g., Lot A)"
//         className="input w-full"
//       />

//       {/* The rest of the inputs as before */}
//       <h2 className="text-xl font-bold pt-4">Tender Details</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         <input type="number" name="winningBid" value={form.winningBid} onChange={handleChange} placeholder="Winning Bid" className="input" />
//         <input type="number" name="estimatedCost" value={form.estimatedCost} onChange={handleChange} placeholder="Estimated Cost" className="input" />
//         <label className="flex items-center space-x-2">
//           <input type="checkbox" name="singleBidder" checked={form.singleBidder} onChange={handleChange} />
//           <span>Single Bidder</span>
//         </label>
//         <input type="number" name="numberOfBidders" value={form.numberOfBidders} onChange={handleChange} placeholder="Number of Bidders" className="input" />
//         <label className="flex items-center space-x-2">
//           <input type="checkbox" name="subcontracted" checked={form.subcontracted} onChange={handleChange} />
//           <span>Subcontracted</span>
//         </label>
//         <label className="flex items-center space-x-2">
//           <input type="checkbox" name="consortium" checked={form.consortium} onChange={handleChange} />
//           <span>Consortium Bid</span>
//         </label>
//       </div>

//       <h2 className="text-xl font-bold pt-4">Firm Yearly Pattern</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         <input type="number" name="buyerDiversity" value={form.buyerDiversity} onChange={handleChange} placeholder="Buyer Diversity" className="input" />
//         <input type="number" name="productDiversity" value={form.productDiversity} onChange={handleChange} placeholder="Product Diversity" className="input" />
//       </div>

//       <h2 className="text-xl font-bold pt-4">Controls</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         <input type="number" name="firmSize" value={form.firmSize} onChange={handleChange} placeholder="Firm Size" className="input" />
//         <input type="text" name="sectorCode" value={form.sectorCode} onChange={handleChange} placeholder="Sector Code" className="input" />
//       </div>

//       <button type="submit" className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700">Submit</button>
//     </form>
//   );
// };

// export default CreatingRequest;




import React, { useState, useEffect } from 'react';

export default function CreatingRequest() {
  const [formData, setFormData] = useState({
    starPrize: '',
    finalPrize: '',
    starNumber: '',
    lotId: '',
    participantCount: '2', // Default to 2 participants
    participants: [
      { name: '', cost: '' },
      { name: '', cost: '' }
    ]
  });

  // Handle static field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle participant data changes
  const handleParticipantChange = (index, field, value) => {
    const updatedParticipants = [...formData.participants];
    updatedParticipants[index] = {
      ...updatedParticipants[index],
      [field]: value
    };

    setFormData(prev => ({
      ...prev,
      participants: updatedParticipants
    }));
  };

  // Update participants array when count changes
  useEffect(() => {
    // Convert to number
    const count = parseInt(formData.participantCount, 10) || 0;
    
    let updatedParticipants = [...formData.participants];
    
    // If we need more participants
    if (count > updatedParticipants.length) {
      // Add more participants
      const additionalParticipants = Array(count - updatedParticipants.length)
        .fill()
        .map(() => ({ name: '', cost: '' }));
      
      updatedParticipants = [...updatedParticipants, ...additionalParticipants];
    } 
    // If we need fewer participants
    else if (count < updatedParticipants.length) {
      // Remove excess participants
      updatedParticipants = updatedParticipants.slice(0, count);
    }
    
    setFormData(prev => ({
      ...prev,
      participants: updatedParticipants
    }));
  }, [formData.participantCount]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Form submitted:\n' + JSON.stringify(formData, null, 2));
  };

  // Style for input fields
  const inputStyle = "w-full px-4 py-2 border border-gray-300 bg-white text-black font-medium shadow-inner outline-none hover:border-green-900 focus:ring-2 focus:ring-teal-500 rounded-md transition duration-200 ease-in-out";
  
  // Style for labels/read-only fields
  const labelStyle = "w-full px-4 py-2 bg-white border border-gray-300 text-gray-700";

  return (
    <div className='bg-[#F0FDFA]'>
      <div className="p-6 flex justify-center items-center">
      <div className="w-full max-w-4xl bg-teal-500 p-8 rounded-md shadow-lg">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-xl font-bold text-white bg-teal-600 py-2 px-4 rounded">
            Find the corruption and build up justice
          </h2>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {/* Left Column - Static Fields */}
            <div>
              <input
                type="text"
                name="starPrize"
                value={formData.starPrize}
                onChange={handleChange}
                placeholder="Star prize"
                className={inputStyle}
              />
            </div>
            
            {/* Right Column - Static Fields */}
            <div>
              <input
                type="text"
                name="finalPrize"
                value={formData.finalPrize}
                onChange={handleChange}
                placeholder="Final"
                className={inputStyle}
              />
            </div>
            
            {/* Left Column - More Static Fields */}
            <div>
              <input
                type="text"
                name="starNumber"
                value={formData.starNumber}
                onChange={handleChange}
                placeholder="Star number"
                className={inputStyle}
              />
            </div>
            
            {/* Right Column - More Static Fields */}
            <div>
              <input
                type="text"
                name="lotId"
                value={formData.lotId}
                onChange={handleChange}
                placeholder="Lot ID"
                className={inputStyle}
              />
            </div>
            
            {/* Left Column - Participant Amount Label */}
            <div>
              <div className={labelStyle}>
                The amount of participants
              </div>
            </div>
            
            {/* Right Column - Participant Input Count */}
            <div>
              <div className={labelStyle}>
                The number of input for participants
              </div>
              <div className="mt-2">
                <input 
                  type="number"
                  name="participantCount"
                  value={formData.participantCount}
                  onChange={handleChange}
                  min="1"
                  max="100"
                  className={inputStyle + " bg-teal-50"}
                  placeholder="Enter number of participants"
                />
              </div>
            </div>
            
            {/* Dynamic Participant Fields */}
            {formData.participants.map((participant, index) => (
              <React.Fragment key={index}>
                {/* If it's an even index (0, 2, 4...), it goes in the left column */}
                {index % 2 === 0 && (
                  <div>
                    <input
                      type="text"
                      value={participant.name}
                      onChange={(e) => handleParticipantChange(index, 'name', e.target.value)}
                      placeholder={`If participant ${index + 1}: First Company name`}
                      className={inputStyle}
                    />
                    <input
                      type="text"
                      value={participant.cost}
                      onChange={(e) => handleParticipantChange(index, 'cost', e.target.value)}
                      placeholder={`Company ${index + 1} cost`}
                      className={`${inputStyle} mt-2`}
                    />
                  </div>
                )}
                
                {/* If it's an odd index (1, 3, 5...), it goes in the right column */}
                {index % 2 === 1 && (
                  <div>
                    <input
                      type="text"
                      value={participant.name}
                      onChange={(e) => handleParticipantChange(index, 'name', e.target.value)}
                      placeholder={`If participant ${index + 1}: Company name`}
                      className={inputStyle}
                    />
                    <input
                      type="text"
                      value={participant.cost}
                      onChange={(e) => handleParticipantChange(index, 'cost', e.target.value)}
                      placeholder={`Company ${index + 1} cost`}
                      className={`${inputStyle} mt-2`}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          
          {/* Submit Button */}
          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md font-bold"
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}