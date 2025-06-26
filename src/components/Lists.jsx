import { List } from "./List";

const obj = {
    name : "test",
    age : 20,
}
export default function Lists() {
    const data = ["I will wake up at 8 in the morning",
        "I will practice html for 1 hour",
        "I will give time for 2 hours css",
        "Then i will have breakfast"
    ]
    return (
        <div>
            <List title = {data[0]} obj = {obj}/>
            <List title = {data[1]}/>
            <List title = {data[2]}/>
            <List title = {data[3]}/>
        </div>
    )
}