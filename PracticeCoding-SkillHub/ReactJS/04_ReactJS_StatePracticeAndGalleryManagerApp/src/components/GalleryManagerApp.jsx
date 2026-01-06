import React, { useState } from 'react'

const GalleryManagerApp = () => {
    const [pic, setPic] = useState("")
    const [album, setAlbum] = useState([
        "https://images.pexels.com/photos/2372978/pexels-photo-2372978.jpeg",
        "https://images.pexels.com/photos/2721507/pexels-photo-2721507.jpeg",
        "https://images.pexels.com/photos/2372979/pexels-photo-2372979.jpeg"
    ])

    const reset = () => {
        setPic("")
    }

    const handleDelete = photo => {
        setAlbum(album.filter(item => item !== photo))
    }

    console.log(album)
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 offset-sm-2">
                        <div class="card mt-3">
                            <div class="card-header alert alert-warning fs-3 text-center">
                                Gallery Manager App
                            </div>
                            <div class="card-body">
                                <input
                                    type="text"
                                    className='form-control'
                                    placeholder='Enter the image URL...'
                                    onChange={event => setPic(event.target.value)}
                                    value={pic}
                                />
                                <button
                                    type="button"
                                    class="btn btn-primary w-100 mt-3"
                                    onClick={() => { setAlbum([...album, pic]); reset() }}
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                        <table class="table table-bordered mt-3">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    album.map(item => <tr>
                                        <td className='text-center'>
                                            <img
                                                src={item}
                                                alt="image"
                                                style={{ width: "150px", borderRadius: "12px" }}
                                            />
                                        </td>
                                        <td>
                                            <button
                                                type="button"
                                                class="btn btn-danger w-100"
                                                onClick={() => handleDelete(item)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryManagerApp
/*
1) React Developer Tools (Chrome Extension)
- React Developer Tools is a browser extension that helps developers
inspect React components in real time.
- When you open your website and click the “⚛️ Components” tab, you
can:
a) See the component tree (structure of all components).
b) Click on any component to view its props and state values.
c) When you click the “magic wand / magic stick” icon, React
automatically shows readable names for your state variables and props
— making it easy to understand what each value stores.
------------------------------------------------------------
2) Controlled Input:
- Controlled input means an input that has both value and onChange
attributes — this means its value is controlled by React state, not
directly by the user.
- Controlled input means an input field in React whose value is
controlled by React state — not by the user directly.
------------------------------------------------------------
*/ 