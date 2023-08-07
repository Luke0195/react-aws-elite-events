import { useState } from 'react'
import { Grid, Modal } from '@mui/material'
import { CreateEvent } from '../index'
import AddIcon from '@mui/icons-material/Add'

export function Header() {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <>
      <div className="mt-4 w-full  flex justify-center ">
        <Grid container spacing={2} className="pt-4">
          <div className="flex-1 flex align-middle justify-between">
            <h2 className="text-2xl font-semibold"> Events </h2>
            <button
              className="flex align-middle w-40 justify-between items-center"
              onClick={() => setOpen(true)}>
              <span className="text-lg font-medium">Create Event</span>{' '}
              <AddIcon
                width={20}
                height={20}
                fontSize={'small'}
                className="w-16 h-16 rounded-2xl bg-white hover:opacity-50"
                color="info"
              />
            </button>
          </div>
        </Grid>
      </div>
      <Modal
        open={open}
        onClose={setOpen}
        className="max-w-2xl flex items-center justify-center m-auto">
        <CreateEvent />
      </Modal>
    </>
  )
}
