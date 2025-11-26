import React from 'react'
import { Link } from 'react-router-dom'

const PublicFooter = () => {
    return (
        <div>
            <div className='bg-light py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 text-center">
                            <h4>
                                SkillHub Blogs
                            </h4>
                        </div>
                        <div className="col-sm-4 text-center">
                            <Link to="/admin" className='nav-link'>
                                Admin
                            </Link>
                            <Link to="/admin/author" className='nav-link'>
                                Authors
                            </Link>
                            <Link to="/admin/blogs" className='nav-link'>
                                Blogs
                            </Link>
                        </div>
                        <div className="col-sm-4 text-center">
                            <Link to="/author" className='nav-link'>
                                Author
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PublicFooter