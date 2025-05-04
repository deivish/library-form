import { useState } from "react";
import FormHeader from "../form/FormHeader";
import { Input } from "../form/Input";
import { Label } from "../form/Label";

const TaskForm = () => {

  const [formData, setFormData] = useState({
    assignee: "",
    assignTo: "",
    startDate: "",
    dueDate: "",
    project: "",
    priority: "",
    description: "",
  });

  const handleAddSubtask = () => {
    console.log("Subtask added");
  };

  const handleSave = () => {
    console.log("Form saved");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-md">
      <FormHeader
        title="Task Name"
        onAddSubtask={handleAddSubtask}
        onSave={handleSave}
      />
      <form >
        <div className="grid grid-cols-2 gap-4">
      <div>
        <Label htmlFor="assignee" required>Assignee</Label>
        <Input id="assignee" name="assignee" value={formData.assignee} onChange={handleChange} />
      </div>

      <div>
        <Label htmlFor="assignTo">Assign To</Label>
        <Input id="assignTo" name="assignTo" value={formData.assignee} onChange={handleChange} />
      </div>
      </div>
      </form>
    </div>
  );
};

export default TaskForm;
