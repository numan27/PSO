import { startTransition } from "react";
import { Button, Container } from "react-bootstrap";
import AppLayout from '../../components/Layout/AppLayout'
import { useNavigate } from "react-router-dom";

const NOC = () => {
    const navigate = useNavigate();

  const handleBack = () => {
        startTransition(() => {
            navigate("/");
        });
    }

    return (
        <AppLayout>
            <Container fluid className="px-md-5 px-3 py-4">
                <div className="mx-lg-5 mx-0 my-sm-5 my-3 noc">
                    <h2 className='fw-bold fs-1 text-capitalize'>procedure of issuance of no onjection certificate (noc) fro installation of petrol pump/ fuel retail outlet:-</h2>

                    <div className="pe-xl-4 px-0 me-xl-5 me-0">
                        <p className='fs-4 mb-0 mt-sm-0 mt-3'> <span>1. </span> The application for grant of NOC for installation of petrol pumk shall be submitted to the Deputy Commissioner of the concerned district. It shall be accompanied by:-</p>

                        <div className="mt-4">
                            <p className='fs-4 mb-0'>a) Commitment letter from Oil Marketing Company duly registered by OGRA.</p>
                            <p className='fs-4 mb-0'>b) Title / lease of land/ site. Fard-e-Malqiayat for Petrol Pump.</p>
                            <p className='fs-4 mb-0'>c) Site / layout plan duly authenticated by the Oil Marketing Company.</p>
                            <p className='fs-4 mb-0'>d) The Minimum size of Plot for establishment of a petrol pukp shall be one-and a- half kanal.</p>
                            <p className='fs-4 mb-0'>e) Petrol pumps shall not be allowed on road, other than within minimum right of way of 80- feet.</p>
                        </div>


                        <p className='fs-4 mb-0 mt-4'> <span>2. </span> . On receipt of above mentioned documents, the case is forwarded to the following notified
                            departments meant for District Petrol Pump
                            Committee for want of feasibility report / preliminary NOC to check eligibility and suitability of
                            land as to whether such place/land is suitable for installation of fuel retail outlet or otherwise as per their area of jurisdiction.</p>

                        <div className="mt-4">
                            <p className='fs-4 mb-0'>i. District Police Officer Bahawalpur</p>
                            <p className='fs-4 mb-0'>ii. Superintendent of Police (Motorways) concerned.</p>
                            <p className='fs-4 mb-0'>iii. Director PTCL, Bahawalpur.</p>
                            <p className='fs-4 mb-0'>iv. Assistant Commissioner of the concerned tehsil.</p>
                            <p className='fs-4 mb-0'>v. cantonment Executive Officer, Bahawalpur.</p>
                            <p className='fs-4 mb-0'>vi. Executive Engineer, Highways Division Bahawalpur.</p>
                            <p className='fs-4 mb-0'>vii. Deputy Director National Highways, Bahawalpur.</p>
                            <p className='fs-4 mb-0'>viii. Executive Engineer (MEPCO) concerned.</p>
                            <p className='fs-4 mb-0'>ix. Regional Manager S.N.G.P.L, Bahawalpur.</p>
                            <p className='fs-4 mb-0'>x. Civil Defence Officer, Bahawalpur.</p>
                            <p className='fs-4 mb-0'>xi. Civil Officer, District Council,Bahawalpur.</p>
                            <p className='fs-4 mb-0'>xii. Civil Officer, Municipal Corporation, Bahawalpur.</p>
                            <p className='fs-4 mb-0'>xiii. Civil Officer, Municipal Committee, Bahawalpur.</p>
                            <p className='fs-4 mb-0'>xiv. Deputy Director Environment Protection, Bahawalpur.</p>
                            <p className='fs-4 mb-0'>xv. Divisional /District Forest Officer, Bahawalpur.</p>
                            <p className='fs-4 mb-0'></p>
                        </div>

                        <p className='fs-4 mb-0 mt-4'> <span>3. </span> After receiving the reports from the concerned departments, the case for issuance of Final
                            NOC for installation of Petrol Pump is placed before the District Petrol Pump Committee decision. The Deputy Commissioner, Bahawalpur is the convener of the committee and Additional Deputy Commissioner(General), Bahawalpur is the Secretary of the committee.</p>

                        <p className='fs-4 mb-0 mt-4'> <span>4. </span> . In case, the Committee unanimously approved the case for issuance of said NOC, the Deputy Commissioner / District Authority under rule 115(3) of petrol Rules, 1937 will issue NOC accordingly.</p>


                        <div className='d-flex justify-content-end ms-auto mt-3'>
                           <Button
                                onClick={() => handleBack()}
                                variant="warning" size="lg" className="rounded-0 w-25 mobile_width fw-semibold py-sm-3 py-2 mt-3 px-5">
                                Back
                            </Button>
                        </div>
                    </div>

                </div>
            </Container>

        </AppLayout>
    )
}

export default NOC