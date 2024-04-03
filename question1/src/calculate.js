export default function Calculate(){
    return (
        <div>
            <h1>Calculator</h1>
            <form action="/calc" method="post">
                <input type="text" name="number1" placeholder="Enter the first number"/>
                <input type="text" name="number2" placeholder="Enter the second number"/>
                <button type="submit"></button>
            </form>

        </div>
      
    );
}