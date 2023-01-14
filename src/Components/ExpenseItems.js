import './ExpenseItems.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
function ExpenseItems(props){
    return(
        <div className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <ExpenseDetails title={props.title} amount={props.amount}></ExpenseDetails>
        </div>
    )
}
export default ExpenseItems