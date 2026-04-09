
export default function Input  ({ label, value, placeholder, type, onChange }:
       {  label: string,
          value: string, 
          placeholder: string,
          type: string 
          onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
       }
){
    return (
        <div className="group flex flex-col pl-5 py-2 relative ">
             <label> {label}</label>
             <input placeholder={placeholder} className=" focus:ring-0 focus:outline-none focus:ring-transparent " defaultValue={value} type={type} onChange={onChange} />
        </div>
    );
}

