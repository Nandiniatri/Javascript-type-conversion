import Greeting from "./props/Greeting";
import ReactMemo from "./reactMemo/ReactMemo";
import TabComponents from "./tabComponent/Tab";
import MakeTable from "./table/makeTable";
import Timer from "./useEffect/Timer";
import Counter from "./useState/Counter";

const RevisionOfReact = () => {
    const title = 'Nandini';

    return (
        <>
            <h1>Revision Of React Js</h1>
            <ReactMemo />
            <TabComponents />
            <Counter />
            <Timer />
            <Greeting title={title} />
            <MakeTable />
        </>
    )
}


export default RevisionOfReact;