import type { ComponentProps } from "react"

interface IInput extends ComponentProps<"input"> {
  label: string
}

export const Input = ({ label, type, id,name, ...rest }: IInput) => {
  return (
    <div className="form-control">
      <label htmlFor={id}>{label}</label>
      <input
        {...rest}
        type={type || "text"}
        name={name || id}
        id={id}
      />
    </div>
  )
}