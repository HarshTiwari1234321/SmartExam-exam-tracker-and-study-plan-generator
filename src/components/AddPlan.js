import { useState } from 'react'

const calculateDays = (exams, days) => {
    days = parseInt(days)
    var dict = {};
    exams.map((exam) => (
        dict[exam.text] = parseInt(exam.diff) + parseInt(exam.score)
    ))
    var total = 0;
    for (var key in dict) {
        total = total + dict[key]
    }

    var retVal = {}
    for (var temp in dict) {
        retVal[temp] = Math.round(dict[temp] / total * days)
    }
    return retVal

}

const PrintResult = (results) => {
    var out = results.results;
    return (
        <>
        <h2 align='center'>Recommended Study Plan</h2><br />
        {
            Object.keys(out).map((key,index) => (
                <div className='task' key={index}>
                    <h3>{key}</h3>
                    <p>recommend studying for {out[key]} days</p>
                </div>
            ))
        }
        </>
    )
}

const AddPlan = ({exams}) => {
    const [days, setDays] = useState('')
    const [done, setDone] = useState(false)
    const [result, setResult] = useState()

    const onSubmit = (e) => {
        e.preventDefault()

        if (!days) {
            alert('Please add how many days left to your exam week')
            return
        } else {
            var result = calculateDays(exams, days);
            alert('Successfully generated your study plan')
            setResult(result)
            setDone(true)
        }

        setDays('')
    }
    return (
        <>
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
        {done && <PrintResult results={result}/>}
        </>
    )
}

export default AddPlan
