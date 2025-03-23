function handleClick(event) {
    console.log("Hello!");
    console.log(event);
};

function handleMouseOver() {
    console.log("bye!");
};

function handleDblClick() {
    console.log("you double clicked!");
};

export default function Button() {
    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            <p onMouseOver={handleMouseOver}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus exercitationem, modi minus asperiores totam, qui voluptatibus aperiam ullam, vitae incidunt velit architecto voluptates sapiente eum excepturi at sunt quam quidem.
            </p>
            <button onDoubleClick={handleDblClick}>double click me!</button>
        </div>
    );
}