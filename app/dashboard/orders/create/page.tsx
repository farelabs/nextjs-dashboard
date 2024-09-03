'use client';

import React, { useState } from 'react';

const SampleSubmissionForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    sampleSubmissionFormNo: '',
    bdManagerName: '',
    companyName: '',
    date: '',
    samplingLocationDetails: '',
    invoiceAddressDetails: '',
    reportingAddressDetails: '',
    courierAddressDetails: '',
    purposeOfTesting: '',
    healthCertificate: false,
    exportType: '',
    exportingCountry: '',
    contactPerson1: { name: '', designation: '', mobile: '', email: '' },
    contactPerson2: { name: '', designation: '', mobile: '', email: '' },
    contactPerson3: { name: '', designation: '', mobile: '', email: '' },
    samples: [{ name: '', batchNo: '', transportationCondition: '', jobOrderNumber: '' }],
    sampleType: '',
    sampleCollectionMethod: '',
    sampleReceivingMethod: '',
    trackingId: '',
    conformityStatementRequired: false,
    approvedRate: '',
    samplingCharges: '',
    otherInstructions: '',
    sampleParameterDetails: [{ sampleName: '', chemicalParameters: '', mechanicalParameters: '', testProtocol: '' }],
    additionalInformation: '',
    waterSampleSource: '',
    waterTreatmentType: '',
    // Annexure I fields
    processorName: '',
    processorAddress: '',
    eicApprovalNumber: '',
    invoiceNumber: '',
    purchaseOrderNo: '',
    samplingDate: '',
    samplingPlace: '',
    sampleReceiptDate: '',
    sampleCondition: '',
    productDescription: '',
    productType: '',
    packingType: '',
    consignmentDetails: '',
    batchCode: '',
    batchLotNo: '',
    grade: '',
    aquacultureRegNo: '',
    samplingCases: '',
    sampledCasesSealNo: '',
    sampledBy: '',
    exportCountry: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  const addSample = () => {
    setFormData({
      ...formData,
      samples: [...formData.samples, { name: '', batchNo: '', transportationCondition: '', jobOrderNumber: '', sampleCollectionMethod: '' }],
    });
  };

  const removeSample = (index) => {
    setFormData({
      ...formData,
      samples: formData.samples.filter((_, i) => i !== index),
    });
  };
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Sample Submission Form No.</label>
                <input
                  type="text"
                  name="sampleSubmissionFormNo"
                  value={formData.sampleSubmissionFormNo}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="FL/SSF/_____________"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">BD Manager's Name</label>
                <input
                  type="text"
                  name="bdManagerName"
                  value={formData.bdManagerName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Sampling Location & Packaging Details</label>
                <textarea
                  name="samplingLocationDetails"
                  value={formData.samplingLocationDetails}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  rows="3"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Invoice Address Details</label>
                <textarea
                  name="invoiceAddressDetails"
                  value={formData.invoiceAddressDetails}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Reporting Address Details</label>
                <textarea
                  name="reportingAddressDetails"
                  value={formData.reportingAddressDetails}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  rows="3"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Courier Address Details</label>
                <textarea
                  name="courierAddressDetails"
                  value={formData.courierAddressDetails}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Purpose of Testing</label>
                <input
                  type="text"
                  name="purposeOfTesting"
                  value={formData.purposeOfTesting}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="healthCertificate"
                  checked={formData.healthCertificate}
                  onChange={(e) => setFormData({ ...formData, healthCertificate: e.target.checked })}
                  className="rounded"
                />
                <label className="ml-2 flex text-sm font-medium text-gray-700">Health Certificate Required</label>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Select Type</label>
                <select
                  name="exportType"
                  value={formData.exportType}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option value="">Select type</option>
                  <option value="EIC">EIC</option>
                  <option value="APEDA">APEDA</option>
                  <option value="IOPEPC">IOPEPC</option>
                  <option value="TeaBoard">Tea Board</option>
                  <option value="FSSAI">FSSAI</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Name of Exporting Country</label>
                <input
                  type="text"
                  name="exportingCountry"
                  value={formData.exportingCountry}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">4. Contact Persons</h2>
              {[1, 2, 3].map((num) => (
                <div key={num} className="grid grid-cols-4 gap-4">
                  <div>
                    <label htmlFor={`contactName${num}`} className="block text-sm font-medium text-gray-700">Contact Person-{num} Name</label>
                    <input id={`contactName${num}`} type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                  </div>
                  <div>
                    <label htmlFor={`contactDesignation${num}`} className="block text-sm font-medium text-gray-700">Designation</label>
                    <input id={`contactDesignation${num}`} type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                  </div>
                  <div>
                    <label htmlFor={`contactMobile${num}`} className="block text-sm font-medium text-gray-700">Mobile Number</label>
                    <input id={`contactMobile${num}`} type="tel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                  </div>
                  <div>
                    <label htmlFor={`contactEmail${num}`} className="block text-sm font-medium text-gray-700">Email</label>
                    <input id={`contactEmail${num}`} type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                  </div>
                </div>
              ))}
            </section>
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">5. Submitted Samples</h2>
            {formData.samples.map((sample, index) => (
              <div key={index} className="grid grid-cols-5 gap-2 items-end">
                <div>
                  <label htmlFor={`sampleName${index}`} className="block text-sm font-medium text-gray-700">Sample Name</label>
                  <input
                    id={`sampleName${index}`}
                    type="text"
                    value={sample.name}
                    onChange={(e) => {
                      const newSamples = [...formData.samples];
                      newSamples[index].name = e.target.value;
                      setFormData({ ...formData, samples: newSamples });
                    }}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor={`batchNo${index}`} className="block text-sm font-medium text-gray-700">Batch No.</label>
                  <input
                    id={`batchNo${index}`}
                    type="text"
                    value={sample.batchNo}
                    onChange={(e) => {
                      const newSamples = [...formData.samples];
                      newSamples[index].batchNo = e.target.value;
                      setFormData({ ...formData, samples: newSamples });
                    }}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor={`transportationCondition${index}`} className="block text-sm font-medium text-gray-700">Transportation</label>
                  <select
                    id={`transportationCondition${index}`}
                    value={sample.transportationCondition}
                    onChange={(e) => {
                      const newSamples = [...formData.samples];
                      newSamples[index].transportationCondition = e.target.value;
                      setFormData({ ...formData, samples: newSamples });
                    }}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  >
                    <option value="">Select</option>
                    <option value="ambient">Ambient</option>
                    <option value="refrigerated">Refrigerated up to 4°C</option>
                    <option value="freezing">Freezing Not Less Than -18°C</option>
                  </select>
                </div>
                <div>
                  <label htmlFor={`jobOrderNumber${index}`} className="block text-sm font-medium text-gray-700">Job Order Number</label>
                  <input
                    id={`jobOrderNumber${index}`}
                    type="text"
                    value={sample.jobOrderNumber}
                    onChange={(e) => {
                      const newSamples = [...formData.samples];
                      newSamples[index].jobOrderNumber = e.target.value;
                      setFormData({ ...formData, samples: newSamples });
                    }}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>

                <button
                  onClick={() => removeSample(index)}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              onClick={addSample}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Add Sample
            </button>
            <div className="grid grid-cols-2 gap-4">

              <div>
                <label className="block text-sm font-medium text-gray-700">Type of Sample</label>
                <select
                  name="sampleType"
                  value={formData.sampleType}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option value="">Select</option>
                  <option value="Regular">Regular</option>
                  <option value="First Time">First Time</option>
                  <option value="Annual Rate Contract">Annual Rate Contract</option>
                  <option value="Repeated Testing without Contract">Repeated Testing without Contract</option>
                  <option value="Household">Household</option>
                  <option value="Compliance">Compliance</option>
                  <option value="Disputed">Disputed</option>
                  <option value="Project/R&D">Project/R&D</option>
                  <option value="PT/ILC">PT/ILC</option>
                  <option value="Inference">Inference</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Sample Collection Method</label>
                <select
                  name="sampleCollectionMethod"
                  value={formData.sampleCollectionMethod}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option value="">Select</option>
                  <option value="FL/SOP/B/D-1">FL/SOP/B/D-1</option>
                  <option value="FL/SOP/B/D-2">FL/SOP/B/D-2</option>
                  <option value="FL/SOP/B/D-3">FL/SOP/B/D-3</option>
                  <option value="FL/SOP/B/D-4">FL/SOP/B/D-4</option>
                  <option value="FL/SOP/B/D-5">FL/SOP/B/D-5</option>
                  <option value="FL/SOP/B/D-6">FL/SOP/B/D-6</option>
                  <option value="FL/SOP/ENV/D-01">FL/SOP/ENV/D-01</option>
                  <option value="FL/SOP/ENV/D-02">FL/SOP/ENV/D-02</option>
                  <option value="FL/SOP/ENV/D-03">FL/SOP/ENV/D-03</option>
                  <option value="FL/SOP/ENV/D-04">FL/SOP/ENV/D-04</option>
                </select>
              </div>
            </div>
           
          </div >

        );
      case 2:
        return (
          <div className="space-y-4">

            {/* Add more fields for step 3 */}
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Sample & Parameter Details</label>
              {formData.sampleParameterDetails.map((sample, index) => (
                <div key={index} className="grid grid-cols-4 gap-2 mt-2">
                  <input
                    type="text"
                    placeholder="Sample Name"
                    value={sample.sampleName}
                    onChange={(e) => {
                      const newSamples = [...formData.sampleParameterDetails];
                      newSamples[index].sampleName = e.target.value;
                      setFormData({ ...formData, sampleParameterDetails: newSamples });
                    }}
                    className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  <input
                    type="text"
                    placeholder="Chemical Parameters"
                    value={sample.chemicalParameters}
                    onChange={(e) => {
                      const newSamples = [...formData.sampleParameterDetails];
                      newSamples[index].chemicalParameters = e.target.value;
                      setFormData({ ...formData, sampleParameterDetails: newSamples });
                    }}
                    className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  <input
                    type="text"
                    placeholder="Mechanical Parameters"
                    value={sample.mechanicalParameters}
                    onChange={(e) => {
                      const newSamples = [...formData.sampleParameterDetails];
                      newSamples[index].mechanicalParameters = e.target.value;
                      setFormData({ ...formData, sampleParameterDetails: newSamples });
                    }}
                    className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  <input
                    type="text"
                    placeholder="Test Protocol"
                    value={sample.testProtocol}
                    onChange={(e) => {
                      const newSamples = [...formData.sampleParameterDetails];
                      newSamples[index].testProtocol = e.target.value;
                      setFormData({ ...formData, sampleParameterDetails: newSamples });
                    }}
                    className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={() => setFormData({
                  ...formData,
                  sampleParameterDetails: [...formData.sampleParameterDetails, { sampleName: '', chemicalParameters: '', mechanicalParameters: '', testProtocol: '' }]
                })}
                className="mt-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add Sample
              </button>
            </div>
            {/* Add more fields for step 4 */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-full mx-auto p-6 bg-gray-50 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Sample Submission Form</h2>
      <div className="mb-6 flex justify-between">
        {['General Information', 'Sample Details', 'Testing Information', 'Additional Details'].map((step, index) => (
          <div
            key={step}
            className={`text-center ${index <= currentStep ? 'text-indigo-600' : 'text-gray-400'
              }`}
          >
            <div
              className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${index <= currentStep ? 'bg-indigo-600 text-white' : 'bg-gray-200'
                }`}
            >
              {index + 1}
            </div>
            <div className="mt-2 text-sm">{step}</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        {renderStepContent()}
        <div className="mt-8 flex justify-between">
          <button
            type="button"
            onClick={handlePrevStep}
            disabled={currentStep === 0}
            className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Previous
          </button>
          {currentStep < 3 ? (
            <button
              type="button"
              onClick={handleNextStep}
              className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SampleSubmissionForm;




