
import TextField from './components/TextField'

function LoginForm() {
  return (
    <form>
      <TextField
        label="Email"
        type="email"
        name="email"
        required
        helperText="We'll never share your email with anyone else."
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        required
        error="Password must be at least 8 characters long"
      />
      {/* Add submit button and other form elements */}
    </form>
  )
}