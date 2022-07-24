import "./App.css";
// import TaskCard from "./components/task-card/TaskCard";
import TaskViewer from "./components/task-viewer/TaskViewer"


function App() {
  const data = [
    {
      id: "T-1",
      name: "Create a Design System for Enum Workspace.",
      status: "Todo",
      dueDate: new Date(2022, 5, 23),
    },
    {
      id: "T-1",
      name: "Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: new Date(2022, 7, 24),
    },
    {
      id: "T-1",
      name: "Create a Design System for Enum Workspace.",
      status: "Completed",
      dueDate: new Date(2022, 7, 24),
    },
    {
      id: "T-1",
      name: "Create a Design System for Enum Workspace.",
      status: "Done",
      dueDate: new Date(2022, 7, 24),
    },
    {
      id: "T-1",
      name: "Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: new Date(2022, 7, 24),
    },
    {
      id: "T-1",
      name: "Create a Design System for Enum Workspace.",
      status: "Todo",
      dueDate: new Date(2022, 7, 24),
    },
    {
      id: "T-1",
      name: "Create a Design System for Enum Workspace.",
      status: "Completed",
      dueDate: new Date(2022, 0, 24),
    },
  ];

  return (
    <div className="app-container">
      <TaskViewer data={data}/>
    </div>
  );
}

export default App;
