import { useState } from "react";
import FormHeader from "../form/FormHeader";
import { Input } from "../form/Input";
import { Label } from "../form/Label";
import { Select } from "../form/Select";
import { HelperText } from "../form/HelperText";
import { InputPassword } from "../form/InputPassword";
import { MultiSelect } from "../form/MultiSelect";

const options = [
  { value: "financial", label: "Financial Support" },
  { value: "review", label: "Waiting for Review" },
];

type Option = { value: string; label: string };

type FormData = {
  assignee: string;
  assignTo: string;
  startDate: string;
  dueDate: string;
  project: string;
  priority: string;
  description: string;
  password: string;
  [key: string]: string;
};

const TaskForm = () => {
  const [selected, setSelected] = useState<Option[]>([]);

  const [formData, setFormData] = useState<FormData>({
    assignee: "",
    assignTo: "",
    startDate: "",
    dueDate: "",
    project: "",
    priority: "",
    description: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({
    assignee: "",
    assignTo: "",
    description: "",
    startDate: "",
    dueDate: "",
    project: "",
    priority: "",
    password: "",
  });

  const handleAddSubtask = () => {
    console.log("Subtask added");
  };

  const handleSave = () => {
    validateForm();
    console.log("Form saved");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let newErrors = { ...errors };
    if (!formData.assignee) newErrors.assignee = "Assignee is required.";
    if (!formData.assignTo) newErrors.assignTo = "Assign To is required.";
    if (!formData.description) newErrors.description = "Description is required.";
    if (!formData.startDate) newErrors.startDate = "Start Date is required.";
    if (!formData.dueDate) newErrors.dueDate = "Due Date is required.";
    if (selected.length === 0) newErrors.project = "Project is required.";
    if (!formData.priority) newErrors.priority = "Priority is required.";
    if (!formData.password) newErrors.password = "Password is required.";

    setErrors(newErrors);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-md mt-6">
      <FormHeader
        title="Task Name"
        onAddSubtask={handleAddSubtask}
        onSave={handleSave}
      />
      <hr className="border-t border-gray-200 my-2 pb-2" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          validateForm();
        }}
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="assignee" required>
              Assignee
            </Label>
            <Input
              id="assignee"
              name="assignee"
              value={formData.assignee}
              onChange={handleChange}
              aria-describedby="assignee-helper"
            />
            {errors.assignee && (
              <HelperText id="assignee-helper" state="error">
                {errors.assignee}
              </HelperText>
            )}
          </div>

          <div>
            <Label htmlFor="assignTo">Assign To</Label>
            <Input
              id="assignTo"
              name="assignTo"
              value={formData.assignTo}
              onChange={handleChange}
              aria-describedby="assignTo-helper"
            />
            {errors.assignTo && (
              <HelperText id="assignTo-helper" state="error">
                {errors.assignTo}
              </HelperText>
            )}
          </div>

          <div>
            <Label htmlFor="startDate">Start Date</Label>
            <Input
              id="startDate"
              name="startDate"
              type="date"
              onChange={handleChange}
              value={formData.startDate}
              aria-describedby="startDate-helper"
            />
            {errors.startDate && (
              <HelperText id="startDate-helper" state="error">
                {errors.startDate}
              </HelperText>
            )}
          </div>

          <div>
            <Label htmlFor="dueDate">Due Date</Label>
            <Input
              id="dueDate"
              name="dueDate"
              type="date"
              onChange={handleChange}
              value={formData.dueDate}
              aria-describedby="dueDate-helper"
            />
            {errors.dueDate && (
              <HelperText id="dueDate-helper" state="error">
                {errors.dueDate}
              </HelperText>
            )}
          </div>

          <div>
            <Label htmlFor="project" required>
              Project
            </Label>
            <MultiSelect
              options={options}
              selected={selected}
              onChange={(newSelected) => {
                setSelected(newSelected);
                if (newSelected.length > 0 && errors.project) {
                  setErrors((prev) => ({ ...prev, project: "" }));
                }
              }}
            />
            {errors.project && (
              <HelperText id="project-helper" state="error">
                {errors.project}
              </HelperText>
            )}
          </div>

          <div>
            <Label htmlFor="priority">Priority</Label>
            <Select
              id="priority"
              name="priority"
              required
              onChange={handleChange}
              options={[
                { value: "low", label: "Low" },
                { value: "medium", label: "Medium" },
                { value: "high", label: "High" },
              ]}
              aria-describedby="priority-helper"
            />
            {errors.priority && (
              <HelperText id="priority-helper" state="error">
                {errors.priority}
              </HelperText>
            )}
          </div>
        </div>

        <div className="mt-4">
          <Label htmlFor="description">Description</Label>
          <textarea
            id="description"
            name="description"
            placeholder="Add your description..."
            value={formData.description}
            onChange={handleChange}
            className="mt-1 w-full border text-gray-500 border-gray-300 rounded-lg px-4 py-2 pb-20 focus:ring-2 focus:ring-blue-500 hover:border-2 hover:border-blue-500"
            aria-describedby="description-helper"
          ></textarea>
          {errors.description && (
            <HelperText id="description-helper" state="error">
              {errors.description}
            </HelperText>
          )}
          <HelperText>This is a hint text to help user.</HelperText>
        </div>

        <div style={{ width: "420px" }}>
          <Label htmlFor="password" required>
            Password
          </Label>
          <InputPassword
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            aria-describedby="password-helper"
          />
          {errors.password && (
            <HelperText id="password-helper" state="error">
              {errors.password}
            </HelperText>
          )}
          <HelperText>Add your password for verification.</HelperText>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
