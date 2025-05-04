import { Button } from "./Button";

type FormHeaderProps = {
  title: string;
  onAddSubtask: () => void;
  onSave: () => void;
};

const FormHeader = ({ title, onAddSubtask, onSave }: FormHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <div className="flex gap-2">
        <Button variant="secondary" onClick={onAddSubtask} className="flex items-center">
        Add subtask 
        </Button>
        <Button variant="primary" onClick={onSave}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default FormHeader;
