import spinner from './assets/cool-spinner.gif'

function Spinner() {
  return (
    <div className='w-100 mt-20'>
        <img width={180} className='text-center mx-auto' src={spinner} alt="loading content" />
    </div>
  )
}

export default Spinner