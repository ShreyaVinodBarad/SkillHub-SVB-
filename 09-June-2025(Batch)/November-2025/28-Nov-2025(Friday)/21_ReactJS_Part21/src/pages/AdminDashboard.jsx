import React from 'react'

const AdminDashboard = () => {
    const data = [
        {
            label: "Author",
            count: 0,
            varient: "primary"
        },
        {
            label: "Blogs",
            count: 0,
            varient: "warning"
        },
        {
            label: "Active",
            count: 0,
            varient: "success"
        },
        {
            label: "InActive",
            count: 0,
            varient: "danger"
        }
    ]
    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        data.map(item => {
                            return <div className="col-sm-3">
                                <div class={`card mt-3 alert alert-${item.varient}`}>
                                    <div class="card-body d-flex justify-content-between">
                                        <div>{item.label}</div>
                                        <div className='display-5'>
                                            {item.count}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                    {/* 👆 Rather than repeating same code for designing 4 cards we are using map  */}
                </div>
            </div>
        </div >
    )
}

export default AdminDashboard