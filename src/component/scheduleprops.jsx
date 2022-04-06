import React from "react";

const ScheduleProps = (props) => {
    return (

            <div className="">
                <div class="col">
                    {props.waktu_mulai}  {props.waktu_berakhir}
                </div>
                <div class="col">
                    {props.nama_schedule}
                </div>
                <div class="">
                    <button className="btn-delete float-end"
                        onClick={
                            () => {
                                props.delete(props.id)
                            }
                        }>
                        <ion-icon name="close-outline"></ion-icon>
                    </button>
                </div>
        </div>
    )
}
export default ScheduleProps;
