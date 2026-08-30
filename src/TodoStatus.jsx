export default function ToDoStatus({todo}){

    let total=todo.length;
    let complete=todo.filter((el)=>(el.completed===true)).length;
    let pending=todo.filter((el)=>(el.completed===false)).length;

    console.log(pending);

    return(
        <>
        <div id="status">
            <span id="firstNum">
                <p id="num">{total}</p>
                <p id="numStatus">Total</p>
            </span>

            <span id="secondNum">
                <p id="num">{complete}</p>
                <p id="numStatus">Completed</p>
            </span>

            <span id="thirdNum">
                <p id="num">{pending}</p>
                <p id="numStatus">Pending</p>
            </span>
        </div>
        </>
    );
}