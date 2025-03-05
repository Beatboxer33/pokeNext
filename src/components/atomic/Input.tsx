import { useState } from "react";

export default function Input({
  titleVisible,
  title,
  id,
}: {
  titleVisible: boolean;
  title: string;

  id: number;
}) {
    const inputState = useState("");
  
    const [value, setValue] = inputState;
    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
      setValue(event.target.value);
    

  if (titleVisible) {
    return (
      <>
        {
          <div>
            <p>{title}</p>
          </div>
        }
        <input  key={id} className="input" onChange={onInputChange} value={value} />
      </>
    );
  }
  return (
    <>
      <input key={id} className="input" onChange={onInputChange} value={value} />
    </>
  );
}
