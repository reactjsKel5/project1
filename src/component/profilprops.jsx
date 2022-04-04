import React from "react";

const ProfileProps = (props) => {
    return (
        <div class="card-text">
                    <p class="profile-value float-sm-end">
                        {props.nama_lengkap}
                    </p>
                    <p class="profile-value float-sm-end">
                        {props.email}
                    </p>
                    <p class="profile-value float-sm-end">
                        {props.no_hp}
                    </p>

        </div>
    )
}
export default ProfileProps;
