'use client';
import React, { useState } from 'react';

type Sample = {
    name: string;
    batchNo: string;
    transportation: string;
    jobOrderNumber: string;
};

type ChemicalParameter = {
    sampleName: string;
    chemicalParameters: string;
    mechanicalParameters: string;
    testProtocol: string;
};

type ExporterInfo = {
    name: string;
    address: string;
    eicApprovalNumber: string;
    invoiceNumber: string;
    purchaseOrderNo: string;
    dateOfSampling: string;
    dateOfSampleReceipt: string;
    sampleCondition: string;
    productDescription: string;
    productType: string;
    packingType: string;
    consignmentDetails: string;
    batchCode: string;
    batchLotNo: string;
    grade: string;
    aquacultureRegNo: string;
    sampledCases: string;
    sampledCasesSealNo: string;
    sampledBy: string;
    exportCountry: string;
};

const SampleSubmissionForm: React.FC = () => {
    const [samples, setSamples] = useState<Sample[]>([{ name: '', batchNo: '', transportation: '', jobOrderNumber: '' }]);
    const [chemicalParameters, setChemicalParameters] = useState<ChemicalParameter[]>([{ sampleName: '', chemicalParameters: '', mechanicalParameters: '', testProtocol: '' }]);
    const [showPotableWater, setShowPotableWater] = useState(false);
    const [exporterInfo, setExporterInfo] = useState<ExporterInfo>({
        name: '', address: '', eicApprovalNumber: '', invoiceNumber: '', purchaseOrderNo: '', dateOfSampling: '',
        dateOfSampleReceipt: '', sampleCondition: '', productDescription: '', productType: '', packingType: '',
        consignmentDetails: '', batchCode: '', batchLotNo: '', grade: '', aquacultureRegNo: '', sampledCases: '',
        sampledCasesSealNo: '', sampledBy: '', exportCountry: ''
    });

    const addSample = () => {
        setSamples([...samples, { name: '', batchNo: '', transportation: '', jobOrderNumber: '' }]);
    };

    const addChemicalParameter = () => {
        setChemicalParameters([...chemicalParameters, { sampleName: '', chemicalParameters: '', mechanicalParameters: '', testProtocol: '' }]);
    };

    const removeSample = (index: number) => {
        setSamples(samples.filter((_, i) => i !== index));
    };

    const removeChemicalParameter = (index: number) => {
        setChemicalParameters(chemicalParameters.filter((_, i) => i !== index));
    };

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-8">
            <h1 className="text-2xl font-bold text-center">Sample Submission Form</h1>

            {/* Sections 1 and 2 remain the same */}

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">3. Type of Sample</h2>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    <option value="">Select type of sample</option>
                    <option value="regular">Regular</option>
                    <option value="first-time">First Time</option>
                    <option value="annual-rate-contract">Annual Rate Contract</option>
                    <option value="repeated-testing">Repeated Testing without Contract</option>
                    <option value="household">Household</option>
                    <option value="compliance">Compliance</option>
                    <option value="disputed">Disputed</option>
                    <option value="project">Project</option>
                    <option value="r&d">R&D</option>
                    <option value="pt-ilc">PT/ILC</option>
                    <option value="inference">Inference</option>
                </select>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">4. Sample Collection Method</h2>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    <option value="">Select sample collection method</option>
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
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">5. Sample Receiving Method</h2>
                <div className="flex items-center space-x-4">
                    <input type="radio" id="courier" name="receivingMethod" value="courier" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                    <label htmlFor="courier" className="block text-sm font-medium text-gray-700">By Courier</label>
                    <input type="text" placeholder="Tracking ID" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </div>
                <div className="flex items-center space-x-4">
                    <input type="radio" id="inHand" name="receivingMethod" value="inHand" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                    <label htmlFor="inHand" className="block text-sm font-medium text-gray-700">In hand through customer</label>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">6. Conformity Statement Required</h2>
                <div className="flex items-center space-x-4">
                    <input type="radio" id="conformityYes" name="conformity" value="yes" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                    <label htmlFor="conformityYes" className="block text-sm font-medium text-gray-700">Yes</label>
                    <input type="radio" id="conformityNo" name="conformity" value="no" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                    <label htmlFor="conformityNo" className="block text-sm font-medium text-gray-700">No</label>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">7. Approved Rate</h2>
                <div className="flex items-center space-x-4">
                    <input type="text" placeholder="Rate" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    <span className="text-sm font-medium text-gray-700">+GST per sample</span>
                </div>
                <div className="flex items-center space-x-4">
                    <label className="block text-sm font-medium text-gray-700">Sampling charges applicable:</label>
                    <input type="radio" id="samplingChargesYes" name="samplingCharges" value="yes" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                    <label htmlFor="samplingChargesYes" className="text-sm font-medium text-gray-700">Yes</label>
                    <input type="radio" id="samplingChargesNo" name="samplingCharges" value="no" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                    <label htmlFor="samplingChargesNo" className="text-sm font-medium text-gray-700">No</label>
                </div>
                <input type="text" placeholder="Sampling charges (if applicable)" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">8. Any Other Instructions</h2>
                <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" rows={3}></textarea>
            </section>

            {/* Section 5 (Submitted Samples) remains the same */}

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">6. Sample & Parameter Details</h2>
                {chemicalParameters.map((param, index) => (
                    <div key={index} className="grid grid-cols-5 gap-2 items-end">
                        <div>
                            <label htmlFor={`paramSampleName${index}`} className="block text-sm font-medium text-gray-700">Sample Name & Location</label>
                            <input
                                id={`paramSampleName${index}`}
                                type="text"
                                value={param.sampleName}
                                onChange={(e) => {
                                    const newParams = [...chemicalParameters];
                                    newParams[index].sampleName = e.target.value;
                                    setChemicalParameters(newParams);
                                }}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div>
                            <label htmlFor={`chemicalParameters${index}`} className="block text-sm font-medium text-gray-700">Chemical/Biological/Radiological Parameters</label>
                            <input
                                id={`chemicalParameters${index}`}
                                type="text"
                                value={param.chemicalParameters}
                                onChange={(e) => {
                                    const newParams = [...chemicalParameters];
                                    newParams[index].chemicalParameters = e.target.value;
                                    setChemicalParameters(newParams);
                                }}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div>
                            <label htmlFor={`mechanicalParameters${index}`} className="block text-sm font-medium text-gray-700">Mechanical/Electrical Parameters</label>
                            <input
                                id={`mechanicalParameters${index}`}
                                type="text"
                                value={param.mechanicalParameters}
                                onChange={(e) => {
                                    const newParams = [...chemicalParameters];
                                    newParams[index].mechanicalParameters = e.target.value;
                                    setChemicalParameters(newParams);
                                }}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div>
                            <label htmlFor={`testProtocol${index}`} className="block text-sm font-medium text-gray-700">Test Protocol</label>
                            <input
                                id={`testProtocol${index}`}
                                type="text"
                                value={param.testProtocol}
                                onChange={(e) => {
                                    const newParams = [...chemicalParameters];
                                    newParams[index].testProtocol = e.target.value;
                                    setChemicalParameters(newParams);
                                }}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <button
                            onClick={() => removeChemicalParameter(index)}
                            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <button
                    onClick={addChemicalParameter}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Add Parameter
                </button>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">7. Additional Information</h2>
                <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">Additional Information (if any)</label>
                    <textarea
                        id="additionalInfo"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        rows={4}
                    ></textarea>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">8. For Potable / Drinking Water</h2>
                <div className="flex items-center space-x-4 mb-4">
                    <input
                        type="checkbox"
                        id="showPotableWater"
                        checked={showPotableWater}
                        onChange={(e) => setShowPotableWater(e.target.checked)}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label htmlFor="showPotableWater" className="block text-sm font-medium text-gray-700">
                        Is this for Potable / Drinking Water?
                    </label>
                </div>
                {showPotableWater && (
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="waterSource" className="block text-sm font-medium text-gray-700">Source of Water Sample</label>
                            <select
                                id="waterSource"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            >
                                <option value="">Select water source</option>
                                <option value="municipal">Municipal Supply Water</option>
                                <option value="ground">Ground Water</option>
                                <option value="borewell">Borewell Water</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="treatmentType" className="block text-sm font-medium text-gray-700">Treatment Type</label>
                            <select
                                id="treatmentType"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            >
                                <option value="">Select treatment type</option>
                                <option value="ro">RO Treatment</option>
                                <option value="membrane">Membrane Treatment</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                )}
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">9. Sample Test Request Format from Exporter</h2>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="exporterName" className="block text-sm font-medium text-gray-700">Name & Address of Processor/ Exporter</label>
                        <input
                            id="exporterName"
                            type="text"
                            value={exporterInfo.name}
                            onChange={(e) => setExporterInfo({ ...exporterInfo, name: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="eicApprovalNumber" className="block text-sm font-medium text-gray-700">EIC Approval Number</label>
                        <input
                            id="eicApprovalNumber"
                            type="text"
                            value={exporterInfo.eicApprovalNumber}
                            onChange={(e) => setExporterInfo({ ...exporterInfo, eicApprovalNumber: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="invoiceNumber" className="block text-sm font-medium text-gray-700">Invoice Number (for export)</label>
                        <input
                            id="invoiceNumber"
                            type="text"
                            value={exporterInfo.invoiceNumber}
                            onChange={(e) => setExporterInfo({ ...exporterInfo, invoiceNumber: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="purchaseOrderNo" className="block text-sm font-medium text-gray-700">Purchase Order No./Contract No.</label>
                        <input
                            id="purchaseOrderNo"
                            type="text"
                            value={exporterInfo.purchaseOrderNo}
                            onChange={(e) => setExporterInfo({ ...exporterInfo, purchaseOrderNo: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="dateOfSampling" className="block text-sm font-medium text-gray-700">Date & Place of Sampling</label>
                        <input
                            id="dateOfSampling"
                            type="text"
                            value={exporterInfo.dateOfSampling}
                            onChange={(e) => setExporterInfo({ ...exporterInfo, dateOfSampling: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="dateOfSampleReceipt" className="block text-sm font-medium text-gray-700">Date of Sample Receipt</label>
                        <input
                            id="dateOfSampleReceipt"
                            type="date"
                            value={exporterInfo.dateOfSampleReceipt}
                            onChange={(e) => setExporterInfo({ ...exporterInfo, dateOfSampleReceipt: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="sampleCondition" className="block text-sm font-medium text-gray-700">Condition of Sample (at the time of receipt)</label>
                        <input
                            id="sampleCondition"
                            type="text"
                            value={exporterInfo.sampleCondition}
                            onChange={(e) => setExporterInfo({ ...exporterInfo, sampleCondition: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="productDescription" className="block text-sm font-medium text-gray-700">Name/ Description of the products</label>
                        <input
                            id="productDescription"
                            type="text"
                            value={exporterInfo.productDescription}
                            onChange={(e) => setExporterInfo({ ...exporterInfo, productDescription: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="productType" className="block text-sm font-medium text-gray-700">Type & Nature of Product</label>
                        <input
                            id="productType"
                            type="text"
                            value={exporterInfo.productType}
                            onChange={(e) => setExporterInfo({ ...exporterInfo, productType: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="packingType" className="block text-sm font-medium text-gray-700">Type of Packing</label>
                        <input
                            id="packingType"
                            type="text"
                            value={exporterInfo.packingType}
                            onChange={(e) => setExporterInfo({ ...exporterInfo, packingType: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="consignmentDetails" className="block text-sm font-medium text-gray-700">No. of M/Cs (Serial no. if any)/ Net weight/ Gross Wt. of the Consignments</label>
                        <input
                            id="consignmentDetails"
                            type="text"
                            value={exporterInfo.consignmentDetails}
                            onChange={(e) => setExporterInfo({ ...exporterInfo, consignmentDetails: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="batchCode" className="block text-sm font-medium text-gray-700">Code covered in the consignment/Batch No.</label>
                        <input
                            id="batchCode"
                            type="text"
                            value={exporterInfo.batchCode}
                            onChange={(e) => setExporterInfo({ ...exporterInfo, batchCode: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="batchLotNo" className="block text-sm font-medium text-gray-700">Batch/ Lot No. on the consignment</label>
                        <input
                            id="batchLotNo"
                            type="text"
                            value={exporterInfo.batchLotNo}
                            onChange={(e) => setExporterInfo({ ...exporterInfo, batchLotNo: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="grade" className="block text-sm font-medium text-gray-700">Grade covered in the consignment (If Applicable)</label>
                        <input
                            id="grade"
                            type="text"
                            value={exporterInfo.grade}
                            onChange={(e) => setExporterInfo({ ...exporterInfo, grade: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="aquacultureRegNo" className="block text-sm font-medium text-gray-700">Registration number of Aquaculture Pond/Farm (If Applicable)</label>
                        <input
                            id="aquacultureRegNo"
                            type="text"
                            value={exporterInfo.aquacultureRegNo}
                            onChange={(e) => setExporterInfo({ ...exporterInfo, aquacultureRegNo: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="sampledCases" className="block text-sm font-medium text-gray-700">No. of cases selected for sampling</label>
                        <input
                            id="sampledCases"
                            type="text"
                            value={exporterInfo.sampledCases}
                            onChange={(e) => setExporterInfo({ ...exporterInfo, sampledCases: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="sampledCasesSealNo" className="block text-sm font-medium text-gray-700">Sampled cases seal No (If any)</label>
                        <input
                            id="sampledCasesSealNo"
                            type="text"
                            value={exporterInfo.sampledCasesSealNo}
                            onChange={(e) => setExporterInfo({ ...exporterInfo, sampledCasesSealNo: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="sampledBy" className="block text-sm font-medium text-gray-700">Sampled By (Laboratory/Provided by Customer)</label>
                        <input
                            id="sampledBy"
                            type="text"
                            value={exporterInfo.sampledBy}
                            onChange={(e) => setExporterInfo({ ...exporterInfo, sampledBy: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="exportCountry" className="block text-sm font-medium text-gray-700">Consignments intended for export to (Country Name)</label>
                        <input
                            id="exportCountry"
                            type="text"
                            value={exporterInfo.exportCountry}
                            onChange={(e) => setExporterInfo({ ...exporterInfo, exportCountry: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                </div>
            </section>

            <button
                className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
                Submit Form
            </button>
        </div>
    );
};

export default SampleSubmissionForm;