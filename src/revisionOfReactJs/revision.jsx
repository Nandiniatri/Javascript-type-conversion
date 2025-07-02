import Accordion from "./accordionComponent/AccordionComponent";
import CounterFile from "./counterFile/Counter";
import FetchData from "./fetchData/FetchData";
import LoginForm from "./form/SimpleLoginFormValidation";
import PaginatedList from "./pagination/Pagination";
import ChildForPassingProps from "./passingProps/child";
import Greeting from "./props/Greeting";
import ReactMemo from "./reactMemo/ReactMemo";
import TabComponents from "./tabComponent/Tab";
import MakeTable from "./table/makeTable";
import TableOfTwo from "./table/twoTable";
import TodoApp from "./todoApp/TodoApp";
import ToogleButton from "./toogleComp/ToogleComp";
import Timer from "./useEffect/Timer";
import Counter from "./useState/Counter";

const RevisionOfReact = () => {
    const title = 'Nandini';
    const name = 'Sundari';

    return (
        <>
            <h1>Revision Of React Js</h1>
            {/* <ReactMemo /> */}
            {/* <TabComponents /> */}
            {/* <Counter /> */}
            {/* <Timer /> */}
            {/* <Greeting title={title} /> */}
            {/* <MakeTable /> */}
            {/* <TableOfTwo /> */}
            {/* <FetchData /> */}
            {/* <ChildForPassingProps name={name} title={title} /> */}
            {/* <CounterFile /> */}
            {/* <ToogleButton /> */}
            {/* <TodoApp /> */}
            {/* <PaginatedList /> */}
            {/* <LoginForm /> */}
            {/* <Accordion /> */}
        </>
    )
}


export default RevisionOfReact;
