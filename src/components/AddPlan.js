import { useState } from 'react'

const AddPlan = () => {
    const [days, setDays] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!days) {
            alert('Please add how many days left to your exam week')
            return
        } else {
            
            alert('Successfully generated your study plan')
        }

        setDays('')
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Days Left</label>
                <input type='text' placeholder='Example: 30' 
                value={days} onChange={(e) => 
                setDays(e.target.value)} />
            </div>
            <input type='submit' value='Generate Study Plan' 
            className='btn btn-block' />
        </form>
    )
}

export default AddPlan
