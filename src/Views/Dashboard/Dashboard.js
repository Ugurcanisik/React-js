import {Alert} from 'react-bootstrap';


export const Dashboard = () => {
    return (
        <>
            <div className="panel-header bg-primary-gradient">
                <div className="page-inner py-5">
                    <div className="d-flex align-items-left align-items-md-center flex-column flex-md-row">
                        <div>
                            <h2 className="text-white pb-2 fw-bold">Dashboard</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-inner mt--5">
                <div className="row mt--2">
                    <div className="col-md-6">
                        <div className="card full-height">
                            <div className="card-body">
                                <div className="card-title">Overall statistics</div>
                                <div className="card-category">Daily information about statistics in system</div>
                                <div className="d-flex flex-wrap justify-content-around pb-2 pt-4">
                                    <div className="px-2 pb-2 pb-md-0 text-center">
                                        <div id="circles-1"></div>
                                        <h6 className="fw-bold mt-3 mb-0">New Users</h6>
                                    </div>
                                    <div className="px-2 pb-2 pb-md-0 text-center">
                                        <div id="circles-2"></div>
                                        <h6 className="fw-bold mt-3 mb-0">Sales</h6>
                                    </div>
                                    <div className="px-2 pb-2 pb-md-0 text-center">
                                        <div id="circles-3"></div>
                                        <h6 className="fw-bold mt-3 mb-0">Subscribers</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card full-height">
                            <div className="card-body">
                                <div className="card-title">Total income & spend statistics</div>
                                <div className="row py-3">
                                    <div className="col-md-4 d-flex flex-column justify-content-around">
                                        <div>
                                            <h6 className="fw-bold text-uppercase text-success op-8">Total
                                                Income</h6>
                                            <h3 className="fw-bold">$9.782</h3>
                                        </div>
                                        <div>
                                            <h6 className="fw-bold text-uppercase text-danger op-8">Total Spend</h6>
                                            <h3 className="fw-bold">$1,248</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div id="chart-container">
                                            <canvas id="totalIncomeChart"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}