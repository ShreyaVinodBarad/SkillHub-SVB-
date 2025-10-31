import React, { useState } from 'react'

const Gallery = () => {
    const [pic, setPic] = useState("")
    const [album, setAlbum] = useState([
        "https://images.unsplash.com/photo-1761828122700-11b752d69a88?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=400",
        "https://images.unsplash.com/photo-1759400333614-6d27a2666266?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=400",
        "https://plus.unsplash.com/premium_photo-1760602531705-0b6931fc7fbc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=400"
    ])
    const handleDelete = arg => {
        setAlbum(album.filter(item => item != arg))
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <input type="text" onChange={event => setPic(event.target.value)} className='form-control' value={pic} />
                            <button onClick={() => {
                                setAlbum([...album, pic])
                                setPic("")
                            }} className='btn btn-primary w-100 mt-3'>
                                Add
                            </button>
                            <table className="table my-3 table-bordered table-success">
                                <thead>
                                    <tr>
                                        <th className='text-center'>Image</th>
                                        <th className='text-center'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {album.map(item => <tr>
                                        <td className='text-center align-middle'>
                                            <img src={item} height={100} width={100}></img>
                                        </td>
                                        <td className='text-center align-middle'>
                                            <button className='btn btn-danger' onClick={() => handleDelete(item)}>
                                                Remove
                                            </button>
                                        </td>
                                        {/* 👆 If we want to pass an argument inside a function then call the function using above syntax - Calling inside the another function */}
                                    </tr>)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Gallery

/*
1) setAlbum([...album, pic])
- This line adds the new photo (pic) to the album (array) and updates it.
- Explanation:
a) album → your old list (array) of photos.
b) pic → the new photo link or name you typed in the input box.
c) [...] → means spread operator (it copies all old items).
d) setAlbum() → updates the album with a new version.
- So setAlbum([...album, pic]) means:
“Make a new array that contains all the old photos from album, plus the new one (pic) at the end — and then save that new array into album.”
- State:
a) album → the current value of your state (here, an empty array [] at first).
b) setAlbum → a special function that you use to change the state.
------------------------------------------------------------------
2) Class	   |   Purpose                      |
---------------|--------------------------------|
text-center	   |   Centers content horizontally |
align-middle   |	  Centers content vertically|
table-bordered |	  Adds borders to all cells |
------------------------------------------------------------------
3) React Developer Tools (Chrome Extension)
- React Developer Tools is a browser extension that helps developers inspect React components in real time.
- When you open your website and click the “⚛️ Components” tab, you can:
a) See the component tree (structure of all components).
b) Click on any component to view its props and state values.
c) When you click the “magic wand / magic stick” icon, React automatically shows readable names for your state variables and props — making it easy to understand what each value stores.
------------------------------------------------------------------
4) Controlled Input:
- Controlled input means an input that has both value and onChange attributes — this means its value is controlled by React state, not directly by the user.
- Controlled input means an input field in React whose value is controlled by React state — not by the user directly.
------------------------------------------------------------------
*/ 