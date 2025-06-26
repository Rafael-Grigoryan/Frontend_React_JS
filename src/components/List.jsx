export  function List(props, obj) {

// const {name, age} = obj || {}
    // const name = obj?.name;
    // const age = obj?.age;

    return (<div class="text">
        <img src="https://img.icons8.com/?size=100&id=99950&format=png&color=000000" alt="delete" className="delete" />
        {props.title}
    </div>)
}