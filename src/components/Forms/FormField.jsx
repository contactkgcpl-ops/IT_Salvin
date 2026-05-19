const FormField = ({ label, placeholder, type = 'text', required = true }) => (
  <label className="form-group">
    {label}
    <input type={type} placeholder={placeholder} required={required} />
  </label>
)

export default FormField
