import FormHeader from "../form/FormHeader";

const TaskForm = () => {
  const handleAddSubtask = () => {
    console.log("Subtask added");
  };

  const handleSave = () => {
    console.log("Form saved");
  };
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-md">
      <FormHeader
        title="Task Name"
        onAddSubtask={handleAddSubtask}
        onSave={handleSave}
      />
      <form>
      
      </form>
    </div>
  );
};

export default TaskForm;
