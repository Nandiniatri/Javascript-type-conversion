import FetchData from "./fetchData/FetchData";
import ChildForPassingProps from "./passingProps/child";
import Greeting from "./props/Greeting";
import ReactMemo from "./reactMemo/ReactMemo";
import TabComponents from "./tabComponent/Tab";
import MakeTable from "./table/makeTable";
import TableOfTwo from "./table/twoTable";
import Timer from "./useEffect/Timer";
import Counter from "./useState/Counter";

const RevisionOfReact = () => {
    const title = 'Nandini';
    const name = 'Sundari';

    return (
        <>
            <h1>Revision Of React Js</h1>
            <ReactMemo />
            <TabComponents />
            <Counter />
            <Timer />
            <Greeting title={title} />
            <MakeTable />
            <TableOfTwo />
            <FetchData />
            <ChildForPassingProps name={name} title={title} />
        </>
    )
}


export default RevisionOfReact;
