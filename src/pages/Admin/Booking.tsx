import { StoreApi, UseBoundStore } from 'zustand'

export default function Booking(props: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  UseBoundStore: UseBoundStore<StoreApi<any>>
}) {
  props.UseBoundStore.setState({ title: 'Booking Page' });
  return (
    <div className='Booking'>
      <h1>Booking Page</h1>
    </div>
  )
}
