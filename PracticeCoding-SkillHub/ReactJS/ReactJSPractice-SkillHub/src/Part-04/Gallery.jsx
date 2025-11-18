import React, { useState } from 'react'

const Gallery = () => {
    const [img, setImg] = useState("")
    const [album, setAlbum] = useState([
        "https://images.unsplash.com/photo-1762952517610-8d647cabd71c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1762949857645-ed7b3e2e68cf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1761839257664-ecba169506c1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D"
    ])
    const handleRemove = img => {
        setAlbum(album.filter(item => item != img))
    }
    const reset = () => {
        setImg("")
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <div class="card">
                            <div class="card-header alert alert-warning text-center fs-4">
                                Image Gallery
                            </div>
                            <div class="card-body">
                                <input
                                    type="text"
                                    className='form-control'
                                    onChange={event => setImg(event.target.value)}
                                    value={img}
                                />
                                <button
                                    type="button"
                                    class="btn btn-primary w-100 mt-3"
                                    onClick={() => {
                                        setAlbum([...album, img])
                                        reset()
                                    }
                                    }
                                >
                                    Add to Gallery
                                </button>
                            </div>
                        </div>
                        {
                            <table class="table table-bordered mt-3">
                                <thead>
                                    <tr>
                                        <th className='text-center'>#</th>
                                        <th className='text-center'>Image</th>
                                        <th className='text-center'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        album.map((item, index) => {
                                            return <tr key={index}>
                                                <td className='text-center'>{index + 1}</td>
                                                <td className='text-center'>
                                                    <img
                                                        src={item}
                                                        style={{ objectFit: "cover", height: "100px", width: "100px" }}
                                                    />
                                                </td>
                                                <td className='text-center align-middle'>
                                                    <button
                                                        type="button"
                                                        class="btn btn-danger"
                                                        onClick={() => handleRemove(item)}
                                                    >
                                                        Remove
                                                    </button>
                                                </td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery