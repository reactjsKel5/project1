import React from "react";

const ProfileProps = (props) => {
    return (

        <div className="row">
            <div class="mb-4">
                <p class="profile-title float-start">Nama Lengkap</p>
                <p class="profile-title float-end">
                    {props.nama_lengkap}
                </p>
            </div>
            <hr />
            <div class="mb-4">
                <p class="profile-title float-start">Email</p>
                <p class="profile-value float-sm-end">
                    {props.email}

                </p>
            </div>
            <hr />
            <div class="mb-4">
                <p class="profile-title float-start">Nomor Telepon</p>
                <p class="profile-value float-sm-end">
                    {props.no_hp}
                </p>
            </div>
        </div>
    )
}
export default ProfileProps;
