import {FaTimes} from 'react-icons/fa'

const Exam = ({ exam, onDelete, onToggle }) => {
    return (
        <div className={`task ${exam.reminder ? 'reminder' : ''}`} 
        onDoubleClick={() => 
        onToggle(exam.id)}>
            <h3>
                {exam.text} 
                <FaTimes style={{ 
                    color: 'red', 
                    cursor: 'pointer' 
                }} onClick={() => onDelete(exam.id)}/> 
            </h3>
            <p>{exam.day}</p>
        </div>
    )
}

export default Exam
