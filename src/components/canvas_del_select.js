import React from "react";

function CanvasDelSelect() {
    return(
        <div>
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Toggle bottom offcanvas
            </button>

            <div className="offcanvas offcanvas-bottom" tabIndex="-1" id="offcanvasBottom"
                 aria-labelledby="offcanvasBottomLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                            aria-label="Close"> </button>
                </div>
                <div className="offcanvas-body small">
                    ...
                </div>
            </div>
        </div>

    )

}
export default CanvasDelSelect;