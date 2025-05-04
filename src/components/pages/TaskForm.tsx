import { useState } from "react";
import FormHeader from "../form/FormHeader";
import { Input } from "../form/Input";
import { Label } from "../form/Label";
import { Select } from "../form/Select";
import MultiSelect from "../form/MultiSelect";
import { HelperText } from "../form/HelperText";

const options = [
  { value: "financial", label: "Financial Support" },
  { value: "review", label: "Waiting for Review" },
];

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

  const [selectedMultiOptions, setSelectedMultiOptions] = useState([]);

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

  const handleMultiSelectChange = (newValue: any) => {
    setSelectedMultiOptions(newValue);
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

      <div>
        <Label htmlFor="startDate">Start Date</Label>
        <Input id="startDate" name="startDate" type="date" onChange={handleChange} />
      </div>

      <div>
        <Label htmlFor="dueDate">Due Date</Label>
        <Input id="dueDate" name="dueDate" type="date" onChange={handleChange} />
      </div>

      <div >
        <label htmlFor="multiSelect" className="block text-sm font-medium text-gray-700 mb-1">Project</label>
        <MultiSelect
          options={options}
          value={selectedMultiOptions}
          onChange={handleMultiSelectChange}
        />
      </div>

      <div>
        <Label htmlFor="priority">Priority</Label>
        <Select
          id="priority"
          name="priority"
          onChange={handleChange}
          options={[
            { value: "low", label: "Low" },
            { value: "medium", label: "Medium" },
            { value: "high", label: "High" },
          ]}
        />
      </div> 

      </div>

      <div className="mt-4">
        <Label htmlFor="description">Description</Label>
        <textarea
          id="description"
          name="description"
          placeholder="Add your description..."
          onChange={handleChange}
          className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 pb-20 focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <HelperText>This is a hint text to help user.</HelperText>
      </div>

      </form>
    </div>
  );
};

export default TaskForm;
