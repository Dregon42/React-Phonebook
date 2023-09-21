import { useState } from 'react'
import Button from "./Button"
import Modal from "./Modal"
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Id', width: 90, hide:true },
    { field: 'name', headerName: 'Contact Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'phone_number', headerName: 'Phone Number', flex: 1 },
    { field: 'address', headerName: 'Address', flex: 2}
]


function DataTable() {
    let [ open, setOpen ] = useState(false);
    const { contactData, getData } = useGetData();
    const [rowSelectionModel, setRowSelectionModel] = useState<string[]>([])
    

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(rowSelectionModel[0]);
        getData();
        console.log(`Selection model: ${rowSelectionModel}`);
        setTimeout( () => { window.location.reload(), 500})
    }


    return (
    <>
        <Modal 
            open={open}
            onClose={handleClose}
            id={rowSelectionModel}
        />
        <div className="flex flex-row">
            <div>
                <button
                    className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white"
                    onClick={() => handleOpen()}
                >
                    Create New Contact
                </button>
            </div> 
            <Button onClick={handleOpen} className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white" >Update</Button>
            <Button onClick={deleteData} className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white" >Delete</Button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"} 
        style={{ height: 400, width: '100%' }}>
            <h2 className="p-3 bg-slate-300 my-2 rounded">My Contacts</h2>
            <DataGrid rows={contactData}columns={columns}
            autoPageSize checkboxSelection={true} onSelectionModelChange={(item: any) => {
                setRowSelectionModel(item)}}/>

        </div>
    </>
  )
}

export default DataTable