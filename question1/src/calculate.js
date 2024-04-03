export default function Calculate(){
    return (
        <div>
            <h1>Calculator</h1>
            <form action="/calc" method="post">
                <input type="text" name="number1" />
                <input type="text" name="number2" />

                <button type="submit"></button>
            </form>

        </div>
      
    );
}